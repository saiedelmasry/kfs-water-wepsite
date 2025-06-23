import { Button, Col, ListGroup, Row } from "react-bootstrap";
import SecTitle from "../../../componants/secTitle/sectitle";
import lapImg from "../../../media/lapImg.jpg";
import SecLinks from "../../../componants/secLinks/secLinks";
import "./quality.css";
import img1 from "../../../media/icons/testing.png";
import img2 from "../../../media/icons/pure-water.png";
import img3 from "../../../media/icons/sustainable.png";
import img4 from "../../../media/icons/shield.png";

function Quality() {
  return (
    <>
      <SecTitle title="المعامل والجوده" subtitle="تنقيه مياه الشرب" />
      <div className="sec quality">
        <Row className="gx-3 gy-4  align-items-center w-100 m-0">
          <Col lg={12} xl={6} data-aos="fade-left" data-aos-once="true">
            <div className="text-center">
              <img
                src={lapImg}
                alt="company"
                width="100%"
                className="quality_img rounded-4 shadow-sm "
              />
            </div>
          </Col>
          <Col lg={12} xl={6} data-aos="fade-right" data-aos-once="true">
            <div className="quality_text rounded-4 shadow-sm">
              <h1 className="fs-4 mb-1"> تنقية مياه الشرب</h1>
              <p>
                موارد المياه في الكرة الأرضية محدودة إلى درجة لا يمكن تصديقها
                فمعظم المياه الموجودة على سطح الأرض مياه مالحة وليست عذبه ونسبة
                المياه المالحة تصل إلى 97.5 % من اجمالى مياه الكوكب وهى مياه
                البحار والمحيطات والبحيرات ، في حين ان نسبة المياه العذبة لا
                تتعدى 2.5% وحتى هذه النسبة الضئيلة للغاية لا تستخدم كلها بطبيعة
                الحال
              </p>
              <h1 className="fs-4 ">مراحل تنقية المياه لتكون صالحه للشرب</h1>
              <ListGroup className="w-100 flex-row align-items-center flex-wrap column-gap-3   ">
                <ListGroup.Item className="border-0   ">
                  السحب من المجرى المائى سواء نهر النيل أو الترع
                </ListGroup.Item>
                <ListGroup.Item className="border-0 ">
                  مرحلة الترويب والترويق.
                </ListGroup.Item>
                <ListGroup.Item className="border-0">
                  مرحلة الترشيح.
                </ListGroup.Item>
                <ListGroup.Item className="border-0">
                  {" "}
                  تنزل المياه من المرشحات إلى الخزان الأرضى{" "}
                </ListGroup.Item>
                <ListGroup.Item className="border-0">
                  مرحلة الضخ للمستهلكين سواء في المدينة أو القرية{" "}
                </ListGroup.Item>
              </ListGroup>
              <Button variant="primary" className="btn btn-sm mt-2">
                المزيد ..
              </Button>
            </div>
          </Col>
        </Row>
        <SecLinks
          secLinks={{
            title1: " المعامل والجوده ",
            img1: img1,
            title2: "تنقيه مياه الشرب",
            img2: img2,
            title3: "معالجه مياه الصرف",
            img3: img3,
            title4: "السلامه والصحه المهنيه",
            img4: img4,
          }}
        />
      </div>
    </>
  );
}
export default Quality;
