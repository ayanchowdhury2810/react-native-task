import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  withRepeat,
  Easing,
} from 'react-native-reanimated';

const DOT_COUNT = 4;
const DOT_SIZE = 10;
const DOT_SPACING = 12;

export const VoiceWaveDots: React.FC = () => {
  const animatedValues = Array.from({ length: DOT_COUNT }).map(() =>
    useSharedValue(1)
  );

  // Kick off animations on mount
  useEffect(() => {
    animatedValues.forEach((value, index) => {
      const delay = index * 150;
      value.value = withRepeat(
        withDelay(
          delay,
          withTiming(1.6, {
            duration: 200,
            easing: Easing.inOut(Easing.ease),
          })
        ),
        -1,
        true
      );
    });
  }, []);

  return (
    <View className="flex-row items-end justify-center h-8">
      {animatedValues.map((animatedValue, i) => {
        const animStyle = useAnimatedStyle(() => ({
          transform: [{ scaleY: animatedValue.value }],
        }));

        return (
          <Animated.View
            key={i}
            className="bg-blue-500 rounded-full"
            style={[
              animStyle,
              {
                width: DOT_SIZE,
                height: DOT_SIZE,
                marginHorizontal: DOT_SPACING / 2,
              },
            ]}
          />
        );
      })}
    </View>
  );
};
