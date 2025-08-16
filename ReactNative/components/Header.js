import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>SkyLink</Text>
      </View>
      <View style={styles.navContainer}>
        <Text style={styles.navText}>Book a Ride</Text>
        <Text style={styles.navText}>Become a Driver</Text>
        <Text style={styles.navText}>Business Solutions</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f2f4',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111418',
  },
  navContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  navText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111418',
  },
  button: {
    backgroundColor: '#1980e6',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Header;