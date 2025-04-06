import { View, Text, Image, StatusBar, Pressable } from 'react-native';
import React from 'react';
import { icons } from '@/constants/icons';
import { useRouter } from 'expo-router';

const BAR_COUNT = 5;

const VoiceSearch = () => {
  const router = useRouter();

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
        <Text className="text-[#ebecf0] text-3xl">Speak now</Text>
        <View className="flex-row bg-backgroundColor border-[#4a4c4e] border-2 px-5 py-4 rounded-full items-center justify-center">
          <Image source={icons.music} className="size-5" tintColor="#ebecf0" />
          <Text className="text-[#ebecf0] ms-3">Search a song</Text>
        </View>
      </View>
    </View>
  );
};

export default VoiceSearch;
