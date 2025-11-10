import React from 'react';
import { View, Button, Text } from 'react-native';

export default function ManagerHome({ navigation }) {
  return (
    <View style={{ padding: 12 }}>
      <Text style={{ fontSize: 20 }}>Painel do Gestor</Text>
      <Button title="Adicionar Vídeo" onPress={() => navigation.navigate('Upload')} />
      <Button title="Ver Aulas" onPress={() => navigation.navigate('VideoList')} />
    </View>
  );
}
