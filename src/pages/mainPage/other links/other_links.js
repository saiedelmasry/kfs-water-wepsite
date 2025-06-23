import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../../media/other links/mhuc-200x200.png";
import img2 from "../../../media/other links/ewra-200x200-1.png";
import img3 from "../../../media/other links/hcww-200x200-1__1.png";
import img4 from "../../../media/other links/nopwasd-200x200-1 (1).png";
import img5 from "../../../media/other links/capw-200x200-1.png";
import SecTitle from "../../../componants/secTitle/sectitle";
import "./other_links.css";
const OtherLinks = () => {
  return (
    <>
      <SecTitle
        title="قطاع مياه الشرب والصرف الحصي"
        subtitle="الجهات المسئوله عن القطاع"
      />
      <div className="other_links" data-aos="fade-up" data-aos-once="true">
        <Container fluid="lg">
          <Row className="gy-3 ">
            <Col>
              <div className="other_links_col shadow-sm">
                <img src={img1} className="other_links_img" />
                <h1 className="other_links_text">
                  وزارة الاسكان و المجتمعات العمرانيه
                </h1>
              </div>
            </Col>
            <Col>
              <div className="other_links_col shadow-sm">
                <img src={img2} className="other_links_img" />
                <h1 className="other_links_text">
                  جهاز تنظيم المياه وحمايه المستهلك
                </h1>
              </div>
            </Col>
            <Col>
              <div className="other_links_col shadow-sm">
                <img src={img3} className="other_links_img" />
                <h1 className="other_links_text">
                  الشركه القابضه لمياه الشرب والصرف الصحي
                </h1>
              </div>
            </Col>
            <Col>
              <div className="other_links_col shadow-sm">
                <img src={img4} className="other_links_img" />
                <h1 className="other_links_text">
                  الهيئه القوميه لمياه الشرب والصرف الصحي
                </h1>
              </div>
            </Col>
            <Col>
              <div className="other_links_col shadow-sm">
                <img src={img5} className="other_links_img" />
                <h1 className="other_links_text">
                  الجهاز التنفيذي لمياه الشرب والصرف الصحي
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OtherLinks;
