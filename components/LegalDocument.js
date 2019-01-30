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
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export class LegalDocument extends React.Component {
  render() {
      const data = [{
          title:'Final Terms',
          percentage:'11%'
        },{
            title:'KIID English',
            percentage:'12%'
        }]
    return (
        <View style={styles.outerView}>
            <View style={[styles.rowLabel,{padding:0, borderBottomWidth:1,width:Layout.Window.width}]}>
                <Text style={{paddingBottom:3}}>Legal Documents</Text>
            </View>
                {
                    data.map((val,i)=>{
                        return (
                            <View key={i} style={[styles.row,i==2?{borderBottomWidth:0}:{}]}>
                                <View style={styles.rowLabel}>
                                    <Text>{val.title}</Text>
                                </View>
                                <View style={styles.rowText} >
                                    <FontAwesome
                                        name="file"
                                    />
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
        marginBottom:10
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
        width:Layout.Window.width * 0.3, 
        padding:Layout.sPadding, 
        justifyContent:'center',
        alignItems:'center'
    }
});