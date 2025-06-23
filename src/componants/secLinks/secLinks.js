import { Col, Container, Row } from "react-bootstrap";
import "./secLinks.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function SecLinks(props) {
  let { secLinks } = props;
  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  }, []);
  return (
    <div
      className="secLinks w-100 "
      data-aos="fade-up"
      data-aos-once="true"
    >
      <Container fluid="lg" className="px-4">
        <Row className="gy-3 mb-5 justify-content-around ">
          <Col xs={6} lg={3}>
            <div className="links d-flex flex-column align-items-center gap-3">
              <img src={secLinks.img1} alt="" />
              <h1>{secLinks.title1}</h1>
            </div>
          </Col>

          <Col xs={6} lg={3}>
            <div className=" links d-flex flex-column align-items-center gap-3">
              <img src={secLinks.img2} alt="" />
              <h1> {secLinks.title2}</h1>
            </div>
          </Col>
          <Col xs={6} lg={3}>
            <div className=" links d-flex flex-column align-items-center gap-3">
              <img src={secLinks.img3} alt="" />
              <h1>{secLinks.title3}</h1>
            </div>
          </Col>
          <Col xs={6} lg={3}>
            <div className=" links d-flex flex-column align-items-center gap-3">
              <img src={secLinks.img4} alt="" />
              <h1>{secLinks.title4}</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default SecLinks;
