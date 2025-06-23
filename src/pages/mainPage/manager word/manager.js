import { Button, Col, Container, Row } from "react-bootstrap";
import "./manager.css";
import manager from "../../../media/Chairmn_Hassan.jpeg";
import SecTitle from "../../../componants/secTitle/sectitle";

function Manager() {
  return (
    <>
      <SecTitle
        title="كلمه السيد رئيس مجلس الاداره"
        subtitle="لواء مهندس / حسن عبد الغني"
      />
      <div
        className="manager_word shadow-sm rounded-4"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="w-100 text-center text-nowrap " data-aos="fade-up"
          data-aos-once="true" >
          <h3 className=" fs-6">بسم الله الرحمن الرحيم</h3>
          <h1 className="fs-5  my-2" style={{ color: "var(--color700)" }}>
            "وجعلنا من الماء كل شيء حي"
          </h1>
          <h3 className="fs-6"> صدق الله العظيم</h3>
        </div>
        <p
          className="text-center text-md-end"
          data-aos="fade"
          data-aos-once="true"
        >
          لقد جعل الله لنا الماء مصدر الحياة ، ووهب مصرنا العظيمة نهر النيل
          ليكون شريان الحياة لها ومصدرها الأساسى للمياه، ومن هنا تبرز قيمة قطرة
          المياه وقيمة الحفاظ عليها من التلوث ومراعاة ترشيد الاستهلاك ، وقد قامت
          شركة مياه الشرب والصرف الصحي بكفرالشيخ كإحدى الشركات التابعة للشركة
          القابضة لمياه الشرب والصرف الصحى وفى إطار سياسة الدولة بتحمل مسئوليتها
          لتحقيق خدمة متميزة وجودة عالية في مجال إنتاج مياه شرب نقية ذات جودة
          عالية ومواصفات ومعايير دولية قياسية . وكذا التخلص من مياه الصرف الصحي
          بطريقة آمنة لا تسبب انتشاراً للأمراض والأوبئة عن طريق معالجتها بواسطة
          محطات معالجة خاصة أنشئت حديثا ومنتشرة بالمدن والقرى وفى إطار خطة عامة
          طموحة للدولة مع وضع سياسة سعرية للخدمة المٌقدمة من الشركة للمواطنين
          تُراعى الجانب الإجتماعى .{" "}
          <span className="d-none d-md-inline">
            والشركة تؤكد على التزاماتها تجاه المجتمع والسعى للإرتقاء بمستوى
            الخدمة للإرتفاع بدرجة رضاء العملاء من خلال العمل على كافة محاور
            العملية التشغيلية إما برفع نسبة التغطية للمناطق الجديدة والمحرومة أو
            السعى الى العدالة فى التوزيع والتعامل وتفعيل نظم المراقبة المختلفة
            بالاضافة الى التطوير الشامل لمراكز خدمة العملاء وخاصة خدمة الخط
            الساخن (125).
          </span>
        </p>

        <div
          className="manager_info d-flex flex-column flex-md-row align-items-center justify-content-between"
          data-aos="fade"
          data-aos-once="true"
        >
          <div className="manager_img_title d-flex flex-column flex-md-row align-items-center">
            <img src={manager} alt="" />
            <div>
              <h1>رئيس مجلس الاداره</h1>
              <h3>لواء مهندس / حسن عبد الغني</h3>
            </div>
          </div>
          <Button variant="primary mt-3 mt-md-0"> المزيد ..</Button>
        </div>
      </div>
    </>
  );
}
export default Manager;

{
  /* <div className="  w-100 mt-5">
          <Row className="gx-3 gy-4 align-items-center w-100 h-100 m-0  ">
            <Col md={12} xl={5} className="mx-auto ">
              <div
                className="manager-image-container"
                data-aos="fade-left"
                data-aos-once="true"
              >
                <img
                  src={manager}
                  className="manager-img w-100"
                  alt="manager"
                />
              </div>
            </Col>
            <Col md={12} xl={7}>
              <div
                className="word shadow-sm"
                data-aos="fade-right"
                data-aos-once="true"
              >
                <p className="text-center text-xl-end">
                  لقد جعل الله لنا الماء مصدر الحياة ، ووهب مصرنا العظيمة نهر
                  النيل ليكون شريان الحياة لها ومصدرها الأساسى للمياه، ومن هنا
                  تبرز قيمة قطرة المياه وقيمة الحفاظ عليها من التلوث ومراعاة
                  ترشيد الاستهلاك ، وقد قامت شركة مياه الشرب والصرف الصحي
                  بكفرالشيخ كإحدى الشركات التابعة للشركة القابضة لمياه الشرب
                  والصرف الصحى وفى إطار سياسة الدولة بتحمل مسئوليتها لتحقيق خدمة
                  متميزة وجودة عالية في مجال إنتاج مياه شرب نقية ذات جودة عالية
                  ومواصفات ومعايير دولية قياسية . وكذا التخلص من مياه الصرف
                  الصحي بطريقة آمنة لا تسبب انتشاراً للأمراض والأوبئة عن طريق
                  معالجتها بواسطة محطات معالجة خاصة أنشئت حديثا ومنتشرة بالمدن
                  والقرى وفى إطار خطة عامة طموحة للدولة مع وضع سياسة سعرية
                  للخدمة المٌقدمة من الشركة للمواطنين تُراعى الجانب الإجتماعى .
                  <Button
                    variant="primary"
                    className="d-block mt-3 mx-auto mx-xl-0  "
                  >
                    المزيد ..
                  </Button>
                </p>
              </div>
            </Col>
          </Row>
        </div> */
}
