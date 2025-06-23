import "./slider.css";
import { Col, Row } from "react-bootstrap";
import calc from "../../../media/icons/calculator.png";
import keraaty from "../../../media/icons/keraaty.png";
import app from "../../../media/icons/125.png";
import adad from "../../../media/icons/adaa.png";

function ShortLinks() {
  return (
    <>
      <Row
        className="gy-3 mb-5   "
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="550"
      >
        <Col xs={6} md={3}>
          <div className="link d-flex flex-column align-items-center gap-3">
            <img src={calc} alt="" />
            <h1>احسب فاتورتك</h1>
          </div>
        </Col>

        <Col xs={6} md={3}>
          <div className=" link d-flex flex-column align-items-center gap-3">
            <img src={keraaty} alt="" />
            <h1> تطبيق قرائتي</h1>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className=" link d-flex flex-column align-items-center gap-3">
            <img src={app} alt="" />
            <h1> تطبيق 125</h1>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className=" link d-flex flex-column align-items-center gap-3">
            <img src={adad} alt="" />
            <h1>قراءه العداد</h1>
          </div>
        </Col>
      </Row>
    </>
  );
}
export default ShortLinks;
