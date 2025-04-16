import { React } from "react";
import { View } from "react-native";
import { s } from "./App.style";
import Animated, {
  useAnimatedStyle,
  useSharedValue
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView
} from "react-native-gesture-handler";

const App = () => {
  const squareAnimTranslateX = useSharedValue(0);
  const squareAnimTranslateY = useSharedValue(0);

  const gestureHandler = Gesture.Pan()
    .onChange((event) => {
      squareAnimTranslateX.value += event.changeX;
      squareAnimTranslateY.value += event.changeY;
    })
    .onFinalize(() => {
      console.log("onEnd");
    });

  const squareAnimStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: squareAnimTranslateX.value },
        { translateY: squareAnimTranslateY.value }
      ],
    };
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={s.root}>
        <GestureDetector gesture={gestureHandler}>
          <Animated.View style={[s.square, squareAnimStyle]} />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
}

export default App;
