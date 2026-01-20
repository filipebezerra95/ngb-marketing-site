import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { useRef, useState } from "react";
import {
  VideoWrapper,
  VideoContainer,
  Video,
  Overlay,
  Info,
  Title,
  PlayButton,
} from "./styles";

import video1 from "../../assets/arquivosPortifolio/cafe-oblivio.MP4";
import video2 from "../../assets/arquivosPortifolio/taty-marinho.mp4";
import video3 from "../../assets/arquivosPortifolio/thays.mp4"

const videos = [
  { src: video1, title: "Café Oblivio" },
  { src: video2, title: "Taty Marinho" },
  { src: video3, title: "Thays" },
];

function VideoCarousel() {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const swiperRef = useRef(null);
  const resumeTimeout = useRef(null);

  const handlePlay = (index) => {
    pauseAllVideos();

    const video = videoRefs.current[index];
    if (!video) return;

   video.muted = false;
   video.controls = true;
   video.currentTime = 0;
   video.play();

   swiperRef.current?.autoplay.stop();
   setPlayingIndex(index);

   clearTimeout(resumeTimeout.current);
  };

  const pauseAllVideos = () => {
  videoRefs.current.forEach((video) => {
    if (video) {
      
      video.muted = true;
      video.controls = false;

      if (video.paused) {
        video.play().catch(() => {});
      }
    }
  });

  setPlayingIndex(null);
};

const handleVideoEnd = () => {
  pauseAllVideos();

  setTimeout(() => {
    swiperRef.current?.slideNext();
    swiperRef.current?.autoplay.start();
  }, 800);
};



  return (
    <VideoWrapper>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={() => {
          pauseAllVideos();
          swiperRef.current?.autoplay.start();
        }}
      >
        {videos.map((item, index) => (
          <SwiperSlide key={index}>
            <VideoContainer>
              <Video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.src}
                autoPlay
                muted
                loop={false}
                playsInline
                onEnded={() => handleVideoEnd()}
                onPause={() => {
                  resumeTimeout.current = setTimeout(() => {
                    swiperRef.current?.autoplay.start();
                  }, 2000);
                }}
              />

              {playingIndex !== index && (
                <>
                  <Overlay />
                  <Info>
                    <Title>{item.title}</Title>
                    <PlayButton onClick={() => handlePlay(index)}>
                      ▶ Assistir
                    </PlayButton>
                  </Info>
                </>
              )}
            </VideoContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </VideoWrapper>
  );
}

export default VideoCarousel;
