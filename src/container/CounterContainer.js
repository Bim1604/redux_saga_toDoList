/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {connect} from 'react-redux';
import Counter from '../components/Counter.js';
import {addNumber, subNumber} from '../actions/CounterAction';

class CounterContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {addNumber, subNumber} = this.props;
    const {number} = this.props.number;

    return <Counter val={number} {...this.props} />;
  }
}

export default connect(
  state => {
    return {
      number: state.number,
    };
  },
  dispatch => {
    return {
      addNumber: val => dispatch(addNumber(val)),
      subNumber: val => dispatch(subNumber(val)),
    };
  },
)(CounterContainer);
