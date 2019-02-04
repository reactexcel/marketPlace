import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import { WebBrowser } from 'expo';
import { connect } from 'react-redux';
import Layout from '../constants/Layout';
import { MonoText } from '../components/StyledText';
import { GraphView } from '../components/GraphView';
import { Analysis } from '../components/Analysis';
import { RiskIndicator } from '../components/RiskIndicator';
import { LegalDocument } from '../components/LegalDocument';
import Modal from 'react-native-modalbox';
import {openInvestModel} from '../redux/action';
import {CustomButton} from '../components/Button';


class GeneralInformation extends React.Component {
  static navigationOptions = {
    header:null
  };
  constructor(){
    super()
    this.state = {
      graphYear:0,
      riskSelected:0, 
    }
  }

  render() {
    const data = [{
      title:'Final Terms',
      percentage:'11%'
    },{
        title:'KIID English',
        percentage:'12%'
    }]
    return (
      <View>
      <ScrollView>
        <View style={{flex:1}}>
          <View style={{padding:Layout.lPadding}}>
            <GraphView
              graphYear={this.state.graphYear}
              onPress={(i)=>{this.setState({graphYear:i})}}
            />
            <Analysis
            />
            <RiskIndicator
              onPressRisk={(id)=>{this.setState({riskSelected:id})}}
              selected={this.state.riskSelected}
            />
          </View>
            <LegalDocument
              data={data}
              onPress={()=>{}}
              icon={false}
              text={false}
              headingMainTitle='Legal Documents'
              headingTitle=''
              stylePadding={{padding:10}}
            />
        </View>
        
      </ScrollView>
      <Modal 
          swipeToClose={false} 
          style={[styles.modal3]} 
          ref={"modal3"} 
          position={"center"} 
          onClosed={()=>{this.props.openInvestModel(false)}} 
          isOpen={this.props.modal}
          > 
            <View style={{flex:1,justifyContent:'space-between'}}>
              <View style={{padding:Layout.sPadding}}>
                <Text style={styles.modalTitle}>Invest in Creative Thinking</Text>
                <Text style={{textAlign:'center', marginTop:Layout.sPadding}}>
                  Choose the amount you want to invest...
                </Text>
              </View>
              <View style={{alignSelf:'flex-end'}}>
                <View style={{flexDirection:'row'}}>
                    <CustomButton
                      buttonStyle={{width:Layout.Window.width*0.325, borderRadius:5}}
                      title='Invest'
                      textStyle={{textAlign:'center'}}
                      onPress={()=>{this.props.openInvestModel(false)}}>
                      Disable
                    </CustomButton>
                    <CustomButton
                      buttonStyle={{width:Layout.Window.width*0.325, borderRadius:5}}
                      title='Cancel'
                      textStyle={{textAlign:'center'}}
                      onPress={()=>{this.props.openInvestModel(false)}}>
                      Disable
                    </CustomButton>
                </View>
              </View>
            </View>
        </Modal>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  modal3: {
    borderRadius:10,
    height: 200,
    width: Layout.Window.width * 0.65
  },
  modalTitle: {
    textAlign:'center',
    fontSize:15,
    fontWeight:'700'
  }
});

const mapStateToProps = (state) => {
  return {
      modal: state.navigation.general.isOpenModal
  }
}

export default connect(mapStateToProps,{openInvestModel})(GeneralInformation);