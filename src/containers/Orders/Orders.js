import React, { Component } from "react";
import { connect } from "react-redux";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token);
  }
  /*
  deletedOrder = orderId => {
    console.log("[OrderID]:", orderId);
    this.props.onRemoveOrder(orderId);
  };
  */
  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map(order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
          // deletedOrder={this.deletedOrder(order.id)}
        />
      ));
    }
    return <div>{orders}</div>;
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token) => dispatch(actions.fetchOrders(token)),
    onRemoveOrder: orderId => dispatch(actions.removeOrder(orderId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
