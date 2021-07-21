import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import taskListReducer from './src/reducers/TaskListReducer';
import numberReducer from './src/reducers/NumberReducer';
import store from './src/store';
import Counter from './src/components/Counter';
import AddView from './src/components/AddView';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AddView />
          <Counter />
          {/* <TaskListContainer /> */}
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
