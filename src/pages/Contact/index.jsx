import {
  Container,
  DivContacts,
  DivImage,
  Instagram,
  Paragraph,
  SocialMidia,
  SubContainer,
  SubTitle,
  Title,
  WhatsApp,
} from "./styles";
import NavBar from "../../components/NavBar";
import ProfImage from "../../assets/contact/professionalImage.svg";
import WhatsIcon from "../../assets/contact/whatsIcon.png";
import InstaIcon from "../../assets/contact/instaIcon.png";

// Configurações centralizadas
const CONTACT_INFO = {
  phone: "5512991816453",
  displayPhone: "(12) 99181-6453",
  message: "Olá! Gostaria de pedir um orçamento",
  instagram: "@ngbmarketing",
};

function Contact() {
  // Gera a URL de forma limpa
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(CONTACT_INFO.message)}`;
  const instagramUrl = `https://www.instagram.com/${CONTACT_INFO.instagram.replace('@', '')}/`;
  return (
    <Container>
      <div style={{ padding: '0 20px', width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
        <NavBar />
      </div>
      <SubContainer>
        <DivImage>
          <img src={ProfImage} alt="Professional" />
        </DivImage>
        <DivContacts>
          <Title>Nos acompanhe nas redes sociais</Title>
          <SubTitle>Faça seu orçamento</SubTitle>
          <SocialMidia>
            <WhatsApp>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                <img src={WhatsIcon} alt="Ícone do WhatsApp" />
                <Paragraph>{CONTACT_INFO.displayPhone}</Paragraph>
              </a>
            </WhatsApp>
            <Instagram>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                <img src={InstaIcon} alt="Ícone do Instagram" />
                <Paragraph>{CONTACT_INFO.instagram}</Paragraph>
              </a>
            </Instagram>
          </SocialMidia>
        </DivContacts>
      </SubContainer>
    </Container>
  );
}

export default Contact;
