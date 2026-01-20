import {
  
  Container,
  DivArts,
  DivLandingPages,
  DivLogotypes,
  DivMaterials,
  DivParagraph,
  DivTitle,
  DivVideo,
  SubArticles,
  SubContainer,
  SubTitle,
  TextBox,
  TextSubTitle,
  Title,
} from "./styles";
import NavBarWhite from "../../components/NavBarWhite";

function OurServices() {
  const myText = "SERVIÇOS QUE OFERECEMOS";

  return (
    <Container>
      <NavBarWhite />
      <SubContainer>
        <SubArticles>
        <DivTitle>
          <Title>{myText}</Title>
        </DivTitle>
        <TextBox>
          <DivArts>
            <SubTitle>ARTES PARA REDES SOCIAIS</SubTitle>
            <TextSubTitle>
              Projetos gráficos criados para atender a necessidade do seu
              negócio, chamar atenção, vender e engajar.
            </TextSubTitle>
          </DivArts>
          <DivLandingPages>
            <SubTitle>LANDING PAGES</SubTitle>
            <TextSubTitle>
              Páginas estratégicas de alta conversão para captar leads, vender e
              gerar resultados reais.
            </TextSubTitle>
          </DivLandingPages>
        </TextBox>
      </SubArticles>
      
        <DivParagraph>
          <DivLogotypes>
            <SubTitle>LOGOTIPOS</SubTitle>
            <TextSubTitle>Logotipos e identidade da marca.</TextSubTitle>
          </DivLogotypes>
          <DivMaterials>
            <SubTitle>MATERIAIS GRÁFICOS</SubTitle>
            <TextSubTitle>
              Artes para impressões gráficas, como flyers, folhetos, catálogos,
              cardápios, etc...
            </TextSubTitle>
          </DivMaterials>
          <DivVideo>
            <SubTitle>VÍDEOS E POSTS ANIMADOS</SubTitle>
            <TextSubTitle>
              Gravação e edições de vídeos, desenvolvimento de posts e reels
              animados.
            </TextSubTitle>
          </DivVideo>
        </DivParagraph>
      

      </SubContainer>
      
    </Container>
  );
}

export default OurServices;
