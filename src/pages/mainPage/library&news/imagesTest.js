import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";

export const imgs = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjSj6nDtKzToGCunJhHRLo2dkqhQAbgorVUg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnCS_vkhEfyECFH0FCDJTjJEzthHgD2pLeA&s",
];
export const loopImgs = imgs.map((ele) => (
  <SwiperSlide>
    <img
      src={ele}
      width="100%"
      height="100%"
      className="object-fit-cover object-fit-md-fill"
    />
  </SwiperSlide>
));

export const videos = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjSj6nDtKzToGCunJhHRLo2dkqhQAbgorVUg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnCS_vkhEfyECFH0FCDJTjJEzthHgD2pLeA&s",
];
export const loopVideos = videos.map((ele) => (
  <SwiperSlide>
    <div className="video_container w-100 h-100">
      <img
        src={ele}
        width="100%"
        height="100%"
        className="object-fit-cover object-fit-md-fill "
      />
      <div className="effect">
        <FontAwesomeIcon icon={faCirclePlay} className="video_icon" />
      </div>
    </div>
  </SwiperSlide>
));

const news = [
  {
    title: "عنوان الخبر",
    description: " هنا شرح الفيديو باختصار",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnCS_vkhEfyECFH0FCDJTjJEzthHgD2pLeA&s",
  },
  {
    title: "عنوان الخبر",
    description: "  جداهنا شرح الفيديو باختصار",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjSj6nDtKzToGCunJhHRLo2dkqhQAbgorVUg&s",
  },
];
export const loopNews = news.map((ele) => (
  <SwiperSlide>
    <div className="news_container w-100 h-100 position-relative">
      <img
        src={ele.img}
        width="100%"
        height="100%"
        className="object-fit-cover object-fit-md-fill "
      />
      <div className="news_container_text">
        <div>
          <h1>{ele.title}</h1>
          <p>{ele.description}</p>
          <Button variant="primary">معرفه المزيد ..</Button>
        </div>
      </div>
    </div>
  </SwiperSlide>
));
