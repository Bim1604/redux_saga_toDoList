import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import Counter from './src/components/Counter';
import AddView from './src/components/AddView';
import TaskFlatList from './src/components/TaskFlatList';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AddView />
          <Counter />
          <TaskFlatList />
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
