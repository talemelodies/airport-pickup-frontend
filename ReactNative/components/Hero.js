import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Hero = () => {
  return (
    <View style={styles.heroBackground}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Airport Transfer Service: Travel with Ease</Text>
        <Text style={styles.subtitle}>
          Your reliable partner for seamless airport transfers. Book your ride in minutes and enjoy a stress-free journey.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heroBackground: {
    minHeight: 480,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cccccc',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    gap: 15,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1980e6',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Hero;