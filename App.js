/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import Main from "./comps/Main";
import styles from "./styles/Styles";

function App() {
  return (
      <View style={styles.app}>
          <Main/>
      </View>


  )}

export default App;
