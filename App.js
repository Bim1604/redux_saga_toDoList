import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import AddViewContainer from './src/container/AddViewContainer';
import CounterContainer from './src/container/CounterContainer';
import TaskListContainer from './src/container/TaskListContainer';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import taskListReducer from './src/reducers/TaskListReducer';
import numberReducer from './src/reducers/NumberReducer';

const store = createStore(
  combineReducers({
    number: numberReducer,
    taskList: taskListReducer,
  }),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AddViewContainer />
          <CounterContainer />
          <TaskListContainer />
        </View>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F5FE',
  },
});
