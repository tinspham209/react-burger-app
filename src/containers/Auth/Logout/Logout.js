import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
const logout = props => {
  useEffect(() => {
    props.onLogout();
  }, []);

  return (
    <div>
      <Redirect to="/" />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  };
};

export default connect(null, mapDispatchToProps)(logout);
