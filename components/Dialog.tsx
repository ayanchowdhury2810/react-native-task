import { View, Text, Modal, Alert } from 'react-native';
import React from 'react';

type DialogProps = {
  visible: boolean;
  onClose: () => void;
};

const Dialog = ({ visible, onClose }: DialogProps) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View className=" ">
        <Text>Close</Text>
      </View>
    </Modal>
  );
};

export default Dialog;
