import {
  View,
  Text,
  Modal,
  Alert,
  ModalProps,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { icons } from '@/constants/icons';

type PROPS = ModalProps & {
  isOpen: boolean;
  onPress: () => void;
};

interface ModalListItemProp {
  icon: any;
  title: string;
}

const ModalListItem = ({ icon, title }: ModalListItemProp) => {
  return (
    <View className="flex-row justify-start w-full my-4 item-center ps-10">
      <Image source={icon} tintColor="white" className="size-6" />
      <Text className="text-white ms-5">{title}</Text>
    </View>
  );
};

const ModalComponent = ({ isOpen, onPress }: PROPS) => {
  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="fade"
      statusBarTranslucent
      className=""
    >
      <View
        className="w-full"
        style={{
          flex: 1,
          alignSelf: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.7)',
        }}
      >
        <View className="items-center justify-between bg-modalBg w-[100%] rounded-2xl">
          <View className="flex-row p-5">
            <TouchableOpacity className="flex-1" onPress={onPress}>
              <Fontisto name="close" size={20} color="white" />
            </TouchableOpacity>
            <Text className="text-4xl font-bold text-white">Google</Text>
            <Text className="flex-1"></Text>
          </View>

          <View className="flex-row items-center justify-between w-full">
            <View className="flex-row items-center justify-start ms-5">
              <View className="bg-[#79929e] justify-center items-center rounded-full w-10 h-10">
                <Text className="text-white">A</Text>
              </View>
              <View className="items-start justify-center">
                <Text className="text-white ms-5">ABC XYZ</Text>
                <Text className="text-white ms-5">abc@xyz.com</Text>
              </View>
            </View>
            <Image
              source={icons.back}
              className="rotate-200 size-5 me-5"
              tintColor="white"
            />
          </View>

          <View className="border-2 border-[#5e5f63] rounded-full my-6 justify-center items-center">
            <Text className="p-3 text-white">Manage you Google Account</Text>
          </View>

          <View className="w-full h-0.5 bg-[#5e5f63]" />
          <ModalListItem icon={icons.history} title="Turn on Incognito" />
          <View className="w-full h-0.5 bg-[#5e5f63]" />
          <ModalListItem icon={icons.history} title="Search history" />
          <View className="h-0.5 bg-[#5e5f63] ms-20 w-[80%]" />
          <ModalListItem icon={icons.history} title="Delete last 15 mins" />
          <View className="w-full h-0.5 bg-[#5e5f63]" />
          <ModalListItem icon={icons.history} title="SafeSearch" />
          <ModalListItem icon={icons.history} title="Interests" />
          <ModalListItem icon={icons.history} title="Passwords" />
          <ModalListItem icon={icons.history} title="Your profile" />
          <ModalListItem icon={icons.history} title="Search personalisation" />
          <View className="h-0.5 bg-[#5e5f63] ms-20 w-[80%]" />
          <ModalListItem icon={icons.history} title="Settings" />
          <ModalListItem icon={icons.history} title="Help and feedback" />
          <View className="w-full h-0.5 bg-[#5e5f63]" />
          <View className="flex-row items-center justify-center my-5">
            <Text className="text-white me-3">Privacy Policy</Text>
            <Text className="text-white ms-3">Terms of Service</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
