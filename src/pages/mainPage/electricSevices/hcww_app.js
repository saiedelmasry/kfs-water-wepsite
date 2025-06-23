import { Button, Col } from "react-bootstrap";
import keraate from "../../../media/keraaty.png";
import googleStore from "../../../media/icons/playStore.png";
import appStore from "../../../media/icons/appStore.png";
function Hcww_app() {
  return (
    <>
      <Col>
        <div
          className="app_text text-center"
          
        >
          <h1 className="fs-1 fw-bold   mb-3"> تطبيق HCWW 125</h1>
          <p>
            يعد تطبيق الهاتف المحمول ١٢٥ أحد الخطوات الجدية التى تتخذها الشركة
            نحو التحول الرقمى، والحاصل على المركز الأول فى جائزة مصر للتميز
            الحكومى فى الابتكار والإبداع، حيث أطلقت الشركة تطبيق الهاتف المحمول
            (HCWW 125)، لتطوير وميكنة خدمات مياه الشرب والصرف الصحى المقدمة
            للمواطنين.
          </p>
          <div className="w-100 mx-auto text-nowrap">
            <img src={googleStore} alt="" width="160" height="70" />
            <img src={appStore} alt="" width="150" height="50" />
          </div>
          <Button variant="primary" className="mt-2">
            معرفه المزيد ..
          </Button>
        </div>
      </Col>
      <Col>
        <div className="app_img" >
          <img
            src={keraate}
            className="app_img_moukup"
            width="400"
            alt="keraate app"
          />
          <svg
            id="10015.io"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="72.32 41 363.13 412.62"
            height="90%"
            width="90%"
          >
            <path
              fill="var(--color700)"
              d="M423,292Q456,344,401.5,359.5Q347,375,315,401.5Q283,428,236,446Q189,464,145,439.5Q101,415,103.5,359.5Q106,304,92,272Q78,240,73,198.5Q68,157,99.5,130Q131,103,163,72Q195,41,240,41Q285,41,329,57Q373,73,396,113.5Q419,154,404.5,197Q390,240,423,292Z"
            ></path>{" "}
          </svg>
        </div>
      </Col>
    </>
  );
}
export default Hcww_app;
