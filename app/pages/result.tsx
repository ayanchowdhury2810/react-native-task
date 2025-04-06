import { View, Text, Image } from 'react-native';
import React from 'react';
import ResultScreenSearchBar from '@/components/ResultScreenSearchBar';
import ResultScreenBottombar from '@/components/ResultScreenBottombar';
import MasonryList from '@react-native-seoul/masonry-list';
import { icons } from '@/constants/icons';

const Result = () => {
  return (
    <View className="flex-1 bg-backgroundColor">
      <ResultScreenSearchBar />

      <View className="h-0.5 bg-tabBarColor mt-5 mb-5" />

      <View className="flex-row items-center justify-start mx-3">
        <Image
          source={icons.ici}
          tintColor="#b6b8b9"
          className="size-6 "
        />
        <Text className="text-[#b6b8b9] ms-3">Result for people are limited</Text>
      </View>

      <View className="h-0.5 bg-tabBarColor mt-5" />

      <MasonryList
        className="flex-1 mb-10"
        data={filteredItems}
        numColumns={2}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, i }) => (
          <>
            <View className="m-3 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                source={{ uri: item.uri }}
                resizeMode="cover"
                className=" h-auto"
                style={{ aspectRatio: 3 / 4 }}
              />
            </View>
            <View className="flex-row items-center justify-start ms-3">
              <Image source={icons.google} className="size-4" />
              <Text className="text-[#969696] ms-2">{item.siteName}</Text>
            </View>

            <Text className="p-2 text-base text-white" numberOfLines={2}>
              {item.desc}
            </Text>
          </>
        )}
      />

      <ResultScreenBottombar />
    </View>
  );
};

export default Result;

const filteredItems = [
  {
    id: 1,
    uri: 'https://images.pexels.com/photos/7004697/pexels-photo-7004697.jpeg?auto=compress&cs=tinysrgb&w=600',
    siteName: 'Amazon.com',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 2,
    uri: 'data:image/jpeg;base64,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',
    siteName: 'Amazon.com',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },

  {
    id: 3,
    uri: 'https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg?auto=compress&cs=tinysrgb&w=600',
    siteName: 'Amazon.com',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 4,
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQT6l43GKmlod799X9rFzAzAaXHTRKesEssg&s',
    siteName: 'Amazon.com',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 5,
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQx720fsQjDzlPIqejIUfNRb1YZ5LhkJipMA&s',
    siteName: 'Amazon.com',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 6,
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz5jSZ8ymFFzOsG_0gCykhQydASjPDRmoV6w&s',
    siteName: 'Amazon.com',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 7,
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2lsXJ8ESSJotD2cdiL-mZNFbPLkd3ge1SA&s',
    siteName: 'Amazon.com',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];
