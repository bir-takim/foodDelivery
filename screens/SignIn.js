import React, { useState, useEffect, isValidElement, Component } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated,
    TextInput
} from "react-native";
import { connect } from 'react-redux';
import { icons, COLORS, SIZES, FONTS, images } from '../constants';
import { PhoneHeight, PhoneWidth } from '../constants/config';

// import { REGISTER } from 'redux-persist/es/constants';
// import { NavigationContainer } from '@react-navigation/native';
import { signInClicked,phoneChange, passwordChange } from '../actions/authAction';
class SignIn extends Component {
    constructor(props) {
        super(props);
      }

  onSignIn = () => {this.props.signInClicked(this.props.phoneValue, this.props.passwordValue)}
  onPhoneChange = (value) => this.props.phoneChange(value)
  onPasswordChange = (value) => this.props.passwordChange(value)
  componentDidUpdate = () =>{
    if(this.props.isMainLogin == true){
      this.props.navigation.navigate('Tabs',this.props.userData)
    }
  }

render() {
    console.log("ismainlogin", this.props.userData);
  const {  authSpinnerStatus } = this.props;
    return(
        <SafeAreaView style = {styles.container}>
        <View style = {{flex: 1 , alignItems:'center', justifyContent:'center'}}>
        <Image
            style = {{width:'30%', height:'15%', marginBottom: '20%', resizeMode:'contain'}}
            source = {images.loginPng}
        />
        <TextInput
            onChangeText={(value) => this.onPhoneChange(value)}
            keyboardType="numeric"
            placeholderTextColor={COLORS.primary}
            placeholder="Phone"
            style = {styles.inputs}
        />
        <TextInput
            secureTextEntry
            onChangeText={(value) => this.onPasswordChange(value)}
            placeholderTextColor={COLORS.primary}
            placeholder="Password"
            style = {styles.inputs}
        />
        <TouchableOpacity
            onPress={() => this.onSignIn()}
            style = {styles.loginBtn}
        >
            <Text style = {{ color: COLORS.primary, fontWeight: 'bold', fontSize: 15}}>
                Sign In
            </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
            style = {styles.forget}
            onPress={this.props.navigation.navigate('SignUp')}
        >
            <Text style = {{ color: COLORS.primary, fontWeight: 'bold', fontSize: 15}}>
                Sign up for free!
            </Text>
        </TouchableOpacity> */}
    </View>
    </SafeAreaView>
    )
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray3
    },
    inputs:{
        fontWeight:'bold',
        fontSize: 15,
        shadowColor: "#f32",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

        textAlign:'center',
        textDecorationLine:'red',
        width:'70%',
        marginBottom:'5%',
        borderRadius:20
    },
    loginBtn:{
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

        alignItems: 'center',
        justifyContent: 'center',

        width:'50%',
        height:'7%',
        borderRadius:20
    },
    forget:{
        marginTop: PhoneHeight*0.1,
        width: PhoneWidth * 0.5,
        alignSelf:'flex-end'
    }
})
const mapStateToProps = (state) => {
    const { phoneValue, passwordValue, isMainLogin, authSpinnerStatus, userData} = state.authReducer;
    return {
        phoneValue,
        passwordValue,
        isMainLogin,
        authSpinnerStatus,
        userData
    }
  }
export default connect(
    mapStateToProps,
    {
      signInClicked,
      phoneChange,
      passwordChange,
      
    }
)(SignIn)