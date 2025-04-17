import { React } from "react";
import { View } from "react-native";
import List from "./components/List/List";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {
  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1 }}>
        <List />
      </View>
    </GestureHandlerRootView>
  );
}

export default App;
