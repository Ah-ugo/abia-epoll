import { usePaystackPayment } from "react-paystack";
import { config } from "./paystackconfig";

export default function PaywithPaystack() {
  const initPayment = usePaystackPayment(config);

  const onSuccess = () => {
    alert("success");
  };
  const onClose = () => {
    alert("failed");
  };
  initPayment(onSuccess, onClose);
  console.log(initPayment);
}
