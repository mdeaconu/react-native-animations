import { React, useEffect } from "react";
import { View } from "react-native";
import { s } from "./App.style";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const App = () => {
  const squareAnimX = useSharedValue(0);

  useEffect(() => {
    squareAnimX.value = withTiming(300, { duration: 2000 });
  }, []);

  const squareAnimStyle = useAnimatedStyle(() => {
    return {
      left: squareAnimX.value,
    };
  });

  return (
    <View style={s.root}>
      <Animated.View style={[s.square, squareAnimStyle]} />
    </View>
  );
}

export default App;
