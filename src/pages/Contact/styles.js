import styled, { keyframes } from "styled-components";

const slideInLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const slideInRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const slideInUp = keyframes`
    from {
    opacity: 0;
    transform: translateY(50px);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #1b1b1b;
  overflow-x: hidden;

  @media (max-width: 768px){
    
    
  }
`;
export const SubContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  margin: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 100vh;
    position: relative;
  }
`;
export const DivImage = styled.div`
  padding: 0;
  margin: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    display: block;
    animation: ${slideInLeft} 3s ease-out forwards;
  }

  @media (max-width: 768px){
    position: absolute;
    inset: 0;
    z-index: 0;

      img {
        height: 100%;
        opacity: 0.25;
      }
  }
`;
export const DivContacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;  
  gap: 20px;

  @media (max-width: 768px){
    padding-left: 0;
    z-index: 1;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center; 
  }
`;
export const Title = styled.h2`
  color: #fff;
  text-shadow: 0 0 10px #000, 0 0 20px #000;
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-family: "anton", sans-serif;
  font-weight: 500;
  margin: 0 0;
  text-align: left;
  cursor: pointer;
  animation: ${slideInUp} 4s ease-out forwards;
  &:hover {
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    font-size: 3.4rem;
    text-align: center;
    
    
    
  }
`;
export const SubTitle = styled.h1`
  color: #fff;
  text-shadow: 0 0 10px #000, 0 0 20px #000;
  font-size: 2.5rem;
  margin-bottom: 40px;
  font-family: "anton", sans-serif;
  font-weight: 500;
  margin: 0 ;
  cursor: pointer;
  animation: ${slideInUp} 3s ease-out forwards;
  &:hover {
    color: #ffffff;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px){
    font-size: 2.2rem;
    text-align: center;
    margin-bottom: 3rem;
  }
`;
export const SocialMidia = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 40px 0;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;
export const WhatsApp = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;

  img {
    margin-right: 10px;
    width: 15rem;
    animation: ${slideInLeft} 2s ease-out forwards;
    cursor: pointer;
    &:hover {
      width: 15.5rem;
      transition: all 0.3s ease-in-out;
    }
    @media (max-width: 768px) {
      width: 10rem;
      margin-right: 0;
      
  }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    flex: 1;
    gap:0;
    position: relative;
    margin-bottom: 0px;
  }
`;
export const Instagram = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  gap: 1px;
  img {
    margin-right: 10px;
    width: 15rem;
    animation: ${slideInLeft} 1s ease-out forwards;
    cursor: pointer;

    &:hover {
      width: 15.5rem;
      transition: all 0.3s ease-in-out;
    }
    @media (max-width: 768px) {
      width: 10rem;
      margin-right: 0;
      
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap:0;
    position: relative;
  }
`;
export const Paragraph = styled.p`
  color: #ffffff;
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-family: "poppins", sans-serif;
  font-weight: 400;
  animation: ${slideInRight} 2s ease-out forwards;
  cursor: pointer;

  &:hover {
    color: #faa1d4;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width:768px) {
    color: #fff;
  text-shadow: 0 0 10px #000, 0 0 20px #000;
    font-size: 1.8rem;
    z-index: 1;
    position: relative;
    right: 1.5rem;
  }
`;
