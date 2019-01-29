import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {View,Text} from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header:null
  };

  render() {
    return (
        <View>
          <Text>
            2nd Screen
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
