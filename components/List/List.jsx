import React from "react";
import { s } from "./List.style";
import { IMAGES } from "../../constants";
import ListItem from "../ListItem/ListItem";
import Animated, {
  useAnimatedScrollHandler, useSharedValue
} from "react-native-reanimated";
import { IMAGE_SIZE } from "../ListItem/ListItem.style";
import { Dimensions } from "react-native";

const { height: SCREEN_H } = Dimensions.get("screen");
const List = () => {
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollY.value = e.contentOffset.y;
    }
  });

  return (
    <Animated.ScrollView
      decelerationRate={"fast"}
      contentContainerStyle={{ height: IMAGES.length * IMAGE_SIZE.MAX + (SCREEN_H - IMAGE_SIZE.MAX) }}
      scrollEventThrottle={16}
      onScroll={scrollHandler}
      snapToInterval={IMAGE_SIZE.MAX}
    >
      {IMAGES.map((image, i) => (
        <ListItem
          key={image.title + i}
          image={image}
          scrollY={scrollY} index={i}
        />
      ))}
    </Animated.ScrollView>
  );
};

export default List;
