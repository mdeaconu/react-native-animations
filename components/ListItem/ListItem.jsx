import React from "react";
import { IMAGE_SIZE, s, TITLE_FONT_SIZE } from "./ListItem.style";
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

  const textAnimatedStyle = useAnimatedStyle(() => {
    const fontSize = interpolate(
      scrollY.value,
      [index * IMAGE_SIZE.MAX, index * IMAGE_SIZE.MAX - IMAGE_SIZE.MAX],
      [TITLE_FONT_SIZE.MAX, TITLE_FONT_SIZE.MIN],
      Extrapolation.CLAMP
    );

    const opacity = interpolate(
      scrollY.value,
      [index * IMAGE_SIZE.MAX, IMAGE_SIZE.MAX * (index - 0.5)],
      [1, 0],
      Extrapolation.CLAMP
    );

    return {
      fontSize,
      opacity
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
        <Animated.Text style={[s.title, textAnimatedStyle]}>{image.title}</Animated.Text>
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
