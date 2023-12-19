import { Swiper as SwiperJS, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/hash-navigation";
import "./styles.css";
import { Pagination, Mousewheel, HashNavigation } from "swiper/modules";

export default function Swiper(props: any) {
  return (
    <SwiperJS
      className="mySwiper"
      modules={[Pagination, Mousewheel, HashNavigation]}
      direction="vertical"
      pagination={{
        clickable: true,
      }}
      mousewheel={true}
      hashNavigation={{
        watchState: true,
      }}
    >
      <SwiperSlide data-hash="home">{props.first}</SwiperSlide>
      <SwiperSlide data-hash="projects">{props.second}</SwiperSlide>
    </SwiperJS>
  );
}
