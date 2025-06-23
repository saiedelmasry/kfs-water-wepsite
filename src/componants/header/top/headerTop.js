import {
  faFacebookF,
  faFacebookMessenger,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMobileScreenButton,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";

const HeaderTop = () => {
  const IconStyle = {
    color: "var(--color700)",
    fontSize: "15px",
  };
  const textStyle = {
    fontSize: "12px",
  };
  return (
    <div
      className="w-100  py-2 d-none d-md-block bg-light"
      
    >
      <Container fluid="lg">
        <div className=" w-100 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <h1 className=" d-flex align-items-center gap-2">
              <FontAwesomeIcon icon={faMobileScreenButton} style={IconStyle} />
              <span style={textStyle}>: 01221041455</span>
            </h1>
            <h1 className=" d-flex align-items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} style={IconStyle} />
              <span style={textStyle}>: ask@kfscww.com</span>
            </h1>
            <h1 className=" d-flex align-items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} style={IconStyle} />
              <span style={textStyle}>
                : مدينة كفرالشيخ - ش الاستاد الرياضى - أمام مستشفى الحميات
              </span>
            </h1>
          </div>
          <div className="d-none d-md-flex align-items-center gap-3 ">
            <a href="/#">
              <FontAwesomeIcon icon={faXTwitter} style={IconStyle} />
            </a>
            <a href="/#">
              <FontAwesomeIcon icon={faYoutube} style={IconStyle} />
            </a>
            <a href="/#">
              <FontAwesomeIcon icon={faFacebookMessenger} style={IconStyle} />
            </a>
            <a href="/#">
              <FontAwesomeIcon icon={faFacebookF} style={IconStyle} />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderTop;
