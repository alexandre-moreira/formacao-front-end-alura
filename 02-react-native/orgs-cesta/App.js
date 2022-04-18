import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/screens/Cesta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
