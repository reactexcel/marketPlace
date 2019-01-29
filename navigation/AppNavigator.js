import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import HomeScreen from '../screens/HomeScreen';
import CreativeTabNavigator from './CreativeTabNavigator';
import { View, Text, TouchableOpacity } from 'react-native';
import Layout from '../constants/Layout';
import {store} from '../redux/store';
import {openInvestModel} from '../redux/action';


const Home = createStackNavigator({
  Home: MainScreen,
});
export default createAppContainer(createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  // Main: MainScreen,
  CreativeThinking: {
    screen:CreativeTabNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'Creative Thinking',
      headerRight:(
        <TouchableOpacity onPress={() => store.dispatch(openInvestModel())}>
          <View style={{
            marginRight:Layout.sPadding,
            padding:Layout.sPadding,
            backgroundColor:'green',

            }}>
            <Text style={{color:'white',fontWeight:'800', paddingLeft:15, paddingRight:15}}>
              Invest
            </Text>
          </View>
        </TouchableOpacity>
      )
    }),
  }
}));