import React , { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

class Logout extends Component {
  //use componentDIdMount as you want it to execute immediately as the page is called
  componentDidMount() {
    this.props.onLogout(this.props.history);
  }
  render () {
    return <Redirect to="/"/>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout : () => dispatch(actions.logout())
  };
};

export default connect(null,mapDispatchToProps)(Logout);
