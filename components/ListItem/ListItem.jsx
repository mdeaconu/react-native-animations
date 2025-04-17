import React from "react";
import { IMAGE_SIZE, s } from "./ListItem.style";
import Animated, {
  Extrapolation,
  interpolate, useAnimatedStyle
} from "react-native-reanimated";
import PropTypes from "prop-types";

const ListItem = ({ image, scrollY, index }) => {
  const imageAnimatedStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [index * IMAGE_SIZE.MAX, index * IMAGE_SIZE.MAX - IMAGE_SIZE.MAX],
      [IMAGE_SIZE.MAX, IMAGE_SIZE.MIN],
      Extrapolation.CLAMP
    );
    return {
      height
    };
  });

  return <Animated.Image
    source={image.picture}
    style={[s.image, imageAnimatedStyle]}
  />
};

ListItem.propTypes = {
  image: PropTypes.object,
  scrollY: PropTypes.object,
  index: PropTypes.number
};

export default ListItem;
