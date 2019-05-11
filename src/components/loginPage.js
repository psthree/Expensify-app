import React from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

//destructuring the startLogins
export const LoginPage = ({ startLogin }) => (
  <div>
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

//export default LoginPage;
//undefined is mapStateToProps
export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
