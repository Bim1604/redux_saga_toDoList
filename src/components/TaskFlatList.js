/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';

import { connect, useDispatch, useSelector } from 'react-redux';
import { DeleteTask, FinishTask } from '../../app/taskListSlice';


function TaskFlatList(props) {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.taskList);
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <View>
          <TouchableOpacity
            style={{ marginTop: -2 }}
            onPress={() => dispatch(FinishTask(index))}>
            <Text> {item.isFinished ? '✅' : '🕘'} </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ color: 'black' }}>{item.title}</Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <TouchableOpacity
            style={{ marginTop: -2 }}
            onPress={() => dispatch(DeleteTask(index))}>
            <Text>{'❌'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index}
      renderItem={renderItem}
    />
  );
}

export default connect()(TaskFlatList);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    borderColor: 'gray',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowColor: 'gray',
    elevation: 2,
  },
});
