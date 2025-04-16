import { StyleSheet } from "react-native";

export const CIRCLE_PERIMETER = 350;
export const SQUARE_SIZE = 100;
export const CIRCLE_RADIUS = CIRCLE_PERIMETER / 2;

export const s = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    height: SQUARE_SIZE,
    width: SQUARE_SIZE,
    backgroundColor: "orange",
    borderRadius: 15
  },
  circle: {
    borderColor: "orange",
    borderRadius: CIRCLE_RADIUS,
    borderWidth: 5,
    height: CIRCLE_PERIMETER,
    width: CIRCLE_PERIMETER,
    justifyContent: "center",
    alignItems: "center",
  },
});
