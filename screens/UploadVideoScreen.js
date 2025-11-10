import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

export default function UploadVideoScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [url, setUrl] = useState('');

  const handleUpload = async () => {
    if (!title || !url) return Alert.alert('Erro', 'Título e URL são obrigatórios');
    try {
      await addDoc(collection(db, 'videos'), { title, description: desc, url, createdAt: new Date() });
      Alert.alert('Sucesso', 'Vídeo adicionado');
      navigation.goBack();
    } catch (e) {
      Alert.alert('Erro', e.message);
    }
  };

  return (
    <View style={{ padding: 12 }}>
      <Text>Título</Text>
      <TextInput value={title} onChangeText={setTitle} style={{ borderWidth: 1, padding: 8, marginBottom: 8 }} />
      <Text>Descrição</Text>
      <TextInput value={desc} onChangeText={setDesc} style={{ borderWidth: 1, padding: 8, marginBottom: 8 }} />
      <Text>URL do Vídeo (arquivo hospedado ou link direto)</Text>
      <TextInput value={url} onChangeText={setUrl} style={{ borderWidth: 1, padding: 8, marginBottom: 8 }} />
      <Button title="Adicionar vídeo" onPress={handleUpload} />
    </View>
  );
}
