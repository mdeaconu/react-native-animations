import { React, useEffect } from "react";
import { View } from "react-native";
import { s } from "./App.style";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

const App = () => {
  const squareAnimX = useSharedValue(0);
  const squareAnimY = useSharedValue(0);

  useEffect(() => {
    squareAnimX.value = withTiming(300, { duration: 3000 }, () => {
      squareAnimY.value = withSpring(300, { mass: 10 });
      squareAnimX.value = withSpring(0, { duration: 3000 });
    });
  }, []);

  const squareAnimStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: squareAnimX.value,
        },
        {
          translateY: squareAnimY.value
        }
      ],
    };
  });

  return (
    <View style={s.root}>
      <Animated.View style={[s.square, squareAnimStyle]} />
    </View>
  );
}

export default App;
