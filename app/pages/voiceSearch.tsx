import { View, Text, Image, StatusBar, Pressable } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { icons } from '@/constants/icons';
import { useRouter } from 'expo-router';
import * as Speech from 'expo-speech';
import * as Permissions from 'expo-permissions';
import { Audio } from 'expo-av';

const BAR_COUNT = 5;

const VoiceSearch = () => {
  const router = useRouter();

  const [text, setText] = useState('');
  const [text2, setText2] = useState('TTT');

  const speakText = () => {
    Speech.speak(text2);
  };

  const startListening = async () => {
    // const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    // if (status !== 'granted') {
    //   alert('Permission to access microphone is required!');
    //   return;
    // }

    const recording = new Audio.Recording();
    try {
      await recording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      await recording.startAsync();
      console.log('Recording started');

      // Stop recording after a certain time (e.g., 5 seconds)
      setTimeout(async () => {
        await recording.stopAndUnloadAsync();
        console.log('Recording stopped');

        // Here you would typically send the audio to a speech-to-text service
        // For demonstration, we will simulate the text output
        setText('Simulated recognized text from speech');
      }, 5000);
    } catch (error) {
      console.error('Error starting recording', error);
    }
  };

  useEffect(() => {
    try {
    //   speakText();
      startListening();
    } catch (e) {
      console.error('ERROR-->', e);
    }
  }, []);

  return (
    <View className="flex-1 bg-tabBarColor">
      <StatusBar backgroundColor="#2f3133" barStyle="light-content" />
      <View className="flex-row items-center justify-between mx-5">
        <Pressable onPress={router.back}>
          <View className="items-center justify-center p-4 bg-[#424649] rounded-full">
            <Image source={icons.back} tintColor="#ebecf0" className="size-5" />
          </View>
        </Pressable>

        <View className="items-center justify-center p-4 bg-[#424649] rounded-full">
          <Image
            source={icons.internet}
            tintColor="#ebecf0"
            className="size-5"
          />
        </View>
      </View>

      <View className="w-full justify-between items-center flex-1 my-20">
        <Text className="text-[#ebecf0] text-3xl">Speak now</Text>

        <View>
          <Text className="text-[#ebecf0] text-3xl">Speak now</Text>
          <Text className="text-[#ebecf0] text-3xl">text: {text}</Text>
          <Text className="text-[#ebecf0] text-3xl">text2: {text2}</Text>
        </View>

        <View className="flex-row bg-backgroundColor border-[#4a4c4e] border-2 px-5 py-4 rounded-full items-center justify-center">
          <Image source={icons.music} className="size-5" tintColor="#ebecf0" />
          <Text className="text-[#ebecf0] ms-3">Search a song</Text>
        </View>
      </View>
    </View>
  );
};

export default VoiceSearch;
