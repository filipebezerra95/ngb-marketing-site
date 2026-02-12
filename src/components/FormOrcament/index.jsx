import { useState } from "react";
import {
    Overlay,
    Modal,
    CloseButton,
    FormContainer,
    Title,
    Input,
    TextArea,
    Button,
    ErrorMessage,
} from './styles';

function FormOrcament({ isOpen, onClose }){
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
    });

    const [error, setError] = useState("");

    if (!isOpen) return null;
    

    function handleChange(e) {
        const {name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

         const numeroWhatsApp = "5512991816453";

         const mensagem = `
            Olá! Gostaria de solicitar um orçamento.

                -------------------------
                =>Nome: ${formData.nome}
                =>Email: ${formData.email}
                =>Telefone: ${formData.telefone}

                *Sobre o negócio:
                ${formData.mensagem}
                -------------------------
                `;
            const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
                mensagem
            )}`;

  window.open(url, "_blank");

        if (!formData.nome || !formData.email || !formData.telefone || !formData.mensagem) {
            setError("Preencha todos os campos antes de enviar.");
            return;
        }

        setError("");

        console.log("Dados enviados:", formData);

        alert("Orçamento enviado com sucesso 🚀");

        setFormData({
            nome: "",
            email: "",
            telefone: "",
            mensagem: "",
        });

        onClose();
    }

    return (
        <Overlay onClick={onClose}>
            <Modal onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>X</CloseButton>
                <FormContainer onSubmit={handleSubmit}>
            <Title>Solicite seu orçamento</Title>

            <Input 
                type="text"
                name="nome"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={handleChange}
            />

            <Input 
                type="email"
                name="email"
                placeholder="Seu email"
                value={formData.email}
                onChange={handleChange}
            />

            <Input 
                type="tel"
                name="telefone"
                placeholder="Seu telefone"
                value={formData.telefone}
                onChange={handleChange}
            />

            <TextArea 
                name="mensagem"
                placeholder="Fale um pouco sobre o seu negócio..."
                value={formData.mensagem}
                onChange={handleChange}
            />

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Button type="submit">Enviar orçamento</Button>

        </FormContainer>
            </Modal>
        </Overlay>
        
    );
}

export default FormOrcament;