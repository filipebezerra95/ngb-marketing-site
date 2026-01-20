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
   padding: 0 20px;
   background-color: #1b1b1b;
   overflow: hidden;
   
`
export const SubContainer = styled.div`
   display: flex;
   flex-direction: column;

`
export const DivTitle = styled.div`
display: flex;
flex-direction: column;
gap: 20px;

`
export const Title = styled.h1`
 color: #fff;
    font-size: clamp(2rem, 7vw, 130px);
    font-family: 'anton';
    font-weight: bold;
    line-height: 1;
    text-align: center;
    margin-top: 4vh;
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

    @media (max-width: 768px){
        font-size: 3.5rem;
        margin-top: 0;
    }

`

export const SubTitle = styled.h2`
    color: #FAA1D4;
    font-size: clamp(1rem, 4vw, 130px);
    font-family: 'anton';
    font-weight: bold;
    line-height: 1;
    text-align: center;
    margin-top: 5vh;
    margin-bottom: 10PX;
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.3s ease-out;
    &.show {
      animation: ${slideInRight} 2s ease-out forwards;

    }
    
    cursor: pointer;
    &:hover {
        color: #FF85C1;
        transition: color 0.3s ease;
    }

    @media (max-width:768px) {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 2rem;
    }
`
export const DivCards = styled.div`
   width: 100%;
   height: 100%;
   margin: 0 auto;
   opacity: 0;
    transform: translateY(-50px);
    transition: all 0.3s ease-out;
    &.show {
      animation: ${slideInUp} 2s ease-out forwards;

    }
    @media (max-width: 768px){
        width: 22rem;
        margin-bottom: 10px;
    }
`
export const TitleIdentify = styled.h2`
 color: #FAA1D4;
    font-size: clamp(1rem, 4vw, 130px);
    font-family: 'anton';
    font-weight: bold;
    line-height: 1;
    text-align: center;
    margin-top: 5vh;
    margin-bottom: 10PX;
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.3s ease-out;
    &.show {
      animation: ${slideInRight} 2s ease-out forwards;

    }
    
    cursor: pointer;
    &:hover {
        color: #FF85C1;
        transition: color 0.3s ease;
    }

    @media (max-width: 768px) {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 2rem;
    }

`

