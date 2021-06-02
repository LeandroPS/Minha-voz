import { StatusBar } from "expo-status-bar";
import React from "react";
import { encode, decode } from "base-64";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FavoritesProvider from "./hooks/Favorites";
import SettingsProvider from "./hooks/Settings";
import SpeechProvider from "./hooks/Speech";
import Main from "./screens/Main";
import Settings from "./screens/Settings";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <FavoritesProvider>
        <SpeechProvider>
          <SettingsProvider>
            <SafeAreaProvider>
              <NavigationContainer>
                <Navigator
                  screenOptions={{
                    headerTitle: null,
                    headerStyle: {
                      elevation: 0,
                      shadowOpacity: 0,
                      borderBottomWidth: 1,
                    },
                  }}
                >
                  <Screen name="Main" component={Main} />
                  <Screen name="Settings" component={Settings} />
                </Navigator>
              </NavigationContainer>
            </SafeAreaProvider>
          </SettingsProvider>
        </SpeechProvider>
      </FavoritesProvider>
    </>
  );
}
