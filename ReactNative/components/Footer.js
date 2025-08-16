import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2023 SkyLink. All rights reserved.</Text>
      <View style={styles.linksContainer}>
        <Text style={styles.link}>Terms of Service</Text>
        <Text style={styles.link}>Privacy Policy</Text>
      </View>
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
    borderTopWidth: 1,
    borderTopColor: '#f0f2f4',
  },
  text: {
    fontSize: 14,
    color: '#637588',
  },
  linksContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  link: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111418',
  },
});

export default Footer;