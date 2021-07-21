/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';
import {increase, decrease} from '../../app/counterSlice';


function Counter(props){
  const dispatch = useDispatch();
  const {number} = useSelector(state => state.counter);

    return (
      <View style={styles.counterView}>
        <Button title="ADD" onPress={() =>  dispatch(increase())}/>
        <Text>Counter: {number}</Text>
        <Button title="SUB" onPress={() => dispatch(decrease())}  />
      </View>
    );
}

export default connect()(Counter);

const styles = StyleSheet.create({
  counterView: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
