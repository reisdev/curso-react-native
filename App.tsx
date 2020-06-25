import React from 'react';
import {
  StyleSheet, View, StatusBar, Text
} from 'react-native';

import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#ec8135" />
      <Routes />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});
