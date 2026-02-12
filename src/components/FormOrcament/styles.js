import styled from "styled-components";

/* FUNDO ESCURO */
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;
`;

/* CAIXA DO MODAL */
export const Modal = styled.div`
  position: relative;
`;

/* BOTÃO FECHAR */
export const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  background: #c51277;
  border: none;
  color: white;
  font-size: 18px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
`;

export const FormContainer = styled.form`
    max-width: 500px;
    margin: 60px auto;
    padding: 40px;
    background: #111;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Title = styled.h2`
    color: white;
    text-align: center;
`;

export const Input = styled.input`
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #333;
    background: #1a1a1a;
    color: white;

    &:focus {
        outline: none;
        border: 1px solid #25d366;
    }
`;

export const TextArea = styled.textarea`
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #333;
    background: #1a1a1a;
    color: white;
    resize: none;
    min-height: 100px;

    &:focus {
        outline: none;
        border: 1px solid #25d366;
    }
`;

export const Button = styled.button`
    padding: 14px;
    border-radius: 8px;
    border: none;
    background: #FAA1D4;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background: #c51277;
    }
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 14px;
    text-align: center;
`;