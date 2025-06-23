import "./secTitle.css";
import "aos/dist/aos.css";
function SecTitle({ title, subtitle }) {

  return (
    <div className="sectitle " data-aos="fade-up" data-aos-once="true">
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
    </div>
  );
}
export default SecTitle;
