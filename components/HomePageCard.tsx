import { View, Text, Image } from 'react-native';
import React from 'react';

const HomePageCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
  overview,
}: Movie) => {
  return (
    <View className="flex-col mx-5 mt-5">
      <Image
        source={{
          uri: poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : `https://placeholder.co/600x400/1a1a1a/ffffff.png`,
        }}
        className="w-full rounded-2xl h-52"
        resizeMode='cover'
      />
      <Text className="text-white mt-5 text-2xl" numberOfLines={3}>{overview}</Text>
    </View>
  );
};

export default HomePageCard;
