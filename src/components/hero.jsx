import { Container, Form, Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Hero() {
  const heroimg = require("../sources/logo-black (2).png");
  return (
    <main className="hero-bg pt-4 pb-4">
      <Container className="mt-5 pt-4 pb-4">
        <div id="center-div">
          <img src={heroimg} width={200} />
          <h1 className="text-success text-center" variant="success">
            First Ever Online Political Election Platform in Nigeria
          </h1>
          <Form className="d-flex">
            <Form.Control
              type="Search"
              placeholder="Search Candidates"
              className="me-2 pe-5 pl-5 border-success"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Link to="/categories" className="pb-4">
            <label className="text-success pb-4">
              View All Categories <i>&#8594;</i>
            </label>
          </Link>
        </div>
      </Container>
    </main>
  );
}

export default Hero;
