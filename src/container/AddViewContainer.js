/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import AddView from '../components/AddView';
import {connect} from 'react-redux';
import addView from '../actions/AddAction';

class AddViewContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const onAddNewTask = this.props.onAddNewTask;

    return <AddView onAddNewTask={onAddNewTask} />;
  }
}

export default connect(
  state => {
    return {};
  },
  dispatch => {
    return {
      onAddNewTask: name => dispatch(addView(name)),
    };
  },
)(AddViewContainer);
