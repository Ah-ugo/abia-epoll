import { Card, Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import "../App.css";

function MainFooter() {
  return (
    <main className="mt-5 pb-5" id="ftbg">
      <Container id="#meet">
        <Row>
          <Col sm={12} lg={6} className="mt-2" id="ftcard">
            <Card id="bgcolor" style={{height:"300px"}}>
              <Card.Title className="p-3 text-light" id="#meet">
                Contact Us
              </Card.Title>
              <Card.Body>
                <Card.Subtitle>
                  <span className="d-flex justify-content-between text-light">
                    Email{" "}
                    <p>
                      <AiOutlineMail />
                    </p>{" "}
                  </span>
                </Card.Subtitle>
                <Card.Text className="text-light">
                  alutaremijius@gmail.com
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Subtitle>
                  <span className="d-flex justify-content-between text-light">
                    Phone/Whatsapp{" "}
                    <p>
                      <BsTelephone />
                    </p>
                  </span>
                </Card.Subtitle>
                <Card.Text className="text-light">+2349028022359</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Subtitle>
                  <span className="d-flex justify-content-between text-light">
                    Address{" "}
                    <p>
                      <GoLocation />
                    </p>
                  </span>
                </Card.Subtitle>
                <Card.Text className="text-light">
                  Bende Road By Church Of Christ Umuahia
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={6} className="mt-2" id="ftcard">
            <Card id="bgcolor" style={{height:"300px"}}>
              <Card.Title className="p-3 text-light" id="line">
                Quick Links
              </Card.Title>
              <Card.Body className="pb-4">
                <Card.Text>
                  <a href="#" className="text-light">
                    Home
                  </a>
                </Card.Text>
                <Card.Text>
                  <a href="#" className="text-light">
                    About Us
                  </a>
                </Card.Text>
                <Card.Text>
                  <a href="#" className="text-light">
                    Contact Us
                  </a>
                </Card.Text>
                <Card.Text>
                  <a href="#" className="text-light">
                    Cast A Vote
                  </a>
                </Card.Text>
                {/* <Card.Text><a href="#" className="text-light">Categories</a></Card.Text> */}
                <Card.Text>
                  <a href="#" className="text-light">
                    Login
                  </a>
                </Card.Text>
                <Card.Text>
                  <a href="#" className="text-light">
                    Register
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </main>
  );
}

export default MainFooter;
