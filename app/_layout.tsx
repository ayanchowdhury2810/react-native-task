import { Stack } from 'expo-router';
import './globals.css';
import { StatusBar } from 'react-native';

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1f2125" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="pages/search" options={{ headerShown: false }}/>
        <Stack.Screen name="pages/result" options={{ headerShown: false }}/>

      </Stack>
    </>
  );
}
