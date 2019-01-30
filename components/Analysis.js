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


export class Analysis extends React.Component {
  render() {
      const data = [{
          title:'Annualized Returns',
          percentage:'11%'
        },{
            title:'Volatility',
            percentage:'12%'
        },{
            title:'Fees per Year',
            percentage:'1%'
      }]
    return (
        <View style={styles.outerView}>
                {
                    data.map((val,i)=>{
                        return (
                            <View key={i} style={[styles.row,i==2?{borderBottomWidth:0}:{}]}>
                                <View style={styles.rowLabel}>
                                    <Text>{val.title}</Text>
                                </View>
                                <View style={styles.rowText} >
                                    <Text>
                                        {val.percentage}
                                    </Text>
                                </View>
                            </View>
                        )
                    })
                }
        </View>
    );
  }
}
const styles = StyleSheet.create({
    outerView : {
        flex:1,
        borderWidth:1,
    },
    row:{
        flex:1,
        flexDirection:'row',
        borderBottomWidth:1
    },
    rowLabel : {
        width:Layout.Window.width * 0.7,
        borderRightWidth:1,
        padding:Layout.sPadding
    },
    rowText:{
        width:Layout.Window.width * 0.2, 
        padding:Layout.sPadding
    }
});