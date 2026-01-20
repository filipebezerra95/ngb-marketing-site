import styled from "styled-components";

export const CarouselWrapper = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;

    .swipper {
        padding-bottom: 30px;
    }
    
`;

export const SlideImage = styled.img`
    transition: transform 0.5s ease-in-out;
    width: 100%;
    height: 420px;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    &:hover {
    transform: scale(1.03);
  }
    
`