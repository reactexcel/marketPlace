import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {View,Text} from 'react-native';
import { LegalDocument } from '../components/LegalDocument';
import Modal from 'react-native-modalbox';
import Layout from '../constants/Layout';



export default class Description extends React.Component {
  static navigationOptions = {
    header:null
  };    
  state ={
    infoModal:false,
    val:null
  }

  render() {
    const test = [
      {
          "percentage": 3,
          "title": "MRK US Equity"
      },
      {
          "percentage": 3,
          "title": "JPM US Equity"
      },
      {
          "percentage": 3,
          "title": "FB US Equity"
      },
      {
          "percentage": 3,
          "title": "MA US Equity"
      },
      {
          "percentage": 3,
          "title": "WFC US Equity"
      },
      {
          "percentage": 3,
          "title": "V US Equity"
      },
      {
          "percentage": 3,
          "title": "PFE US Equity"
      },
      {
          "percentage": 3,
          "title": "PG US Equity"
      },
      {
          "percentage": 3,
          "title": "GOOGL US Equity"
      },
      {
          "percentage": 3,
          "title": "T US Equity"
      },
      {
          "percentage": 3,
          "title": "JNJ US Equity"
      },
      {
          "percentage": 40,
          "title": "IEAC LN Equity"
      },
      {
          "percentage": 3,
          "title": "INTC US Equity"
      },
      {
          "percentage": 3,
          "title": "CSCO US Equity"
      },
      {
          "percentage": 3,
          "title": "KO US Equity"
      },
      {
          "percentage": 3,
          "title": "MSFT US Equity"
      },
      {
          "percentage": 3,
          "title": "AAPL US Equity"
      },
      {
          "percentage": 3,
          "title": "VZ US Equity"
      },
      {
          "percentage": 3,
          "title": "WMT US Equity"
      },
      {
          "percentage": 3,
          "title": "AMZN US Equity"
      },
      {
          "percentage": 3,
          "title": "CVX US Equity"
      }
  ]
    return (
        <View style={styles.container} >
          <View style={styles.header}>
            <Text>The Creative Thinking Index</Text>
          </View>
          <View style={styles.header}>
            <Text >
              The “Creative Thinking EUR TR/ER Index” is designed to measure the performance of a basket of global stocks whose latest 
              research & development expenditure to net sales is above 20%. The components of the Index are selected according to a set 
              of liquidity constraints following a proprietary algorithm. The 20 stocks with the highest market capitalization among the 
              screened stocks are selected.
            </Text>
          </View>
            <ScrollView>
              <LegalDocument
                onPress={(val)=>{this.setState({infoModal:true,val})}}
                data={test}
                icon={true}
                text={true}
                headingMainTitle='Index Composition'
                headingTitle='Weight'
                stylePadding={{padding:3}}
              />
            </ScrollView>
            <Modal 
                swipeToClose={false} 
                style={[styles.modal3]} 
                ref={"modal3"} 
                position={"center"} 
                onClosed={()=>{this.setState({infoModal:false})}} 
                isOpen={this.state.infoModal}
                > 
                    <View style={{flex:1,borderWidth:1, marginTop:10}}>
                        <View style={{marginTop:-10,backgroundColor:'white',width:Layout.Window.width * 0.3,marginLeft:5,borderWidth:1,justifyContent:'center',alignItems:'center'}} >
                            <Text style={{marginTop:-2}} >
                                {this.state.val !== null ? this.state.val.title :null}
                            </Text>
                        </View>
                        <Text style={{padding:10}}>
                            Workday Inc. provides entreprise cloud-based applications. The company offers human5%
                            capital, spend, and financial management, as
                            well as payroll, initiatives and higher education
                            the company WORKDAY INC Workday Inc. provides entreprise cloud-based
                            solutions. Workday serves the finance,
                            healthcare, manufacturing, education, and
                            technology industries worldwide.
                        </Text>
                    </View>
                </Modal>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 15,
    backgroundColor: '#fff',
  },
  header:{
    padding:15,
    borderTopWidth:1
  },
  modal3: {
    // borderRadius:10,
    height: 240,
    width: Layout.Window.width * 0.72
  },
});
