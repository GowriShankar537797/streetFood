import { legacy_createStore as createStore } from "redux";

export const actionType = {
  createOrder: "CREATE_ORDER",
};
interface OrderState {
  orderList: any[]; // Explicitly define the array type instead of never[]
}
const initialState: OrderState = {
  orderList: [],
};

const reducer = (
  state: OrderState = initialState,
  action: { type: string; value: any }
) => {
  switch (action.type) {
    case actionType.createOrder:
      return { ...state, orderList: [action.value] };

    default:
      return state;
  }
};

export const store = createStore(reducer);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
