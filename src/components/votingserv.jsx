import { Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { ImStatsBars } from "react-icons/im";
import { GiVote } from "react-icons/gi";
import { Center, Flex } from "@chakra-ui/react";

function Services() {
  const cardimg1 = require("../sources/logo-white (4).png");
  const cardimg2 = require("../sources/logo-white (3).png");
  return (
    <main id="service-bg">
      <Container className="pb-5">
        <h1 className="text-light text-center pt-5 pb-3">
          Our Voting Services
        </h1>
        <Row className="mb-5">
          <Col xl={6} lg={6} sm={12} className="pb-2">
            <Card className="card-color text-center">
              {/* <Card.Img variant="top" src={cardimg1} id="card-img" className=""  /> */}
              <Center flexDirection="column">
                <h1 id="iconFont" className="text-light text-center">
                  <ImStatsBars />
                </h1>
                <Card.Body>
                  <Card.Title className="text-light text-center">
                    <h1>Online Polls</h1>
                  </Card.Title>
                  <Card.Text className="text-light">
                    Send your voters an email with secure, single-use voting
                    links that ensure only authorized voters can vote, once.
                  </Card.Text>
                </Card.Body>
              </Center>
            </Card>
          </Col>
          <Col xl={6} lg={6} sm={12}>
            <Card className="card-color text-center">
              {/* <Card.Img variant="top" src={cardimg2} width={100} id="card-img" /> */}
              <Center flexDirection="column">
                <h1 id="iconFont" className="text-light text-center">
                  <GiVote />
                </h1>
                <Card.Body>
                  <Card.Title className="text-light text-center">
                    <h1>Online Elections</h1>
                  </Card.Title>
                  <Card.Text className="text-light">
                    Send your voters an email with secure, single-use voting
                    links that ensure only authorized voters can vote, once.
                  </Card.Text>
                </Card.Body>
              </Center>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Services;
