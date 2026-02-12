import styled , { keyframes } from "styled-components";

const slideInLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;


export const WhatsApp = styled.div`
  z-index: 999;
  position: fixed;
  bottom: 0;
  right: 0;

 img {
    width: 10rem;
    animation: ${slideInLeft} 1.8s ease-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
      transition: 0.3s;
    }
  }
`;

export const Paragraph = styled.span`
  margin-left: 8px;
  font-weight: 600;
  color: #25d366;

  @media (max-width: 768px) {
    display: none;
  }
`;