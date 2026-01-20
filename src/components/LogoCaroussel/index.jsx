import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { CarouselWrapper, SlideImage } from "./styles";
import catiaRosa from "../../assets/logos/catiaRosaLogo.jpeg"
import crPrime from "../../assets/logos/crPrimeLogo.jpeg"
import chiquetosa from "../../assets/logos/chiquetosaLogo.png"
import panoChique from "../../assets/logos/panoChiqueLogo.jpeg"

function LogoCaroussel() {
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
            src={catiaRosa}
            onClick={() => window.open("https://www.instagram.com/esteticacatiarosa/")}
            alt="esteticista"
            style={{cursor: 'pointer'}}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={crPrime}
            alt="loja-de-carros"
            style={{cursor: 'pointer'}}
            onClick={() => window.open("https://www.instagram.com/crprime.oficial/")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={panoChique}
            alt="bonecos-de-pano"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={chiquetosa}
            alt="clube"
            style={{cursor: 'pointer'}}
            onClick={() => window.open("https://www.instagram.com/clubedachiquetosa/")}
          />
        </SwiperSlide>       
      </Swiper>
    </CarouselWrapper>
  );
}

export default LogoCaroussel;
