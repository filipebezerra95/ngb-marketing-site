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
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0;
  background-color: #1b1b1b;
  overflow: hidden;
`;
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 0 10%;

  @media (max-width: 768px){
    align-items: center;
    justify-content: flex-start;
    
  }
`;
export const Title = styled.h1`
   color: #FAA1D4;
    font-size: clamp(3rem, 9vw, 130px);
    font-family: 'anton';
    font-weight: bold;
    line-height: 1;
    margin-bottom: 20px;
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.3s ease-out;
    &.show {
      animation: ${slideInLeft} 2s ease-out forwards;
    }    
    cursor: pointer;
    &:hover {
        color: #FF85C1;
        transition: color 0.3s ease;
    }
    @media (max-width: 768px) {
      font-size: 3.5rem;
      margin-bottom: 40px;
    }

`;
export const Text = styled.p`

   color: #FFFFFF;
   font-size: clamp(1.8rem, 2vw, 1.9rem);
   line-height: 1.6;
   max-width: 800px;
   opacity: 0;
    transform: translateX(-50px);
    transition: all 0.3s ease-out;
    &.show{
      animation: ${slideInRight} 2s ease-out forwards;

    }
   
   cursor: pointer;
   &:hover {
       color: #FF85C1;
       transition: color 0.3s ease;
   }

   @media (max-width: 768px) {
    font-size: 1.7rem;
   }

`;

export const SubContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 768px) {
    
  }
`;
export const DivTitle = styled.div`
  margin-bottom: 10px;
  animation: ${slideInUp} 3s ease-out forwards;
`;
export const Title2 = styled.h1`
    color: #FAA1D4;
    font-size: clamp(2rem, 7vw, 150px);
    font-family: 'anton';
    font-weight: bold;
    line-height: 1;
    text-align: left;
    margin-top: 6vh;
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.3s ease-out;
    &.show {
      animation: ${slideInLeft} 2s ease-out forwards;
    }    
    cursor: pointer;
    &:hover {
        color: #FF85C1;
        transition: color 0.3s ease;
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
      text-align: center;
      margin-top: 0;
      line-height: 1.5;
      font-weight: 400;
    }

`;
export const SecondDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 768px){
    flex-direction: column-reverse;
  }
`;
export const Text2 = styled.p`
   color: #FFFFFF;
   font-size: clamp(1.5rem, 2vw, 1.4rem);
   max-width: 700px;
   line-height: 1.8;
   text-align: left;
   margin-left: 20px;
   flex: 1;
   opacity: 0;
    transform: translateX(-50px);
    transition: all 0.3s ease-out;
    &.show{
      animation: ${slideInRight} 2s ease-out forwards;

    }
   cursor: pointer;
   &:hover {
       color: #FF85C1;
       transition: color 0.3s ease;
   }

   @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-left: 0;
    text-align: center;
    width: 100%;
   }
`;
export const DivImage = styled.div`
  &:hover {
    transform: translateY(-10px);
    transition: 1.3s ease-in-out;
  }
`;

export const ImageNath = styled.img`
  width: 100%;
  max-width: 500px;
  object-fit: contain;
  height: auto;
  z-index: 1;
  opacity: 0;
  transform: translateY(30px);

  &.show {
    animation: ${slideInUp} 1.2s ease-out forwards;
  }

  cursor: pointer;
`;
export const SubContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
export const ThirdDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  gap: 10px;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const Text3 = styled.p`
    color: #FFFFFF;
   font-size: clamp(1rem, 2vw, 11.4rem);
   max-width: 650px;
   line-height: 1.8;
   flex: 1;
   text-align: left;
   margin-right: 120px;
   opacity: 0;
    transform: translateX(-50px);
    transition: all 0.3s ease-out;
    &.show{
      animation: ${slideInRight} 2s ease-out forwards;
    }
   cursor: pointer;
   &:hover {
       color: #FF85C1;
       transition: color 0.3s ease;
   }
    @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-left: 0;
    text-align: center;
    width: 100%;
    margin-right: 0;
    
   }
`;

export const ImageLipe = styled.img`
  width: 100%;
  max-width: 500px;
  object-fit: contain;
  height: auto;
  z-index: 1;
  opacity: 0;
  transform: translateY(30px);

  &.show {
    animation: ${slideInUp} 1.2s ease-out forwards;
  }
  cursor: pointer;

  @media (max-height: 731px) {
    position: relative;
    top: 100%;
  }
`;
