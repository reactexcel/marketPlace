import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { connect } from 'react-redux';

import { MonoText } from '../components/StyledText';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header:null
  };
  render() {
    console.log(this.props.lang,"console");
    
    return (
      <View>
        <Text>
           View Changes 
        </Text>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      lang: state
  }
}

export default connect(mapStateToProps,null)(HomeScreen);