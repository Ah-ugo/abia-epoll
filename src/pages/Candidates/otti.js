import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Card, CardImg, Container, Form } from "react-bootstrap";
import { Header } from "../../components/header";
import SuccessModal from "../../components/Success";
import Ottiimg from "../../sources/otti.webp";
import { Endpoint } from "../../utils/endpoint";
import { useNavigate, Link } from "react-router-dom";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { PaystackButton } from "react-paystack";
import { Modal } from "antd";

export const Otti = () => {
  const [Ottistate, setOtti] = useState(0);
  const [Ottivote, setOttivote] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const navigate = useNavigate();

  const Ok = () => {
    setShowModal(false);
    navigate("/categories/governorship");
    return <Link to="/categories/governorship">Redirect</Link>;
  };

  const AddVote = () => {
    Endpoint.post("/Otti", { votes: Ottivote, totalVotes: Ottivote }).then(
      (res) => {
        console.log(res);
        if (res.status === 200) {
          setShowModal(true);
        } else {
          setShowModal(false);
          return (
            <Alert status="error">
              <AlertIcon /> Voting Unsuccessful
            </Alert>
          );
          // alert("Voting Unsuccessful");
        }
        if (!res) {
          setShowModal(false);
          return (
            <Alert status="error">
              <AlertIcon /> Voting Unsuccessful
            </Alert>
          );
        }

        if (window.onoffline === true) {
          return (
            <Alert status="error">
              <AlertIcon /> Seems you are offline
            </Alert>
          );
        }
      }
    );
    // .then(setShowModal(true));
  };
  const componentProps = {
    email: userEmail,
    amount: 5000,
    metadata: {
      name: userName,
      phone: userPhone,
    },
    publicKey: "pk_live_4188860ac1a0d3995940acde83d2203d4184e306",
    text: "Make Payment",
    callback: AddVote,
    onSuccess: AddVote,
    // onSuccess: () => {
    //   <Alert status="success">
    //     "Thanks for doing business with us! Come back soon!!"
    //   </Alert>;
    // },
    onClose: () => {
      <Alert>
        <AlertIcon />
        "Wait! You need this oil, don't go!!!!"
      </Alert>;
    },
  };

  // const ModalPaymentForm = (
  //   //
  // );

  useEffect(() => {
    Endpoint.get("/Otti").then((res) => {
      setOtti(res.data.countInfo.count);
      console.log(res);
    });
  }, [AddVote]);
  return (
    <div>
      <Container>
        <center>
          <Card
            style={{
              maxWidth: "500px",
              maxHeight: "500px",
              padding: 10,
              marginTop: 100,
            }}>
            <CardImg src={Ottiimg} style={{ maxHeight: "300px" }} />
            <Card.Title>Dr. Alex Otti</Card.Title>
            <Card.Subtitle>Party: Labour Party</Card.Subtitle>
            <Card.Body bg="secondary">
              <Card.Text>Total Votes: {Ottistate}</Card.Text>
              <Button
                style={{ background: "#364d79" }}
                onClick={() => {
                  setPaymentModal(true);
                }}>
                Vote
              </Button>
            </Card.Body>
            {/* <PaystackButton
              {...componentProps}
              // onClick={AddVote}
              className="btn btn-success"
            /> */}
          </Card>
          <SuccessModal visible={showModal} ok={Ok} cancel={Ok} />

          <Modal
            visible={paymentModal}
            title={null}
            footer={null}
            onCancel={() => {
              setPaymentModal(false);
            }}>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone Number"
                onChange={(e) => {
                  setUserPhone(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="pt-3">
              <PaystackButton
                {...componentProps}
                // onClick={AddVote}
                className="btn btn-success"
              />
            </Form.Group>
          </Modal>
        </center>
      </Container>
    </div>
  );
};
