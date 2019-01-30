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


export class RiskIndicator extends React.Component {
  render() {
      const data = [{
            id:0,
            title:'1',
            },
          {
            id:1,
            title:'2',
          },
          {
            id:2,
            title:'3',
          },
          {
            id:3,
            title:'4',
          },
          {
            id:4,
            title:'5',
          },
          {
            id:5,
            title:'6',
          },{
            id:6,
            title:'7'
          }
    ]
    const { selected } = this.props;
    console.log(selected,"dasdsadasd");
    
    return (
        <View style={{justifyContent:'center',alignItems:'center', marginTop:Layout.lPadding}}>
            <View style={{width:Layout.Window.width * 0.64,flexDirection:'row',justifyContent:'space-between', marginBottom:Layout.xsPadding}} >
                <Text style={{fontSize:12}}>Lower Risk</Text>
                <Text style={{fontSize:12}}>Higher Risk</Text>
            </View>
            <View style={{width:Layout.Window.width * 0.75,flexDirection:'row',justifyContent:'space-between'}}>
                <View style={styles.triangle}/>
                <View style={{width:Layout.Window.width * 0.69, height:2,backgroundColor:'black',marginTop:6, marginLeft:-1}}/>
                <View style={[styles.triangle,{transform: [
            { rotate: '90deg' }
        ],}]}/>
            </View>
            <View style={{borderWidth:1, width : Layout.Window.width * 0.804,flexDirection:'row',marginTop:Layout.sPadding}}>
                {
                    data.map((val,i)=>{
                        return (
                            <TouchableOpacity key={i} onPress={()=>{this.props.onPressRisk(i)}}>
                                <View style={[styles.scaleView,(i == selected?{backgroundColor:'#2f95dc'}:{} )]}>
                                    <Text style={{padding:Layout.sPadding,fontWeight:'800'}}>
                                        {val.title}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <View style={{alignSelf:'center', borderWidth:1, marginTop:Layout.sPadding}}>
                <Text style={{textAlign:'center', padding:Layout.xsPadding}}>
                    Summary Risk Indicator
                </Text>
            </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    scaleView:{
        width:Layout.Window.width * 0.114,
        justifyContent:'center',
        alignItems:'center'
    },
    triangle:{
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 8,
        borderRightWidth: 8,
        borderBottomWidth: 15,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor:"black",
        transform: [
            { rotate: '-90deg' }
        ],
        margin: 0,
        marginLeft: 0,
        borderWidth: 0,
        // borderColor:"black"
    }
});