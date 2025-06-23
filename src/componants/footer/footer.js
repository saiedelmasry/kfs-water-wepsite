import {
  faEnvelope,
  faLocationDot,
  faMobileScreenButton,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, FormControl, Row } from "react-bootstrap";
import "./footer.css";
import {
  faFacebookF,
  faFacebookMessenger,
  faWhatsapp,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid="lg">
        <Row className=" gy-3">
          <Col lg={4}>
            <div className="contact">
              <h1 className="contact_title">تواصل معنا </h1>
              <h3 className=" d-flex align-items-center gap-2">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="contact_icon"
                />
                <span className="contact_text">
                  : مدينة كفرالشيخ - ش الاستاد الرياضى - أمام مستشفى الحميات
                </span>
              </h3>
              <h3 className=" d-flex align-items-start align-items-md-center flex-md-row flex-column gap-3 gap-md-5">
                <div className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon
                    icon={faPhoneFlip}
                    className="contact_icon"
                  />{" "}
                  <span className="contact_text">
                    : (047) 3234824 - 3221683
                  </span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon
                    icon={faMobileScreenButton}
                    className="contact_icon"
                  />
                  <span className="contact_text">: 01221041455</span>
                </div>
              </h3>
              <h3 className=" d-flex align-items-center gap-2">
                <FontAwesomeIcon icon={faWhatsapp} className="contact_icon" />
                <span className="contact_text">: 01018500570</span>
              </h3>
              <h3 className=" d-flex align-items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="contact_icon" />
                <span className="contact_text">: ask@kfscww.com</span>
              </h3>
            </div>
          </Col>
          <Col lg={4}>
            <div className="follow_us ">
              <h1 className="contact_title mx-auto">تابعونا علي</h1>
              <div className=" w-100 d-flex align-items-center justify-content-center gap-3 mt-3 ">
                <a href="/#">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="follow_us_icon"
                  />
                </a>
                <a href="/#">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="follow_us_icon"
                  />
                </a>
                <a href="/#">
                  <FontAwesomeIcon
                    icon={faFacebookMessenger}
                    className="follow_us_icon"
                  />
                </a>
                <a href="/#">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="follow_us_icon"
                  />
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="send_massage text-center">
              <h1 className="contact_title">راسلنا</h1>
              <FormControl
                type="emaiL"
                className="mt-3"
                placeholder="البريد الالكتروني"
                required
              />
              <FormControl
                as="textarea"
                className="my-3 send_massage_text"
                placeholder="اكتب رسالتك"
                rows="3"
                required
              />
              <Button
                variant="primary"
              >
                ارسال
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
