import { WhatsApp, Paragraph } from "./styles";
import WhatsBtn from "../../assets/contact/whatsIcon.png";

const CONTACT_INFO = {
  phone: "5512991816453",
  displayPhone: "(12) 99181-6453",
  message: "Olá! Gostaria de pedir um orçamento",
};

function ButtonFloatOrcament() {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(CONTACT_INFO.message)}`;
  return (
    <>
      <WhatsApp>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
          <img src={WhatsBtn} alt="Ícone do WhatsApp" />
          <Paragraph>{CONTACT_INFO.displayPhone}</Paragraph>
        </a>
      </WhatsApp>
    </>
  );
}

export default ButtonFloatOrcament;
