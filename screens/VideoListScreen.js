import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import VideoCard from '../components/VideoCard';
import { initDB, getVideos, addVideo, deleteVideo } from '../database/database';

export default function VideoListScreen({ navigation }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        await initDB();

        // Dados iniciais mockados (só pra primeira execução)
        const existing = await getVideos();
        if (existing.length === 0) {
          await addVideo('Aula 1 - Introdução', 'https://www.exemplo.com/video1.mp4');
          await addVideo('Aula 2 - Intermediário', 'https://www.exemplo.com/video2.mp4');
          await addVideo('Aula 3 - Avançado', 'https://www.exemplo.com/video3.mp4');
        }

        const list = await getVideos();
        setVideos(list);
      } catch (e) {
        console.log('Erro ao carregar vídeos:', e.message);
      }
    })();
  }, []);

  const handleDelete = async (id) => {
    await deleteVideo(id);
    const updated = await getVideos();
    setVideos(updated);
    Alert.alert('Removido', 'O vídeo foi excluído.');
  };

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <Text style={{ fontSize: 20, marginBottom: 8 }}>Aulas</Text>
      <FlatList
        data={videos}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <VideoCard
            video={item}
            onPress={() => navigation.navigate('Player', { video: item })}
            onLongPress={() => handleDelete(item.id)}
          />
        )}
      />
      <View style={{ marginTop: 12 }}>
        <Button
          title="Adicionar vídeo teste"
          onPress={async () => {
            await addVideo('Novo vídeo', 'https://exemplo.com/video.mp4');
            const updated = await getVideos();
            setVideos(updated);
          }}
        />
      </View>
    </View>
  );
}
