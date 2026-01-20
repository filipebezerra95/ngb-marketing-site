import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { CarouselWrapper, SlideImage } from "./styles";
import cokie from "../../assets/arquivosPortifolio/cokie.jpeg"
import happyCup from "../../assets/arquivosPortifolio/copo-felicidade.jpeg"
import brownie from "../../assets/arquivosPortifolio/santo-brownie.jpeg"
import brownie2 from "../../assets/arquivosPortifolio/santo-brownie2.jpeg"
import brownie3 from "../../assets/arquivosPortifolio/santo-brownie3.jpeg"
import brownie4 from "../../assets/arquivosPortifolio/santo-brownie4.jpeg"
import brownie5 from "../../assets/arquivosPortifolio/santo-brownie5.jpeg"
import brownie6 from "../../assets/arquivosPortifolio/santo-brownie6.jpeg"
import brownie7 from "../../assets/arquivosPortifolio/santo-brownie7.jpeg"
import brownie8 from "../../assets/arquivosPortifolio/santo-brownie8.jpeg"

function Carousel() {
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
            src={cokie}
            alt="biscoito"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={happyCup}
            alt="biscoito"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={brownie}
            alt="biscoito"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={brownie2}
            alt="biscoito"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={brownie3}
            alt="biscoito"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={brownie4}
            alt="biscoito"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={brownie5}
            alt="biscoito"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={brownie6}
            alt="biscoito"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={brownie7}
            alt="biscoito"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideImage
            src={brownie8}
            alt="biscoito"
          />
        </SwiperSlide>

        
      </Swiper>
    </CarouselWrapper>
  );
}

export default Carousel;
