import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import { icons } from '@/constants/icons';

const ResultScreenSearchBar = () => {
  return (
    <View className="flex-row items-center px-3 py-2 rounded-full bg-tabBarColor mx-5 justify-between">
      <View className="flex-row items-center justify-start">
        <Image source={icons.google} className="size-7" resizeMode="contain" />
        <Text className="ml-5 text-hintColor flex-2">Add to search</Text>
      </View>

      <View className="flex-row item-center justify-end">
        <View className='w-0.5 bg-hintColor me-3'/>
        <View className="bg-[#79929e] justify-center items-center rounded-full w-10 h-10">
          <Text className="text-white">A</Text>
        </View>
      </View>
    </View>
  );
};

export default ResultScreenSearchBar;
