import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Header } from "../components/header";
import {Text} from "@chakra-ui/react"
import { Link } from "react-router-dom";
import ComingSoon from "../components/ComingSoon";
import { useState } from "react";

export function Categories() {
  const [openComingModal, setOpenComingModal] = useState(false)

  const CloseModal = () => {
    setOpenComingModal(false)
  }
  return (
    <div>
      <Header />
      <Container style={{marginTop: "110px"}}>
        <Row>
          <Col lg={4} sm={6} style={{marginBottom: "30px"}}>
          <Card style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor:"rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(5px)",
  // -webkit-backdrop-filter: blur(5px);
border: "1px solid rgba(255, 255, 255, 0.3)",
boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", height: "50px"}}>
            <Link to="/categories/governorship"><Text>Governorship</Text></Link>
          </Card>
          </Col>
          <Col lg={4} sm={6} style={{marginBottom: "30px"}}>
          <Card style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor:"rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(5px)",
  // -webkit-backdrop-filter: blur(5px);
border: "1px solid rgba(255, 255, 255, 0.3)",
boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", height: "50px"}}>
            <button onClick={()=>{
              setOpenComingModal(true)
            }}><Text>Local Government</Text></button>
          </Card>
          </Col>
          <Col lg={4} sm={6} style={{marginBottom: "30px"}}>
          <Card style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor:"rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(5px)",
  // -webkit-backdrop-filter: blur(5px);
border: "1px solid rgba(255, 255, 255, 0.3)",
boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", height: "50px"}}>
            <button onClick={()=>{
              setOpenComingModal(true)
            }}><Text>State House Of Assembly</Text></button>
          </Card>
          </Col>
          <Col lg={4} sm={6} style={{marginBottom: "30px"}}>
          <Card style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor:"rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(5px)",
  // -webkit-backdrop-filter: blur(5px);
border: "1px solid rgba(255, 255, 255, 0.3)",
boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", height: "50px"}}>
            <button onClick={()=>{
              setOpenComingModal(true)
            }}><Text>Federal House Of Assembly</Text></button>
          </Card>
          </Col>

        </Row>
        <ComingSoon isOpen={openComingModal} onClose={CloseModal}/>
      </Container>
    </div>
  );
}
