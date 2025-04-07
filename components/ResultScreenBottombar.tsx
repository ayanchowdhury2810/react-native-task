import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { icons } from '@/constants/icons';

interface ResultScreenBottombarProps {
  onBackClick: () => void;
}

const ResultScreenBottombar = ({ onBackClick }: ResultScreenBottombarProps) => {
  return (
    <View className="absolute bottom-0 left-0 right-0 z-50 flex-row items-center justify-between p-5 bg-tabBarColor">
      <TouchableOpacity onPress={onBackClick}>
        <Image
          source={icons.arrow}
          className="size-5 mr-1 mt-0.5"
          tintColor="#fff"
        />
      </TouchableOpacity>
      <Image
        source={icons.arrow}
        className="size-5 mr-1 mt-0.5 rotate-180"
        tintColor="#fff"
      />
      <Image
        source={icons.home}
        className="size-5 mr-1 mt-0.5"
        tintColor="#fff"
      />

      <View className="rounded-md align-center justify-center border-2 border-[#929495] px-2 ">
        <Text className="text-white">1</Text>
      </View>
    </View>
  );
};

export default ResultScreenBottombar;
