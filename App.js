import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import VideoListScreen from './screens/VideoListScreen';
import VideoPlayerScreen from './screens/VideoPlayerScreen';
import UploadVideoScreen from './screens/UploadVideoScreen';
import ManagerHome from './screens/ManagerHome';
import TherapistHome from './screens/TherapistHome';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { ActivityIndicator, View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  if (loading) return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size="large" />
    </View>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <>
            <Stack.Screen name="VideoList" component={VideoListScreen} />
            <Stack.Screen name="Player" component={VideoPlayerScreen} />
            <Stack.Screen name="Upload" component={UploadVideoScreen} />
            <Stack.Screen name="ManagerHome" component={ManagerHome} />
            <Stack.Screen name="TherapistHome" component={TherapistHome} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
