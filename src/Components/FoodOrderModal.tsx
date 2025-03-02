import { useDispatch } from "react-redux";
import "./style.css";
import { useState } from "react";
import { actionType } from "../Store";
type FoodOrderModalProps = {
  open: boolean;
  onClose: () => void;
};
const FoodOrderModal = ({ open, onClose }: FoodOrderModalProps) => {
  const initalOrder = { customerId: "" };
  const [order, setOrder] = useState(initalOrder);
  const dispatch = useDispatch();

  return (
    <div
      className="modal-container"
      style={{ display: open ? "block" : "none" }}
    >
      <div className="modal-header">
        <div>
          <h2>Order Your Food</h2>
        </div>
        <span onClick={onClose}>x</span>
      </div>
      <div className="modal-body">
        <input
          name={"customerId"}
          onChange={(e) => {
            setOrder((props) => ({ ...props, customerId: e.target.value }));
          }}
        />
        <button
          onClick={() => {
            console.log(order, "order");

            dispatch({ type: actionType.createOrder, value: order });
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default FoodOrderModal;
