import { Container } from "react-bootstrap";
import AboutSec from "./aboutUS/aboutSec";
import Counter from "./counter/counter";
import Manager from "./manager word/manager";
import Slider from "./welcomeSec/Slider";
import ElectricSevices from "./electricSevices/ElectricSevices";
import Quality from "./lap/Quality";
import LibraryNews from "./library&news/library_news";
import OtherLinks from "./other links/other_links";

function MainPage() {
  return (
    <>
      <Slider />
      <Counter />
      <Container fluid="lg">
        <Manager />
        <AboutSec />
      </Container>
      <ElectricSevices />
      <Container fluid="lg">
        <Quality />
      </Container>
      <LibraryNews />
      <OtherLinks />
    </>
  );
}
export default MainPage;
