import { StyleSheet } from "react-native";

export const IMAGE_SIZE = {
  MAX: 300,
  MIN: 100
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
    fontSize: 30,
    textAlign: "center",
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
