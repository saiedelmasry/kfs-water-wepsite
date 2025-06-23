// inports -----------------------------------------------------
import { Button, Container, Row } from "react-bootstrap";
import fatora from "../../../media/icons/calculator.png";
import adad from "../../../media/icons/adaa.png";
import customer from "../../../media/icons/customar ser.png";
import shakwa from "../../../media/icons/shakwa.png";
import "./electricSevices.css";
import SecTitle from "../../../componants/secTitle/sectitle";
import SecLinks from "../../../componants/secLinks/secLinks";
import Keraate_app from "./keraaty_app";
import { useState } from "react";
import Hcww_app from "./hcww_app";
// function ----------------------------------------------------
function ElectricSevices() {
  // useState() -------------------------------------------------
  const [btnActive, setBtnActive] = useState("keraaty");
  // return (jsx) -----------------------------------------------
  return (
    <>
      <SecTitle title="الخدمات الالكترونيه" subtitle="احدث التطبيقات" />
      <div className="app_buttons" data-aos="fade-up" data-aos-once="true">
        <Button
          onClick={() => setBtnActive("keraaty")}
          className={
            btnActive === "keraaty" ? "speacial_btn_active" : "speacial_btn"
          }
        >
          تطبيق قراءتي
        </Button>
        <Button
          onClick={() => setBtnActive("hcww")}
          className={
            btnActive === "hcww" ? "speacial_btn_active" : "speacial_btn"
          }
        >
          تطبيق HCWW 125{" "}
        </Button>
      </div>
      <div
        className="electric_services "
        data-aos="fade-up"
        data-aos-once="true"
      >
        <Container fluid="lg">
          <Row className="align-items-center m-0 gy-3">
            {btnActive === "keraaty" ? <Keraate_app /> : <Hcww_app />}
          </Row>
        </Container>
      </div>
      <SecLinks
        secLinks={{
          img1: fatora,
          title1: "احسب فاتورتك",
          title2: "قراءه العداد",
          img2: adad,
          title3: "خدمه العملاء",
          img3: customer,
          title4: "للشكاوي والمقترحات",
          img4: shakwa,
        }}
      />
    </>
  );
}
export default ElectricSevices;
