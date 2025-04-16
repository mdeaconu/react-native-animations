import { React } from "react";
import { View } from "react-native";
import { CIRCLE_RADIUS, s } from "./App.style";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring
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
      const distanceFromCenter = Math.sqrt(
        squareAnimTranslateX.value ** 2 + squareAnimTranslateY.value ** 2
      );
      if (distanceFromCenter < CIRCLE_RADIUS) {
        squareAnimTranslateX.value = withSpring(0);
        squareAnimTranslateY.value = withSpring(0);
      }
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
        <View style={s.circle}>
          <GestureDetector gesture={gestureHandler}>
            <Animated.View style={[s.square, squareAnimStyle]} />
          </GestureDetector>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

export default App;
