import { Stack } from 'expo-router';
import './globals.css';
import { StatusBar } from 'react-native';
import React from 'react';

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1f2125" />
      <Stack>
      <Stack.Screen name="pages/test" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="pages/search" options={{ headerShown: false }} />
        <Stack.Screen name="pages/result" options={{ headerShown: false }} />
        <Stack.Screen
          name="pages/voiceSearch"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pages/camerascreen"
          options={{ headerShown: false }}
        />
      </Stack>
    </>
  );
}
