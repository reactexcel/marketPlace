import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Layout from '../constants/Layout';


export default class Information extends React.Component {
  static navigationOptions = {
    header:null
  };

  render() {
    const Data = [{
      des:'Cirdan Capital Management is the London Fintech that prepares and designs the investment products. Cirdan is authorized and regulated by the Financial Conduct Authority (the United Kingdom financial regulator).',
      websites:'https://www.cirdancapital.com/',
      label:'SmartETN P.L.C.'
    },
    {
      des:'SmartETN P.L.C. is the Irish issuance vehicle that issues the investment products of Cirdan. SmartETN is fully owned by Cirdan and each investment product is guaranteed by Cirdan. The issuance programm of SmartETN was approved by the Central Bank of Ireland. This approbation is valid for the entire EEA area',
      websites:'https://www.smartetn.com/',
      label:'Financial Services Compensation Scheme'
    },{
      des:'The investment products are covered by the United Kingdom governments Financial Services Compensation Scheme up to a limit of £50,000, in the unlikely event that Cirdan is declared bankrupt. Investors should be made aware thatthis does not cover a decline in the value of the investment product.',
      websites:'https://www.fscs.org.uk/',
      label:''
    }
  ]
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>
            Cirdan Capital Management
          </Text>
        </View>
        <View>
          <FlatList
            data={Data}
            keyExtractor={(item, index) => item.websites}
            renderItem={({ item }) => (
              <View style={styles.listView}>
                <Text>
                  {item.des}
                </Text>
                <Text style={styles.linkText}>
                  {item.websites}
                </Text>
                <View style={styles.label}>
                  <Text style={styles.labelText}>
                    {item.label}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingBottom:20
  },
  headerContainer:{
    borderBottomWidth:1,
    padding:Layout.sPadding
  },
  header:{
    fontSize:15,
    fontWeight:'600'
  },
  listView:{
    borderBottomWidth:1,
    paddingTop:10,
    paddingBottom:10,
    paddingRight:15,
    paddingLeft:15
  },
  linkText:{
    paddingTop:5,
    color:'#0095ff',
  },
  label:{
    paddingTop:15
  },
  labelText:{
    fontWeight:'700'
  }
});