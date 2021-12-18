import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import RestaurantsScreen from './src/features/restaurant/screens/restaurants.screen';
import MapScreen from './src/features/map/screens/map.screen';
import SettingsScreen from './src/features/settings/screens/settings.screen';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.contex';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Restaurants"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }
      }
    >
      <Tab.Screen
        name="Restaurants"
        component={RestaurantsScreen}
        options={{
          tabBarLabel: 'Restaurants',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant" size={size} color={color} />),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" size={size} color={color} />),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <RestaurantsContextProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
        </ThemeProvider>
      </RestaurantsContextProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


