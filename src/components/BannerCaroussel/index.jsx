import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { CarouselWrapper, SlideImage } from "./styles";
import nath from "../../assets/banners/postNath.svg"
import titulo from "../../assets/banners/titulo.svg"
import movie from "../../assets/banners/bannerMovie.jpeg"
import dorama from "../../assets/banners/bannerDynamiteKiss.jpeg"
import mardegan from "../../assets/banners/studioMardegan.jpeg"
import nutri from "../../assets/banners/bannerRaquel.jpeg"
import nutriRaquel from "../../assets/banners/bannerRaquel2.jpeg"
import catia1 from "../../assets/banners/bannerCatiarosa.jpeg"
import catia2 from "../../assets/banners/bannerCatiarosa2.jpeg"
import catia3 from "../../assets/banners/bannerCatiarosa3.jpeg"






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
            src={nath}
            alt="nathalia"
            style={{cursor: 'pointer'}}
            onClick={() => window.open("https://www.instagram.com/nathaliagalldino/")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={titulo}
            alt="titulo"
            style={{cursor: 'pointer'}}
            onClick={() => window.open("https://www.instagram.com/ngbmarketing/")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={movie}
            alt="movie"
            style={{cursor: 'pointer'}}
            onClick={() => window.open("https://www.instagram.com/ngbmarketing/")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={dorama}
            alt="dynamite kiss"
            style={{cursor: 'pointer'}}
            onClick={() => window.open("https://www.instagram.com/ngbmarketing/")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={mardegan}
            alt="studio-mardegan"
            style={{cursor: 'pointer'}}
            onClick={() => window.open("https://www.instagram.com/ngbmarketing/")}
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
            src={catia1}
            alt="catia rosa"
            style={{cursor: 'pointer'}}
            onClick={() => window.open("https://www.instagram.com/esteticacatiarosa/")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={catia2}
            alt="catia rosa"
            style={{cursor: 'pointer'}}
            onClick={() => window.open("https://www.instagram.com/esteticacatiarosa/")}
          />
        </SwiperSlide> 
        <SwiperSlide>
          <SlideImage
            src={catia3}
            alt="catia rosa"
            style={{cursor: 'pointer'}}
            onClick={() => window.open("https://www.instagram.com/esteticacatiarosa/")}
          />
        </SwiperSlide>                                         
      </Swiper>
    </CarouselWrapper>
  );
}

export default BannerCaroussel;
