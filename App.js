import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/screens/Login/Login';
import Nutritionists from './src/screens/Nutritionists/Nutritionists';
import Overview from './src/screens/Overview/Overview';
import PersonalDiet from './src/screens/PersonalDiet/PersonalDiet';
import Values from './src/screens/Values/Values';

const Stack = createStackNavigator();

const Data = () => {
  const TabNavigator = createBottomTabNavigator();

  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen name="Values" component={Values} />
      <TabNavigator.Screen name="Overview" component={Overview} />
      <TabNavigator.Screen name="Nutritionists" component={Nutritionists} />
      <TabNavigator.Screen name="PersonalDiet" component={PersonalDiet} />
    </TabNavigator.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Data">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Data" component={Data} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;