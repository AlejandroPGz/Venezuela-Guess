import { Login } from "../components/Login";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <View className="flex items-center justify-center">
        <Login/>
      </View>
    </SafeAreaProvider>
  );
}
