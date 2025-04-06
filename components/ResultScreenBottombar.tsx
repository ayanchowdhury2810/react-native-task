import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

const ResultScreenBottombar = () => {
  return (
    <View className="absolute left-0 right-0 bottom-0 bg-tabBarColor flex-row justify-between items-center z-50 p-5">
        <Image
          source={icons.arrow}
          className="size-5 mr-1 mt-0.5"
          tintColor="#fff"
        />
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
  )
}

export default ResultScreenBottombar