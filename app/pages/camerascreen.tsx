import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Button,
  StyleSheet,
  Image,
} from 'react-native';
import React, { useRef, useEffect, useState } from 'react';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import 'nativewind';
import { icons } from '@/constants/icons';
import PhotoPreviewSection from '@/components/PhotoPreviewSection';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';

const CameraScreen = () => {
  const router = useRouter();

  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<any>(null);
  const [image, setImage] = useState<string | null>(null);

  const cameraRef = useRef<CameraView | null>(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View className="justify-center flex-1">
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      const options = {
        quality: 1,
        base64: true,
        exit: false,
      };
      const takenPhoto = await cameraRef.current.takePictureAsync(options);
      setPhoto(takenPhoto);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleRetakePhoto = () => {
    setPhoto(null);
    setImage('');
  };

  // router.push('/pages/result');

  if (photo || image)
    return (
      <PhotoPreviewSection
        photo={photo}
        image={image}
        handleRetakePhoto={handleRetakePhoto}
      />
    );

  return (
    <View className="justify-center flex-1">
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        {/* topbar */}
        <View className="flex-row justify-between mx-5 my-5 item-center">
          <TouchableOpacity onPress={router.back}>
            <Image
              className="mt-1 size-5"
              source={icons.back}
              tintColor="white"
            />
          </TouchableOpacity>
          <Image
            className="mt-1 size-5"
            source={icons.flash}
            tintColor="white"
          />
          <Text className="text-2xl text-white">Google Lens</Text>
          <Image
            className="mt-1 size-5"
            source={icons.history}
            tintColor="white"
          />
          <Image
            className="mt-1 size-5"
            source={icons.more}
            tintColor="white"
          />
        </View>

        {/* bottombar */}

        <View className="absolute bottom-0 left-0 right-0 z-50 flex-row items-center justify-between pb-5 mx-5 bg-transparent bg-red">
          <View className="flex-1">
            <TouchableOpacity onPress={pickImage}>
              <Image
                className="size-15"
                source={icons.gallery}
                tintColor="white"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleTakePhoto}>
            <View className="bg-transparent border-4 border-white rounded-full">
              <View className="m-2 bg-white rounded-full p-7">
                <Image
                  className="size-10"
                  source={icons.search}
                  tintColor="black"
                />
              </View>
            </View>
          </TouchableOpacity>
          <Text className="flex-1"></Text>
        </View>
      </CameraView>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
});
