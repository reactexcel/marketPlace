import React from 'react';
import { 
    Text, 
    View, 
    FlatList, 
    Image, 
    TouchableOpacity, 
    StyleSheet,
} from 'react-native';
import Layout from '../constants/Layout';
import {CustomButton} from '../components/Button';



export class GraphView extends React.Component {
  render() {
      const buttonText = [{
        title:"5 Years ago",  
      },{
        title:"1 Year ago",
      },{
        title:"Start of the Year",
      }
    ]
    const {
        graphYear
    } = this.props;
    return (
        <View style={{height:Layout.Window.height * 0.46, paddingLeft:Layout.sPadding, paddingRight:Layout.sPadding}}>
            <View style={{borderWidth:1,height:Layout.Window.height * 0.37}}>
                <Text>Graph Results</Text>
            </View>
                <View style={styles.buttonContainer}>
                {
                    buttonText.map((val,i)=>{
                        let selected = graphYear == i ? true : false;
                       return ( 
                           <CustomButton
                                key={i}
                                onPress={()=>{this.props.onPress(i)}}
                                buttonStyle={[(selected ? styles.firstButton : styles.notSelected),i == 2 ? styles.thirdButton:{}]}
                                title={val.title}
                            />
                        )
                    })
                }
            </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    firstButton: {
        backgroundColor:'#2f95dc',
        borderLeftWidth:1,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderRightWidth:0,
    },
    notSelected : {
        borderLeftWidth:1,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderRightWidth:0,
    },
    thirdButton: {
        borderRightWidth:1,
    },
    buttonContainer: {
        marginTop: Layout.xsPadding,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
  });