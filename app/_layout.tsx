// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Appearance, StyleSheet } from 'react-native';
import { Colors } from "@/constants/Colors";
// import 'react-native-reanimated';
// import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.headerBackground },
        headerTintColor: theme.text,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
      <Stack.Screen 
        name="menu"
        options={{
          headerShown: true,
          title: "Menu",
          headerTitle: "Coffee Menu",
        }}
      />
      <Stack.Screen
        name="contact"
        options={{
          headerShown: true,
          title: "Contact",
          headerTitle: "Contact Us",
        }}
      />
      {/* <Stack.Screen name="(coffee)" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name='index' options={{title: "Home", headerShown: false}} />
        <Stack.Screen name='contact' options={{title: "Contact"}} /> */}
      <Stack.Screen name="+not-found" />
      <StatusBar style="auto" />
    </Stack>
  );
}
