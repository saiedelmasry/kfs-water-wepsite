import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import "./counter.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Counter() {
  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  }, []);
  return (
    <>
      <div
        className="counter shadow-sm "
        data-aos="fade-up"
        data-aos-once="true"
      >
        <Container fluid="lg">
          <div className="counter-child">
            <Row className="gy-4">
              <Col xs={6} md={3}>
                <div className="text-center firstChild">
                  <span>
                    <CountUp
                      enableScrollSpy="true"
                      scrollSpyOnce="true"
                      start={0}
                      end={50}
                      duration={4}
                    />
                  </span>
                  <h3>عدد المحطات</h3>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="text-center secondChild">
                  <span>
                    <CountUp
                      enableScrollSpy="true"
                      scrollSpyOnce="true"
                      start={0}
                      end={80}
                      duration={4}
                    />
                  </span>
                  <h3>عدد الروافع</h3>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="text-center thirdChild">
                  <span>
                    <CountUp
                      enableScrollSpy="true"
                      scrollSpyOnce="true"
                      start={0}
                      end={10000}
                      duration={4}
                    />
                  </span>
                  <h3>عدد العاملين</h3>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="text-center fourthChild">
                  <span>
                    <CountUp
                      enableScrollSpy="true"
                      scrollSpyOnce="true"
                      start={0}
                      end={200000}
                      duration={4}
                    />
                  </span>
                  <h3>عدد المشتركين</h3>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}
export default Counter;
