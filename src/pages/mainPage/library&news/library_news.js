// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./library_news.css";
// import required modules
import { Grid, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Container, Button } from "react-bootstrap";
import "./library_news.css";
import { loopImgs, loopVideos, loopNews } from "./imagesTest";
import { useState } from "react";
import SecTitle from "../../../componants/secTitle/sectitle";
function LibraryNews() {
  const [btnActive, setBtnActive] = useState("news");

  return (
    <>
      <SecTitle title="اخر الاخبار" subtitle="الصور والفيديوهات" />
      <div className="btn-container " data-aos="fade-up" data-aos-once="true">
        <Button
          onClick={() => setBtnActive("news")}
          className={
            btnActive === "news" ? "speacial_btn_active" : "speacial_btn"
          }
        >
          احدث الاخبار
        </Button>
        <Button
          onClick={() => setBtnActive("videos")}
          className={
            btnActive === "videos" ? "speacial_btn_active" : "speacial_btn"
          }
        >
          الفيديوهات
        </Button>
        <Button
          onClick={() => setBtnActive("images")}
          className={
            btnActive === "images" ? "speacial_btn_active" : "speacial_btn"
          }
        >
          الصور
        </Button>
      </div>
      <div className="library-news" data-aos="fade-up" data-aos-once="true">
        <Container fluid="lg" className="h-100 ">
          <Swiper
            slidesPerView={1}
            grid={{
              rows: 1,
            }}
            spaceBetween={30}
            effect={"fade"}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Grid, Pagination, Navigation, EffectFade]}
            className="mySwiper"
          >
            {btnActive === "images"
              ? loopImgs
              : btnActive === "videos"
              ? loopVideos
              : btnActive === "news"
              ? loopNews
              : null}
          </Swiper>
        </Container>
      </div>
    </>
  );
}
export default LibraryNews;
