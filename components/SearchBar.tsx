import { View, Text, Image, TextInput, Pressable } from 'react-native';
import React from 'react';
import { icons } from '@/constants/icons';
import { Link, RelativePathString } from 'expo-router';

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const Searchbar = ({ placeholder, value, onChangeText }: Props) => {
  return (
    <View className="flex-row items-center px-5 py-2 rounded-full bg-tabBarColor mx-5 justify-between">
      <View className="flex-row items-center justify-start">
        <Image
          source={icons.search}
          className="size-5"
          resizeMode="contain"
          tintColor="#707478"
        />
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor="#707478"
          className="ml-2 text-white flex-2"
          // style={{ fontSize: 20 }}
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

    // <View className="flex-row items-center px-5 py-4 rounded-full bg-dark-200">
    //   <Image
    //     source={icons.search}
    //     className="size-5"
    //     resizeMode="contain"
    //     tintColor="#ab8bff"
    //   />
    //   <TextInput
    //     // onPress={}
    //     placeholder={placeholder}
    //     value={value}
    //     onChangeText={onChangeText}
    //     placeholderTextColor="#a8b5db"
    //     className="ml-2 text-white flex-2"
    //   />
    // </View>
  );
};

export default Searchbar;
