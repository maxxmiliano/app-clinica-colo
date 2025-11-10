import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 12 }}>TreinaPlus</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginBottom: 8, padding: 8 }} />
      <TextInput placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1, marginBottom: 8, padding: 8 }} />
      <Button title="Entrar" onPress={handleLogin} />
      {error ? <Text style={{ color: 'red', marginTop: 8 }}>{error}</Text> : null}
      <Text style={{ marginTop: 12, color: '#666' }}>Se for a primeira vez, peça ao gestor para criar seu usuário no Firebase Auth.</Text>
    </View>
  );
}
