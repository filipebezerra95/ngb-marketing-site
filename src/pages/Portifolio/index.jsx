import {
  Container,
  DivCards,
  DivTitle,
  SubContainer,
  SubTitle,
  Title,
  TitleIdentify,
} from "./styles";
import NavBar from "../../components/NavBar";
import Carousel from "../../components/Carousel";
import VideoCarousel from "../../components/videoCarousel";
import LogoCaroussel from "../../components/LogoCaroussel";
import BannerCaroussel from "../../components/BannerCaroussel";
import { useEffect } from "react";

function Portifolio() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      <NavBar />
      <SubContainer>
        <DivTitle>
          <Title className="animate">PORTIFÓLIO</Title>
          <SubTitle className="animate">FOTOS PROFISSIONAIS</SubTitle>
        </DivTitle>
        <DivCards className="animate">
          <Carousel />
        </DivCards>
        
        <DivTitle>
          <SubTitle className="animate">VIDEOS PROFISSIONAIS</SubTitle>
        </DivTitle>
        <DivCards className="animate">
          <VideoCarousel />

        </DivCards>
        
        <DivTitle>
          <TitleIdentify className="animate">IDENTIDADE VISUAL</TitleIdentify>
        </DivTitle>
        <DivCards className="animate">
          <LogoCaroussel className="animate"  />
        </DivCards>
        <DivTitle>
          <TitleIdentify className="animate">BANNERS PARA INSTAGRAM</TitleIdentify>
        </DivTitle>
        <DivCards className="animate">
          <BannerCaroussel className="animate"  />
        </DivCards>
      </SubContainer>
    </Container>
  );
}

export default Portifolio;
