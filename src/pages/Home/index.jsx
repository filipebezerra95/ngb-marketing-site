import { Title, Container, DivTitle, DivHome } from "./styles";
import BusinessPersonal from "../../components/BusinessPersonal";
import NavBar from "../../components/NavBar";
import BoxVideo from "../../components/BoxVideoBg";


function Home() {
  const myText = "CHEGOU A HORA DE FAZER ACONTECER!";

  return (
    <Container>
      <BoxVideo />
      <NavBar />
      <DivHome>
        <DivTitle>
          <Title>{myText}</Title>
        </DivTitle>
        <BusinessPersonal></BusinessPersonal>
      </DivHome>
    </Container>
  );
}

export default Home;
