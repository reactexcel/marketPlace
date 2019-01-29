import React from 'react';
import { Text,View, FlatList, Image, TouchableOpacity } from 'react-native';
import Layout from '../constants/Layout';


export class ListView extends React.Component {
  render() {
    const { data,onImagePress } = this.props;
    return (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={{borderBottomWidth:1,flexDirection:'row'}}>
                <View style={{padding:Layout.sPadding}}>
                  <Text style={{marginBottom:Layout.xsPadding}} >
                    Invest with PRIDE
                  </Text>
                  <TouchableOpacity onPress={()=>{onImagePress()}}>
                    <Image
                      style={{width:Layout.Window.width*0.3,height:Layout.Window.height*0.15}}
                      source={require('../assets/images/addIcon.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{justifyContent:'center',alignItems:"center", width:Layout.Window.width*0.65}}>
                  <Text style={{marginTop:Layout.sPadding}}>
                    InVest in companies that care about LGBTQ rights!InVest in companies that care about LGBTQ rights!
                  </Text>
                </View>
            </View>  
          )}
        />
    );
  }
}
