import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native';
import { WebBrowser } from 'expo';
import { padding } from '../constants/Layout';

import { ListView } from '../components/ListView';

export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: "My Portfolio",
    headerStyle: {backgroundColor:'green'},
    headerTitleStyle :{textAlign: 'center',color:'white'},
    headerRight: (
        <View style={{padding:10}}>
            <Text style={{color:'white'}}>
                154.89 EUR
            </Text>
        </View>
    )
  };
  componentWillMount () {
    // this.props.getProduct();
  }
  onImagePress = () => {
    // console.log();
    // this.props
    this.props.navigation.navigate('CreativeThinking')
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <ListView
          onImagePress={()=>{this.onImagePress()}}
          data={[1,2,3,4,5]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    mainContainer: {
      flex:1
    },
  });
  