/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { connect, useDispatch, useSelector } from 'react-redux';
import { AddTask } from '../../app/taskListSlice';

function AddView(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {newTaskName: ''};
  // }
  const dispatch = useDispatch();

  return (
    <View style={styles.addView}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>To Do App</Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            returnKeyType="done"
            underlineColorAndroid="transparent"
            // value={`${this.state.newTaskName}`}
            // onSubmitEditing={() => onAddNewTask(this.state.newTaskName)}
            // onChangeText={text => this.setState({ newTaskName: text })}
            placeholder="Task name"
            style={[{ flex: 1 }, styles.input]}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(AddTask)}>
          <Text style={{ color: 'white' }}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default connect()(AddView);

const styles = StyleSheet.create({
  addView: {
    ...Platform.select({
      ios: {
        height: 94,
        paddingTop: 20,
      },
      android: {
        height: 74,
      },
    }),
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowColor: 'gray',
    elevation: 2,
  },

  input: {
    height: 30,
    padding: 5,
    borderRadius: 5,
    borderColor: 'lightgray',
    borderWidth: 1,
    fontSize: 15,
  },

  button: {
    marginLeft: 10,
    borderRadius: 5,
    backgroundColor: '#2196F3',
    padding: 7,
  },
});

