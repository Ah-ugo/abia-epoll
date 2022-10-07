import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  //   ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import Lottie from "lottie-react";
import React from "react";

export default function ComingSoon(props) {
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        style={{ height: "100px" }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody style={{ height: "100px", textAlign: "center" }}>
            <div>
              <Lottie
                animationData={require("../sources/103144-coming-soon-loader.json")}
                loop={true}
                style={{ height: "300px", width: "100%" }}
              />
              <Text>Coming Soon</Text>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
