import { View, Text, Image, TextInput, Pressable } from 'react-native';
import React from 'react';
import { icons } from '@/constants/icons';
import { Link, RelativePathString } from 'expo-router';

interface Props {
  placeholder: string;
  onPress: () => void;
}

const SearchbarHome = ({ placeholder, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View className="flex-row items-center px-5 py-4 rounded-full bg-tabBarColor mx-5 justify-between">
        <View className="flex-row items-center justify-start">
          <Image
            source={icons.search}
            className="size-7"
            resizeMode="contain"
            tintColor="#707478"
          />
          <TextInput
            onPress={() => {}}
            placeholder={placeholder}
            value=""
            onChangeText={() => {}}
            placeholderTextColor="#707478"
            className="ml-2 text-white flex-2"
            style={{ fontSize: 20 }}
          />
        </View>

        <View className="flex-row item-center justify-end">
          <Image
            source={icons.mic}
            className="size-7 me-5"
            resizeMode="contain"
            tintColor="#fffffe"
          />

          <Image
            source={icons.camera}
            className="size-7 me-2"
            resizeMode="contain"
            tintColor="#fffffe"
          />
        </View>
      </View>
    </Pressable>
  );
};

export default SearchbarHome;
