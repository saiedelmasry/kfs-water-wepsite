import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import "./aboutSec.css";
import company from "../../../media/company.png";
import SecLinks from "../../../componants/secLinks/secLinks";
import img1 from "../../../media/icons/about us.png";
import img2 from "../../../media/icons/maglesEdara.png";
import img3 from "../../../media/icons/gameyaAmma.png";
import img4 from "../../../media/icons/engazat.png";
import SecTitle from "../../../componants/secTitle/sectitle";
function AboutSec() {
  return (
    <>
      <SecTitle title="من نحن" subtitle="نبذه عن الشركه" />
      <div className="aboutSec sec">
        <Row className="gx-3 gy-4  align-items-center w-100 m-0">
          <Col lg={12} xl={6} data-aos="fade-left" data-aos-once="true">
            <div className="aboutSec__text rounded-4 shadow-sm">
              <h1 className="fs-4 mb-1">نبذه عن الشركه</h1>
              <p>
                تأسست شركة مياه الشرب بمحافظة كفر الشيخ سنة 1983، وباشرت نشاطها
                عام 1985وأضيف لها نشـــاط الصرف الصحي سنة 1990 لتكون الشركة
                الوحيدة على مستوى الجمهورية التى شمل نشاطها مياه الشرب والصرف
                الصحى فى هذا التاريخ، .
              </p>
              <h1 className="fs-4 ">اهداف الشركه الاستراتيجيه</h1>
              <ListGroup className="w-100 flex-row align-items-center flex-wrap column-gap-3   ">
                <ListGroup.Item className="border-0   ">
                  تقديم خدمة متميزة للعملاء.
                </ListGroup.Item>
                <ListGroup.Item className="border-0 ">
                  تنمية وعي المواطن بقضايا المياه.
                </ListGroup.Item>
                <ListGroup.Item className="border-0">
                  الشراكة الفاعلة مع المجتمع المدنى.
                </ListGroup.Item>
                <ListGroup.Item className="border-0">
                  حماية وتنمية الاستثمارات.
                </ListGroup.Item>
                <ListGroup.Item className="border-0">
                  الوصول الى الاستقلالية المالية.
                </ListGroup.Item>
              </ListGroup>
              <Button variant="primary" className="btn btn-sm mt-2">
                المزيد ..
              </Button>
            </div>
          </Col>
          <Col lg={12} xl={6} data-aos="fade-right" data-aos-once="true">
            <div className="text-center">
              <img
                src={company}
                alt="company"
                width="100%"
                className="aboutSec__img rounded-4 shadow-sm "
              />
            </div>
          </Col>
        </Row>
        <SecLinks
          secLinks={{
            title1: " الشفافيه والنزاهه ",
            img1: img1,
            title2: "مجلس الاداره",
            img2: img2,
            title3: "الجمعيه العامه",
            img3: img3,
            title4: "انجازات الشركه",
            img4: img4,
          }}
        />
      </div>
    </>
  );
}
export default AboutSec;
