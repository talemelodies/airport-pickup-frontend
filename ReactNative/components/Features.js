import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FeatureCard = ({ title, description }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDescription}>{description}</Text>
  </View>
);

const Features = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>For Passengers</Text>
      <FeatureCard title="Easy Booking" description="Book your ride in just a few taps with our user-friendly app." />
      <FeatureCard title="Flexible Scheduling" description="Schedule your ride in advance or on-demand, fitting your travel plans." />
      <FeatureCard title="Secure Payments" description="Pay securely online with various payment options, ensuring a smooth transaction." />

      <Text style={styles.title}>For Drivers</Text>
      <FeatureCard title="Flexible Hours" description="Set your own hours and work around your schedule, maximizing your flexibility." />
      <FeatureCard title="Earnings Tracking" description="Track your earnings in real-time and get paid on time, every time." />
      <FeatureCard title="Supportive Community" description="Join a supportive community of drivers with access to resources and assistance." />

      <Text style={styles.title}>For Businesses</Text>
      <FeatureCard title="Custom Solutions" description="Get custom solutions tailored to your business needs, ensuring efficient travel management." />
      <FeatureCard title="Dedicated Support" description="Benefit from dedicated support and account management for seamless operations." />
      <FeatureCard title="Reporting & Analytics" description="Access detailed reporting and analytics to optimize your travel expenses." />
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
    marginTop: 20,
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
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111418',
  },
  cardDescription: {
    fontSize: 14,
    color: '#637588',
    marginTop: 5,
  },
});

export default Features;