import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db, auth } from '../firebase';
import VideoCard from '../components/VideoCard';
import { signOut } from 'firebase/auth';

export default function VideoListScreen({ navigation }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const q = query(collection(db, 'videos'));
        const snap = await getDocs(q);
        const list = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setVideos(list);
      } catch (e) {
        console.log(e.message);
      }
    })();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  }

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <Text style={{ fontSize: 20, marginBottom: 8 }}>Aulas</Text>
      <FlatList data={videos} keyExtractor={i => i.id} renderItem={({ item }) => (
        <VideoCard video={item} onPress={() => navigation.navigate('Player', { video: item })} />
      )} />
      <View style={{ marginTop: 12 }}>
        <Button title="Painel do Gestor" onPress={() => navigation.navigate('ManagerHome')} />
        <Button title="Sair" onPress={handleLogout} />
      </View>
    </View>
  );
}
