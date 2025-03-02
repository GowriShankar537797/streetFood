import { Fragment, useState } from "react";
import "../style.css";
import { FoodOrderModal } from "../../Components";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
export const Cart = () => {
  const [openModal, setOpenModal] = useState(false);
  const onClose = () => {
    setOpenModal(false);
  };
  const orderList = useSelector((state: RootState) => state.orderList);
  console.log(orderList);

  return (
    <Fragment>
      <h1>Please Order Your Food Here </h1>
      <div>
        <button
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Order Your Food
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Customer Id</th>
            <th>Maggi Items</th>
            <th>Sweet desert</th>
            <th>Non Veg Items</th>
            <th>Sandwich Items</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="no_records" colSpan={8}>
              No Records Found
            </td>
          </tr>
        </tbody>
      </table>
      <FoodOrderModal open={openModal} onClose={onClose} />
    </Fragment>
  );
};
