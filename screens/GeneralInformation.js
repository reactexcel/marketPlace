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
      disableModal:false
    }
  }
  // componentWillReceiveProps(nextProps){
  //   console.log(nextProps,this.props,"check");
    
  //   if(this.props.modal !== nextProps.modal){
  //     this.refs.modal3.open()
  //   }
  // }
  handleButton (){
    this.setState({disableModal:!this.state.disableModal})
    this.props.openInvestModel(false)
  }
  render() {
    return (
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
          <LegalDocument/>
        </View>
        <Modal style={[styles.modal, styles.modal3]} ref={"modal3"} position={"center"}  isDisabled={this.state.disableModal}>
          <Text>Modal centered</Text>
          <CustomButton onPress={()=>{this.handleButton}} >Disable</CustomButton>
        </Modal>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal3: {
    height: 300,
    width: 300
  },
});

const mapStateToProps = (state) => {
  console.log(state,"condition");
  return {
      model: state.navigation
  }
}

export default connect(mapStateToProps,{openInvestModel})(GeneralInformation);