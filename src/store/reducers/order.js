import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const purchaseBurgerStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder)
  });
};
const purchaseBurgerFail = (state, action) => {
  return updateObject(state, { loading: false });
};
const purchaseBurgerInit = (state, action) => {
  return updateObject(state, { purchased: false });
};
const fetchOrdersFail = (state, action) => {
  return updateObject(state, { loading: false });
};
const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, { loading: false, orders: action.orders });
};
const fetchOrdersStart = (state, action) => {
  return updateObject(state, { loading: true });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_START:
      return purchaseBurgerStart(state, action);
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);

    case actionTypes.PURCHASE_BURGER_FAIL:
      return purchaseBurgerFail(state, action);

    case actionTypes.PURCHASE_INIT:
      return purchaseBurgerInit(state, action);

    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail(state, action);

    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);

    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(state, action);
    /*
    case actionTypes.REMOVE_ORDER_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.REMOVE_ORDER_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.REMOVE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false
      };
    */
    default:
      return state;
  }
};

export default reducer;
