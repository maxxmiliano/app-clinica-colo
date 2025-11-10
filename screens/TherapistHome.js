import React from 'react';
import { View, Button, Text } from 'react-native';

export default function TherapistHome({ navigation }) {
  return (
    <View style={{ padding: 12 }}>
      <Text style={{ fontSize: 20 }}>Área da Terapeuta</Text>
      <Button title="Ver Aulas" onPress={() => navigation.navigate('VideoList')} />
    </View>
  );
}
