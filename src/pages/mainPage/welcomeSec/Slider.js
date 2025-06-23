import "./slider.css";
import img1 from "../../../media/natural-spring-water.jpg";
import img2 from "../../../media/pexels-pixabay-144238.jpg";
import { Carousel, Container } from "react-bootstrap";
import ShortLinks from "./shortLinks";
function Slider() {
  return (
    <>
      <div className="slider position-relative w-100 overflow-hidden ">
        <Carousel
          fade
          touch="true"
          pause="false"
          interval="4000"
          className="w-100 vh-100"
        >
          <Carousel.Item>
            <img
              src={img1}
              alt=""
              className="w-100 h-100 object-fit-cover object-fit-lg-fill"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={img2}
              alt=""
              className="w-100 h-100 object-fit-cover object-fit-lg-fill"
            />
          </Carousel.Item>
        </Carousel>
        <div className="effect">
          <Container fluid="lg" className="h-100 ">
            <div className=" links-container w-100 h-100  d-flex flex-column align-items-center justify-content-end gap-5 ">
              <div
                className=" d-flex flex-column align-items-center gap-2 border-bottom border-3 border-primary pb-3  "
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay="550"
              >
                <h1
                  className="welcome-title fw-bold  text-center mb-1  "
                  style={{ color: "var(--color100)" }}
                >
                  شركه مياه الشرب والصرف الصحي بكفر الشيخ
                </h1>
                <h1
                  dir="ltr"
                  className="welcome-title fw-bold  text-center  "
                  style={{ color: "var(--color100)" }}
                >
                  Kafr El Sheikh Drinking Water and Wastewater Company
                </h1>
              </div>
              <ShortLinks />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Slider;
