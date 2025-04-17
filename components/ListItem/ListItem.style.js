import { StyleSheet } from "react-native";

export const IMAGE_SIZE = {
  MAX: 300,
  MIN: 100
};

export const TITLE_FONT_SIZE = {
  MAX: 30,
  MIN: 0.41
};

export const s = StyleSheet.create({
  image: {
    width: "100%",
    height: IMAGE_SIZE.MAX
  },
  textContainer: {
    backgroundColor: "#0000003A",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: TITLE_FONT_SIZE.MIN,
    textAlign: "center",
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
