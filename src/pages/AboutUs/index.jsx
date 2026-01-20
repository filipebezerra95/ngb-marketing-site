import {
  Container,
  DivImage,
  DivTitle,
  ImageLipe,
  ImageNath,
  SecondDiv,
  SubContainer,
  SubContainer2,
  SubContainer3,
  Text,
  Text2,
  Text3,
  ThirdDiv,
  Title,
  Title2,
} from "./styles";
import NavBar from "../../components/NavBar";
import NathBusiness from "../../assets/about/nathBusiness.svg";
import LipeBusiness from "../../assets/about/filipeBusiness.svg";
import { useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else { entry.target.classList.remove("show"); }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll(".animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <Container>
      <div
        style={{
          padding: "0 20px",
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        <NavBar />
      </div>
      <SubContainer>
        <Title className="animate" >SOBRE NÓS</Title>
        <Text className="animate">
          A NGB Marketing nasceu da visão de construir marcas fortes com
          propósito, posicionamento e resultados reais. Acreditamos que cada
          negócio tem uma história poderosa, e a nossa missão é transformar essa
          história em presença e crescimento, através de uma estratégia.
        </Text>
      </SubContainer>
      <SubContainer2>
        <DivTitle >
          <Title2 className="animate">QUEM ESTÁ POR TRÁS DA AGÊNCIA?</Title2>
        </DivTitle>
        <SecondDiv>
          <Text2 className="animate">
            Meu nome é <span style={{ fontWeight: "bolder" }}>Nathalia</span>,
            sou Empresária, Fundadora e CEO da NGB Marketing. Desde muito cedo,
            sempre fui apaixonada pelo universo digital. Na adolescência, dei
            meus primeiros passos… com o tempo, entre experiências e desafios,
            descobri no marketing a minha verdadeira área de propósito. Busquei
            direção em Deus e Ele me surpreendeu: meus primeiros clientes
            chegaram antes mesmo de eu divulgar meu trabalho. Hoje, lidero a NGB
            unindo estratégia, comunicação e criatividade para transformar
            negócios e ajudar marcas a crescerem com autenticidade e impacto
          </Text2>
          <DivImage >
            <ImageNath className="animate" src={NathBusiness} />
          </DivImage>
        </SecondDiv>
      </SubContainer2>
      <SubContainer3>
        <ThirdDiv>
          <Text3 className="animate">
            Meu nome é <span style={{ fontWeight: "bolder" }}>Filipe</span>, sou Empresário, Diretor de Tecnologia e
            Desenvolvimento Web. A paixão pela programação me levou a estudar
            cada vez mais, e a partir daí, descobri o prazer de transformar
            ideias em soluções digitais reais. Hoje, desenvolvo sites e landing
            pages com foco em performance, experiência e estratégia, unindo
            criatividade, técnica e propósito para fortalecer marcas e
            impulsionar negócios.
            </Text3>
            <DivImage >
              <ImageLipe className="animate" src={LipeBusiness} />
            </DivImage>
            

        </ThirdDiv>
      </SubContainer3>
    </Container>
  );
}

export default AboutUs;
