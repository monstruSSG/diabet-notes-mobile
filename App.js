import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ThemeProvider, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Login from './src/screens/Login/Login';
import Nutritionists from './src/screens/Nutritionists/Nutritionists';
import Overview from './src/screens/Overview/Overview';
import PersonalDiet from './src/screens/PersonalDiet/PersonalDiet';
import Values from './src/screens/Values/Values';

import elementsTheme from './elementsStyles';

const Stack = createStackNavigator();

const Data = () => {
  const TabNavigator = createMaterialBottomTabNavigator();

  return (
    <TabNavigator.Navigator
      activeColor="#fff"
      inactiveColor="#f5f5f5"
      barStyle={{ backgroundColor: '#303f9f' }}
    >
      <TabNavigator.Screen
        name="Values"
        component={Values}
        options={{
          tabBarLabel: 'Values',
          tabBarIcon: ({ color }) => (
            <Icon name="assignment" color={color} size={25} />
          ),
        }} />
      <TabNavigator.Screen
        name="Overview"
        component={Overview}
        options={{
          tabBarLabel: 'Overview',
          tabBarIcon: ({ color }) => (
            <Icon name="assessment" color={color} size={25} />
          ),
        }}
      />
      <TabNavigator.Screen 
        name="Nutritionists" 
        component={Nutritionists} 
        options={{
          tabBarLabel: 'Nutritionists',
          tabBarIcon: ({ color }) => (
            <Icon name="group" color={color} size={25} />
          ),
        }}
        />
      <TabNavigator.Screen
        name="PersonalDiet"
        component={PersonalDiet}
        options={{
          tabBarLabel: 'Diet',
          tabBarIcon: ({ color }) => (
            <Icon name="face" color={color} size={25} />
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
}

const App = () => {
  return (
    <ThemeProvider theme={elementsTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Data">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name="Data"
            component={Data}
            options={{
              header: () => <Header
                centerComponent={{
                  text: 'DiabetNotes',
                  style: {
                    color: '#fff',
                    fontSize: 25
                  }
                }} />
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;