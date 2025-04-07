import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Searchbar from '@/components/SearchBar';
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';
import { Link, useRouter } from 'expo-router';
import { icons } from '@/constants/icons';

const SearchItem = ({ title }: Movie) => {
  return (
    <Link href={`/pages/result`} asChild>
      <TouchableOpacity>
        <View className="flex-row items-center justify-start w-full mt-5 ">
          <View className="p-2 rounded-full bg-tabBarColor">
            <Image source={icons.clock} tintColor={'#707478'} />
          </View>
          <Text className="text-[#ebecf0] flex-1 ms-5" numberOfLines={1}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const {
    data: movies,
    loading: loading,
    error: error,
    refetch: loadMovies,
    reset,
  } = useFetch(
    () =>
      fetchMovies({
        query: searchQuery,
      }),
    false
  );

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-backgroundColor">
      <Searchbar
        placeholder="Search or Type url"
        value={searchQuery}
        onChangeText={(text: string) => setSearchQuery(text)}
        onMicClick={() => router.push('/pages/voiceSearch')}
        onBackClick={() => {}}
        onCameraClick={() => router.push('/pages/camerascreen')}
      />

      <View className="flex-row items-center justify-between mx-5 my-5">
        <Text className="text-hintColor">Recent searches</Text>
        <Text className="text-hintColor">MANAGE HISTORY</Text>
      </View>

      {loading && (
        <ActivityIndicator size="large" color="#0000ff" className="my-3" />
      )}

      {error && (
        <Text className="px-5 my-5 text-red-3">Error: {error.message}</Text>
      )}

      <FlatList
        data={movies}
        renderItem={({ item }) => <SearchItem {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className="mx-5"
        numColumns={1}
      />
    </View>
  );
};

export default Search;
