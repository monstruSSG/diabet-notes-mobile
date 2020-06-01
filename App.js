import React, { useState } from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ThemeProvider, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';

import * as USER from './src/store/actions/user'
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

const App = props => {
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
    console.log(props.user)
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
        props.signIn(userToken)
      } catch (e) {
        userToken = null
        props.signOut()
      }
    };

    bootstrapAsync();

    return () => {
      if (notificationEvent) notificationEvent()
    }
  }, [props.user.userToken, props.user.isLoading]);

  return (
    <ThemeProvider theme={elementsTheme}>
      <NavigationContainer>
        <Alert
          visible={showAlert}
          onButtonPress={() => setShowAlert(false)}
          title={'Notifications'}
          content={'For getting out the most of DiabetNotes please eneble Notifications'}
          buttonTitle={'Close'}
        />
        <Stack.Navigator>
          {!props.user.userToken || props.user.isLoading ? (
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

    </ThemeProvider>
  );
}


const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  signIn: token => dispatch(USER.signIn(token)),
  signOut: () => dispatch(USER.signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);