import React, { useState } from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ThemeProvider, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';

import Login from './src/screens/Login/Login';
import Nutritionists from './src/screens/Nutritionists/Nutritionists';
import Overview from './src/screens/Overview/Overview';
import PersonalDiet from './src/screens/PersonalDiet/PersonalDiet';
import Values from './src/screens/Values/Values';
import Reminders from './src/screens/Reminders/Reminders';
import * as LOGIN_REQUESTS from './src/requests/login';
import NutritionistSettings from './src/screens/NutritionistSettings/NutritionistSettings'
import PatientDetails from './src/screens/PatientDetails/PatientDetails'
import Patients from './src/screens/Patients/Patient'
import Alert from './src/common/Alert'

import elementsTheme from './elementsStyles';
import AsyncStorage from '@react-native-community/async-storage';

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
        name="Values"
        component={Values}
        options={{
          tabBarLabel: 'Values',
          tabBarIcon: ({ color }) => (
            <Icon name="assignment" color={color} size={25} />
          ),
        }} />
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
      <TabNavigator.Screen
        name="Reminders"
        component={Reminders}
        options={{
          tabBarLabel: 'Reminders',
          tabBarIcon: ({ color }) => (
            <Icon name="subject" color={color} size={25} />
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
}

const NutritionistData = () => {
  const TabNavigator = createMaterialBottomTabNavigator();

  return (
    <TabNavigator.Navigator
      activeColor="#fff"
      inactiveColor="#f5f5f5"
      barStyle={{ backgroundColor: '#303f9f' }}
      initialRouteName='Patients'
    >
      <TabNavigator.Screen
        name="Patients"
        component={Patients}
        options={{
          tabBarLabel: 'Patients',
          tabBarIcon: ({ color }) => (
            <Icon name="assignment" color={color} size={25} />
          ),
        }}
      />

      <TabNavigator.Screen
        name="NutritionistSettings"
        component={NutritionistSettings}
        options={{
          tabBarLabel: 'Configuration',
          tabBarIcon: ({ color }) => (
            <Icon name="account-box" color={color} size={25} />
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
}


const AuthContext = React.createContext();

const App = () => {
  const [state, dispatch] = React.useReducer((prevState, action) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'SIGN_IN':
        return {
          ...prevState,
          isSignout: false,
          userToken: action.token,
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          isSignout: true,
          userToken: null,
        };
    }
  }, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });
  const [showAlert, setShowAlert] = useState(false)

  const hasPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (!enabled) {
      setShowAlert(true)
      return true
    }

    return false
  }

  React.useEffect(() => {
    // Handle push notifications and permissions
    let notificationEvent = null

    hasPermission()
      .then(async enabled => {
        if (!enabled) return
        

        notificationEvent = messaging().onMessage(data => {
          //Handle notification
        })
      })

    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('token');
      } catch (e) {
        userToken = null
      }

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();

    return () => {
      if (notificationEvent) notificationEvent()
    }
  }, []);

  const authContext = React.useMemo(() => ({
    signIn: async (email, password) => {
      let result = await LOGIN_REQUESTS.login(email, password)

      await AsyncStorage.setItem('token', result.token)

      dispatch({ type: 'SIGN_IN', token: result.token });
    },
    signOut: async () => {
      await AsyncStorage.removeItem('token')
      dispatch({ type: 'SIGN_OUT' })
    },
    signUp: async data => {
      dispatch({ type: 'SIGN_IN', token: 'our_token' });
    },
  }), []);

  return (
    <ThemeProvider theme={elementsTheme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <Alert
            visible={showAlert}
            onButtonPress={() => setShowAlert(false)}
            title={'Notifications'}
            content={'For getting out the most of DiabetNotes please eneble Notifications'}
            buttonTitle={'Close'}
          />
          <Stack.Navigator>

            {state.userToken == null ? (
              <Stack.Screen name="Login" component={Login} options={{ header: () => null }} />
            ) : (
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
              )}
          </Stack.Navigator>
        </NavigationContainer>

      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;