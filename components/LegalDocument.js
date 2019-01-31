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
        const {
            headingTitle,
            headingMainTitle,
            icon,
            text,
            data,
            stylePadding
        } = this.props;
    return (
        <View style={styles.outerView}>
            <View style={{flexDirection:"row"}}>
                <View style={[styles.rowLabel,{padding:0, borderBottomWidth:1}]}>
                    <Text style={{paddingBottom:3}}>{headingMainTitle}</Text>
                </View>
                <View style={[styles.rowText,{padding:0,borderBottomWidth:1}]}>
                    <Text>{headingTitle}</Text>
                </View>
            </View>
                {
                    data.map((val,i)=>{
                        let styleFix = icon ? (i % 2 == 0 ? styles.even : styles.odd) : styles.rowLabel;
                        let textStyleFix = icon ? (i % 2 == 0 ? {color:'black'} : {color:'white'} ): {color:'black'};
                        return (
                            <View key={i} style={[styles.row]}>
                                <View style={[styleFix,stylePadding]}>
                                    <Text style={[{paddingLeft:5},textStyleFix]}>{val.title}</Text>
                                    {icon?
                                    <TouchableOpacity onPress={()=>this.props.onPress()}>
                                        <FontAwesome
                                            style={{marginLeft:5,marginTop:3,fontSize:18}}
                                            name="info-circle"
                                        />
                                    </TouchableOpacity>
                                    :null}
                                </View>
                                <View style={[styles.rowText,icon ? (i % 2 == 0 ? {backgroundColor:'green'} : {backgroundColor:'red'} ): {}]} >
                                    {text?
                                    <Text style={textStyleFix}>
                                        {val.percentage}
                                    </Text>
                                    :<FontAwesome
                                        name="file"
                                    />}
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
        borderWidth:1,
        marginBottom:10
    },
    row:{
        flexDirection:'row',
        borderBottomWidth:1
    },
    rowLabel : {
        flexDirection:'row',
        width:Layout.Window.width * 0.7,
        borderRightWidth:1,
    },
    even:{
        flexDirection:'row',
        width:Layout.Window.width * 0.7,
        borderRightWidth:1,
        backgroundColor:'green'
    },
    odd:{
        flexDirection:'row',
        width:Layout.Window.width * 0.7,
        borderRightWidth:1,
        backgroundColor:'red'
    },
    rowText:{
        width:Layout.Window.width * 0.3, 
        justifyContent:'center',
        alignItems:'center'
    }
});