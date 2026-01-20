import { AlcanceImg, Container, DivPainel, DivTitle, FirstDiv, PainelImg1, PainelImg2, SecondDiv, SubContainer, Title, VisibilityImg } from "./styles"
import NavBar from "../../components/NavBar";
import ProfessionalPainel1 from "../../assets/results/profissionalPainel1.svg"
import ProfessionalPainel2 from "../../assets/results/profissionalPainel2.svg"
import Alcance from "../../assets/results/alcancePainel.svg"
import Visibility from "../../assets/results/visibilityPainel.svg"

function SomeResults() {
  const myText = 'ALGUNS DE NOSSOS RESULTADOS'

  return (
    <Container>
      <NavBar />
      <SubContainer>
        <FirstDiv>
          <DivPainel>
            <PainelImg1 src={ProfessionalPainel1} />
            <PainelImg2 src={ProfessionalPainel2} />
          </DivPainel>
          <DivTitle>
            <Title>{myText}</Title>
          </DivTitle>
        </FirstDiv>
        <SecondDiv>
          <AlcanceImg src={Alcance} />
          <VisibilityImg src={Visibility} />
        </SecondDiv>
      </SubContainer>
    </Container>
  )
}

export default SomeResults