import { Title, Container, DivTitle, DivHome } from "./styles";
import BusinessPersonal from "../../components/BusinessPersonal";
import NavBar from "../../components/NavBar";
import BoxVideo from "../../components/BoxVideoBg";


function Home() {
  

  return (
    <Container>
      <BoxVideo />
      <NavBar />
      <DivHome>
        <BusinessPersonal />
        <DivTitle>
          <Title>Enquanto você cuida do seu <span>negócio</span>,nós cuidamos do seu <span>crescimento</span>.</Title>
        </DivTitle>
        
      </DivHome>
    </Container>
  );
}

export default Home;
