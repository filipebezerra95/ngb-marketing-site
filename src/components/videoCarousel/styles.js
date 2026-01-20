import styled from "styled-components";

export const VideoWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

export const VideoContainer = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
`

export const Video = styled.video`
  width: 100%;
  height: 500px;
  object-fit: cover;
  background: black;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.2)
  );
`
export const Info = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  z-index: 2;
  color: white;
`;

export const Title = styled.h3`
font-size: 28px;
margin-bottom: 16px;

`;

export const PlayButton = styled.button`
  padding: 12px 28px;
  font-size: 16px;
  border-radius: 6px;
  border: none;
  background: #e50914;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }
`;
