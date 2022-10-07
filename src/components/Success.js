import React from "react";
import Lottie from "lottie-react";
import Modal from "antd/lib/modal/Modal";
import Successful from "../sources/successful.json";

export default function SuccessModal(props) {
  return (
    <div>
      <Modal
        visible={props.visible}
        title={false}
        onOk={props.ok}
        onCancel={props.cancel}
        // footer={false}
      >
        <div>
          <Lottie animationData={Successful} loop={true} />
        </div>
      </Modal>
    </div>
  );
}
