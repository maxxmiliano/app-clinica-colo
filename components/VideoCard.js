import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

export default function VideoCard({ video, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 12, borderWidth: 1, marginBottom: 8 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{video.title}</Text>
      {video.description ? <Text>{video.description}</Text> : null}
    </TouchableOpacity>
  );
}
