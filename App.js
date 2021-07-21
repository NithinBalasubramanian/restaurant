import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Pages

import PageManage from './PageManage';

//redux setup

import { createStore } from 'redux'
import AllReducer from './reducer/index'
import { Provider } from 'react-redux'
 
const mystore = createStore(AllReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default function App() {

  return (
    <Provider store = {mystore} >
      <PageManage />
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
