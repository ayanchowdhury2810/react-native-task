import { View, Text, Image } from 'react-native';
import React from 'react';
import { Stack, Tabs } from 'expo-router';
import { icons } from '@/constants/icons';

const TabIcon = ({ focused, icon }: any) => {
  if (focused) {
    return (
      <View className="bg-tabSelectedBg py-3 px-5 items-center justify-center mt-4 size-full-full rounded-full">
        <Image source={icon} tintColor="#8bb6fa" className="size-6" />
      </View>
    );
  }
  return (
    <View className="items-center justify-center mt-4 rounded size-full-full">
      <Image source={icon} tintColor="#707478" className="size-6" />
    </View>
  );
};

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#2f3133',
          position: 'absolute',
          overflow: 'hidden',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} />
          ),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.history} />
          ),
        }}
      />

      <Tabs.Screen
        name="notification"
        options={{
          title: 'Notification',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.notification} />
          ),
        }}
      />

      <Tabs.Screen
        name="menu"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.menu} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
