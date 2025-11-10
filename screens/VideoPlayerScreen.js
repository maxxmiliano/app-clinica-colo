import React, { useRef, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { Video } from 'expo-av';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function VideoPlayerScreen({ route }) {
  const { video } = route.params;
  const player = useRef(null);

  const markCompleted = async () => {
    try {
      const uid = auth.currentUser.uid;
      const progressRef = doc(db, 'users', uid, 'progress', video.id);
      await setDoc(progressRef, { completed: true, completedAt: new Date() });
      Alert.alert('Sucesso', 'Aula marcada como concluída');
    } catch (e) {
      Alert.alert('Erro', e.message);
    }
  };

  return (
    <View style={{ flex:1, padding:12 }}>
      <Text style={{ fontSize: 20 }}>{video.title}</Text>
      <Video ref={player} source={{ uri: video.url }} useNativeControls resizeMode="contain" style={{ width: '100%', height: 300, marginTop: 12 }} />
      <View style={{ marginTop: 12 }}>
        <Button title="Marcar como concluída" onPress={markCompleted} />
      </View>
    </View>
  );
}
