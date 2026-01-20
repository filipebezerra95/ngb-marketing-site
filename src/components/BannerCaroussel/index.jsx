import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { CarouselWrapper, SlideImage } from "./styles";
import agenda from "../../assets/banners/agenda.png"
import nath from "../../assets/banners/postNath.svg"
import croissant from "../../assets/banners/croissant.svg"
import titulo from "../../assets/banners/titulo.svg"
import catia from "../../assets/banners/grupoCatia.svg"
import limpeza from "../../assets/banners/limpezaPele.svg"
import nutri from "../../assets/banners/nutri.svg"
import nutriRaquel from "../../assets/banners/nutriRaquel.svg"
import vale from "../../assets/banners/valePresente.svg"


function BannerCaroussel() {
  return (
    <CarouselWrapper>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2},
          1024: { slidesPerView: 3},
        }}
        spaceBetween={24}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          
        }}
      >
        <SwiperSlide>
          <SlideImage
            src={agenda}
            onClick={() => window.open("https://www.instagram.com/nutriraquelalves/")}
            alt="nutricionista"
            style={{cursor: 'pointer'}}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={nath}
            alt="nathalia"
            style={{cursor: 'pointer'}}
            onClick={() => window.open("https://www.instagram.com/nathaliagalldino/")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={croissant}
            alt="croissant"
            style={{cursor: 'pointer'}}
            onClick={() => window.open("https://www.instagram.com/nathaliagalldino/")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={titulo}
            alt="croissant"
            style={{cursor: 'pointer'}}
            onClick={() => window.open("https://www.instagram.com/nathaliagalldino/")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={catia}
            alt="catia"
            style={{cursor: 'pointer'}}
            onClick={() => window.open("https://www.instagram.com/nathaliagalldino/")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={limpeza}
            alt="limpeza de pele"
            style={{cursor: 'pointer'}}
            onClick={() => window.open("https://www.instagram.com/nathaliagalldino/")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={nutri}
            alt="nutri"
            style={{cursor: 'pointer'}}
            onClick={() => window.open("https://www.instagram.com/nutriraquelalves/")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={nutriRaquel}
            alt="nutri"
            style={{cursor: 'pointer'}}
            onClick={() => window.open("https://www.instagram.com/nutriraquelalves/")}
          />
        </SwiperSlide> 
        <SwiperSlide>
          <SlideImage
            src={vale}
            alt="vale presente"
            style={{cursor: 'pointer'}}
            onClick={() => window.open("https://www.instagram.com/nathaliagalldino/")}
          />
        </SwiperSlide>                                        
      </Swiper>
    </CarouselWrapper>
  );
}

export default BannerCaroussel;
