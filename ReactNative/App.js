import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Hero />
        <Features />
        <Testimonials />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});