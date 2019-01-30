import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import GeneralInformation from '../screens/GeneralInformation';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: GeneralInformation,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'General Information',
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
      padding:0,
      margin:0,
    },
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Description and Components',
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
      padding:0,
      margin:0,
    },
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Information on the Issuer',
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
      padding:0,
      margin:0,
    },
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createMaterialTopTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
