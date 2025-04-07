import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { CameraCapturedPicture } from 'expo-camera';
import { Fontisto } from '@expo/vector-icons';
import * as ImageManipulator from 'expo-image-manipulator';
import { useRouter } from 'expo-router';
import { icons } from '@/constants/icons';

interface PhotoPreviewSectionProps {
  photo: CameraCapturedPicture;
  image: any;
  handleRetakePhoto: () => void;
}

const PhotoPreviewSection = ({
  photo,
  image,
  handleRetakePhoto,
}: PhotoPreviewSectionProps) => {
  const router = useRouter();

  const [croppedPhoto, setCroppedPhoto] =
    useState<CameraCapturedPicture>(photo);

  // const context = useImageManipulator('data:image/jpg;base64,' + photo.base64);

  const handleCrop = async () => {
    const result = await ImageManipulator.manipulateAsync(
      croppedPhoto.uri,
      [
        {
          crop: {
            originX: 0,
            originY: 0,
            width: croppedPhoto.width * 0.8, // Crop 80% from left
            height: croppedPhoto.height * 0.8, // Crop 80% from top
          },
        },
      ],
      {
        compress: 1,
        format: ImageManipulator.SaveFormat.JPEG,
        base64: true,
      }
    );
    setCroppedPhoto(result as CameraCapturedPicture);
  };

  return (
    <View className="items-center justify-center flex-1 bg-black bg-red">
      <View className="items-center justify-center w-[95%] m-5 bg-gray-600 rounded-xl border-lg p-0.5">
        {photo === null ? (
          <Image
            className="w-[95%] h-[85%] rounded-xl"
            source={{ uri: image }}
          />
        ) : (
          <Image
            className="w-[95%] h-[85%] rounded-xl"
            source={{ uri: 'data:image/jpg;base64,' + croppedPhoto.base64 }}
          />
        )}
      </View>

      <View className="flex-row items-center justify-center w-full mt-4">
        <TouchableOpacity
          className="items-center justify-center p-5 m-2 bg-gray-500 rounded-full"
          onPress={handleRetakePhoto}
        >
          <Fontisto name="trash" size={20} color="white" />
        </TouchableOpacity>
        {photo === null ? (
          <View />
        ) : (
          <TouchableOpacity
            className="items-center justify-center p-5 m-2 bg-gray-500 rounded-full"
            onPress={handleCrop}
          >
            <Fontisto name="crop" size={20} color="white" />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          className="items-center justify-center p-5 m-2 bg-gray-500 rounded-full"
          onPress={() => router.push('/pages/result')}
        >
          <Image className="size-5" source={icons.tick} tintColor="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhotoPreviewSection;
