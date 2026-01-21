import styled, { keyframes} from "styled-components";

const slideInLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`
const slideInUp = keyframes`
    from {
    opacity: 0;
    transform: translateY(50px);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
`


export const Container = styled.div`
   width: 100%;
   max-width: 1440px;
   margin: 0 auto;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   padding: 0 20px;
   background-color: #1b1b1b;

   @media (max-width: 768px) {
      max-width: 768px;
   }
   
`
export const SubContainer = styled.div`
   display: grid;
   grid-template-columns: 2fr 1fr;

   @media (max-width:768px) {
      grid-template-columns: 1fr;
   }


`
export const FirstDiv = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;

`
export const SecondDiv = styled.div`
   display: flex;
   flex-direction: column;
   gap: 40px;
   align-items: center;
   justify-content: space-between;

   @media (max-width: 768px){
      margin-bottom: 30px;
   }

`
export const DivPainel = styled.div`
   display: flex;
   justify-content: space-around;
   gap: 20px;

   @media (max-width: 768px) {
      flex-direction: column;
   }

`
export const DivTitle = styled.div`
   margin-top: 20px;

   @media (max-width:768px) {
      margin-bottom: 20px;
   }
   

`
export const Title = styled.h1`
   color: #FAA1D4;
    font-size: clamp(3rem, 8vw, 130px);
    font-family: 'anton';
    font-weight: bold;
    line-height: 1;
    text-align: center;
    margin-top: 5vh;
    cursor: pointer;
    animation: ${slideInLeft} 4s ease-out forwards;
      &:hover{
         color: #fff;
         transition: all 0.3s ease-in-out;
      }

      @media (max-width: 768px) {
         margin-top: 0;
         color: #fff;
         text-shadow: 0 0 10px #000, 0 0 20px #000;
      }
    

`
export const AlcanceImg = styled.img`
   width: 300px;
   animation: ${slideInUp} 4s ease-out forwards;
   cursor: pointer;

   &:hover{
      width: 310px;
      transition: all 0.3s ease-in-out;
   }

   @media (max-width: 768px) {
      width: 22rem;
   }

`
export const VisibilityImg = styled.img`
   width: 300px;
   cursor: pointer;
   &:hover{
      width: 310px;
      transition: all 0.3s ease-in-out;
   }
   animation: ${slideInUp} 4s ease-out forwards;
   @media (max-width: 768px) {
      width: 22rem;
   }

`
export const PainelImg1 = styled.img`
   animation: ${slideInLeft} 2s ease-out forwards;
   cursor: pointer;

   &:hover{
      width: 420px;
      transition: all 0.3s ease-in-out;
   }

   @media (max-width: 768px) {
      width: 22rem;
   }


`
export const PainelImg2 = styled.img`
   animation: ${slideInLeft} 3s ease-out forwards;
   cursor: pointer;
   &:hover{
      width: 410px;
      transition: all 0.3s ease-in-out;
   }
   @media (max-width: 768px) {
      width: 22rem;
   }


`