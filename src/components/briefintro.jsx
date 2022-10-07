import { Button, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import team from "../sources/black business team.webp";

function Intro() {
  return (
    <main id="bgcolor" className="pb-4">
      <div className="bg-light mb-5 pb-4" id="about">
        <Container className="pt-5">
          <Row>
            <Col sm={12} lg={6} xl={6}>
              <img src={team} id="abtimg" className="pb-2" />
            </Col>
            <Col sm={12} lg={6} xl={6}>
              <h1 className="m-lg-5">Abia EPOLL</h1>
              <p className="m-lg-5">
                Abia Epoll is an independent voting body for elections
                encouraging and appreciating their efforts in making the world
                better. We are committed to delivering a fair process that will
                allow the general public to decide the best in each category.
                Our ultimate goal is to increase the appreciative spirit in the
                voting/election and recognize behind the screen solving problems
                with their acquired skills. Voters are SUPERSTARS!
              </p>
              <Button className="btn-success m-lg-5">Learn More</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}

export default Intro;
