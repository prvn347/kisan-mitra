const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone14ProMax181 from "./screens/IPhone14ProMax181";
import IPhone14ProMax107 from "./screens/IPhone14ProMax107";
import IPhone14ProMax177 from "./screens/IPhone14ProMax177";
import IPhone14ProMax172 from "./screens/IPhone14ProMax172";
import IPhone14ProMax169 from "./screens/IPhone14ProMax169";
import IPhone14ProMax165 from "./screens/IPhone14ProMax165";
import IPhone14ProMax160 from "./screens/IPhone14ProMax160";
import IPhone14ProMax157 from "./screens/IPhone14ProMax157";
import IPhone14ProMax156 from "./screens/IPhone14ProMax156";
import IPhone14ProMax151 from "./screens/IPhone14ProMax151";
import IPhone14ProMax148 from "./screens/IPhone14ProMax148";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "IBM Plex Sans": require("./assets/fonts/IBM_Plex_Sans.ttf"),
    "IBM Plex Sans_light": require("./assets/fonts/IBM_Plex_Sans_light.ttf"),
    "IBM Plex Sans_regular": require("./assets/fonts/IBM_Plex_Sans_regular.ttf"),
    "IBM Plex Sans_bold": require("./assets/fonts/IBM_Plex_Sans_bold.ttf"),
    Inter: require("./assets/fonts/Inter.ttf"),
    Inter_light: require("./assets/fonts/Inter_light.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    Inter_bold: require("./assets/fonts/Inter_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone14ProMax181"
              component={IPhone14ProMax181}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax107"
              component={IPhone14ProMax107}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax177"
              component={IPhone14ProMax177}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax172"
              component={IPhone14ProMax172}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax169"
              component={IPhone14ProMax169}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax165"
              component={IPhone14ProMax165}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax160"
              component={IPhone14ProMax160}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax157"
              component={IPhone14ProMax157}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax156"
              component={IPhone14ProMax156}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax151"
              component={IPhone14ProMax151}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax148"
              component={IPhone14ProMax148}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
