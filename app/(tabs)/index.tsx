import HomePageCard from '@/components/HomePageCard';
import SearchbarHome from '@/components/SearchbarHome';
import { icons } from '@/constants/icons';
import { fetchMovies } from '@/services/api';
import useFetch from '@/services/useFetch';
import { useRouter } from 'expo-router';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import {
  FlatList,
  Text,
  Image,
  View,
  ScrollView,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import { useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import ModalComponent from '@/components/ModalComponent';

const Topics = ({ img, tint, bgColor }: any) => {
  return (
    <View
      className="py-6 rounded-full px-9 me-4"
      style={{ backgroundColor: bgColor }}
    >
      <Image source={img} tintColor={tint} className="size-6" />
    </View>
  );
};

const InfoCard = ({ heading, info, icon }: any) => {
  return (
    <View className="border border-[#404145] border-2 rounded-2xl pt-3 pb-3 me-4 w-40">
      <Text className="items-start justify-start pb-3 text-white text-md ps-3">
        {heading}
      </Text>
      <View className="flex flex-row items-center justify-between px-3">
        <Text className="text-white">{info}</Text>
        <Image source={icon} className="size-10" tintColor="white" />
      </View>
    </View>
  );
};

export default function Index() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [permission, setPermission] = useState(null);
  const [camerPermission, setCameraPermission] = useCameraPermissions();
  const [micPermission, setMicPermission] = useState(null);
  // const [galleryPermission, setGalleryPermission] = useState(null);

  useEffect(() => {
    requestMicPermission();
    setCameraPermission();
  }, []);

  const requestMicPermission = async () => {
    const response = await Audio.requestPermissionsAsync();
    setPermission(response.status);
  };

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() =>
    fetchMovies({
      query: '',
    })
  );

  return (
    <View className="flex-1 bg-backgroundColor">
      {moviesLoading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          className="self-center mt-10"
        />
      ) : moviesError ? (
        <Text className="text-white">Error: {moviesError?.message}</Text>
      ) : (
        <FlatList
          data={movies}
          renderItem={({ item }) => <HomePageCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListHeaderComponent={
            <>
              <View className="flex-row items-center justify-between px-5">
                <Image
                  source={icons.filter}
                  className="size-7 "
                  tintColor="#8bb6fa"
                />

                <View className="flex-row items-center justify-end px-2 py-2 rounded-lg bg-tabBarColor">
                  <View className="flex-row items-center justify-center px-2 py-3 rounded-lg bg-backgroundColor me-3">
                    <Image source={icons.google} className="size-5" />
                    <Text className="text-white text-md ps-3">Search</Text>
                  </View>
                  <Image source={icons.gemini} className="size-7" />
                </View>

                <Pressable onPress={() => setVisible(true)}>
                  <View className="bg-[#79929e] justify-center items-center rounded-full w-10 h-10">
                    <Text className="text-white">A</Text>
                  </View>
                </Pressable>
              </View>

              <View className="items-center justify-center w-full mt-5">
                <Image
                  source={icons.google_txt}
                  className="size-40"
                  tintColor="#ffffff"
                  resizeMode="contain"
                />
              </View>

              <SearchbarHome
                placeholder="Search"
                onPress={() => router.push('/pages/search')}
              />

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="px-5 mt-5"
              >
                <Topics
                  img={icons.img_search}
                  tint="#d6bf70"
                  bgColor="#4d4531"
                />
                <Topics
                  img={icons.translate}
                  tint="#8bb0f4"
                  bgColor="#363f4e"
                />
                <Topics
                  img={icons.education}
                  tint="#cbe5d5"
                  bgColor="#33423b"
                />
                <Topics img={icons.music} tint="#bd6c66" bgColor="#493034" />
              </ScrollView>

              <View className="h-1 bg-[#404145] w-full mt-5 mb-5" />

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="px-5"
                // contentContainerStyle={{ paddingHorizontal: 16 }}
              >
                <InfoCard heading="Gurugram" info="30" icon={icons.moon} />
                <InfoCard
                  heading="Air Quality - 170"
                  info="moderate"
                  icon={icons.breeze}
                />
                <InfoCard heading="Gurugram" info="30" icon={icons.moon} />
                <InfoCard heading="Gurugram" info="30" icon={icons.breeze} />
              </ScrollView>
            </>
          }
        />
      )}

      <ModalComponent isOpen={visible} onPress={() => setVisible(false)} />
    </View>
  );
}
