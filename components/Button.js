import React from 'react';
import { 
    Text, 
    View, 
    FlatList, 
    Image, 
    TouchableOpacity, 
    StyleSheet 
} from 'react-native';
import Layout from '../constants/Layout';


export class CustomButton extends React.Component {
  render() {
      const {
        title,
        buttonStyle,
        textStyle
      } = this.props;
    return (
        <TouchableOpacity onPress={()=>{this.props.onPress()}}>
            <View style={[styles.mainView,buttonStyle]}>
                <Text style={[styles.textPadding,textStyle]} >
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
    textPadding: {
      padding:Layout.sPadding,
      paddingLeft:Layout.sPadding,
      paddingRight:Layout.sPadding,
      fontSize:13,
    },
    mainView : {
        borderWidth:1
    }
  });