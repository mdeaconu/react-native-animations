import React from "react";
import { IMAGE_SIZE, s } from "./ListItem.style";
import Animated, {
  Extrapolation,
  interpolate, useAnimatedStyle
} from "react-native-reanimated";
import PropTypes from "prop-types";
import { Text, TouchableOpacity, View } from "react-native";

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

  return (
    <TouchableOpacity>
      <Animated.Image
        source={image.picture}
        style={[s.image, imageAnimatedStyle]}
      />
      <View style={s.textContainer}>
        <Text style={s.subtitle}>{image.subtitle}</Text>
        <Text style={s.title}>{image.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  image: PropTypes.object,
  scrollY: PropTypes.object,
  index: PropTypes.number
};

export default ListItem;
