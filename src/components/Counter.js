/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';
import { increase, decrease, incrementSaga, decrementSaga } from '../../app/counterSlice';


function Counter(props) {
  const dispatch = useDispatch();
  const { number } = useSelector(state => state.counter);
  const [incrementAmount, setIncrementAmount] = useState('2');
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <View style={styles.counterView}>
      <TouchableOpacity
        style={{ marginRight: 10 }}
        onPress={() => dispatch(increase())}>
        <Text style={{color: 'blue'}}>{'＋'}</Text>
      </TouchableOpacity>
      <Text>Counter: {number}</Text>
      <TouchableOpacity
        style={{ marginLeft: 10, marginRight: 15}}
        onPress={() => dispatch(decrease())}>
        <Text style={{color: 'blue'}}>{'－'}</Text>
      </TouchableOpacity>
      <Button title="Add Syns" onPress={() => dispatch(incrementSaga(incrementValue))} />
      <TextInput
        placeholder="amount"
        style={{ width: 100, height: 50, textAlign: 'center' }}
        value={incrementAmount}
        onChangeText={(e) => setIncrementAmount(e)}
      />
      <Button title="Sub Syns" onPress={() => dispatch(decrementSaga(incrementValue))} />
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
