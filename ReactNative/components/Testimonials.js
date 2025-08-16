import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TestimonialCard = ({ name, date, text }) => (
  <View style={styles.card}>
    <View style={styles.header}>
      <View style={styles.avatar} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const Testimonials = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What Our Customers Say</Text>
      <TestimonialCard
        name="Sophia Carter"
        date="2023-09-15"
        text='"SkyLink has made my airport transfers so much easier. The drivers are professional, and the app is user-friendly. Highly recommend!"'
      />
      <TestimonialCard
        name="Liam Johnson"
        date="2023-08-22"
        text={`"The service was impeccable. The driver was on time, the car was clean, and the ride was smooth. I'll definitely be using SkyLink for all my future airport trips."`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111418',
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#dce0e5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#cccccc',
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111418',
  },
  date: {
    fontSize: 14,
    color: '#637588',
  },
  text: {
    fontSize: 14,
    color: '#111418',
  },
});

export default Testimonials;