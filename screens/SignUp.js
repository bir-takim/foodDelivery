import React, { useState, useEffect, isValidElement } from 'react';
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
import { signInClicked, passwordChange, phoneChange, fullNameChange, emailChange, signUpClicked } from '../actions/authAction';

const SignUp = ({ route, navigation, phoneValue, passwordValue, fullNameValue, emailValue,  phoneChange, passwordChange, signInClicked, signUpClicked, isMainLogin, userData}) => {

function onSignUp(){
    signUpClicked(fullNameValue, phoneValue, emailValue, passwordValue)

}
    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                {/* Restaurant Name Section */}
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray3
                        }}
                    >
                        {/* <Text style={{ ...FONTS.h3 }}>{restaurant?.name}</Text> */}
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.list}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    function renderInputs(){
        return(
            <View style = {{flex: 1 , alignItems:'center', justifyContent:'center'}}>
                <Image
                    style = {{width:'30%', height:'15%', marginBottom: '10%', resizeMode:'contain'}}
                    source = {images.loginPng}
                />
                 <TextInput
                    onChangeText={(value) => fullNameChange(value)}
                    placeholderTextColor={COLORS.primary}
                    placeholder="Full Name"
                    style = {styles.inputs}
                />
                <TextInput
                    onChangeText={(value) => phoneChange(value)}
                    keyboardType="numeric"
                    placeholderTextColor={COLORS.primary}
                    placeholder="Phone"
                    style = {styles.inputs}
                />
                <TextInput
                    onChangeText={(value) => emailChange(value)}
                    placeholderTextColor={COLORS.primary}
                    placeholder="Email"
                    style = {styles.inputs}
                />
                <TextInput
                    secureTextEntry
                    onChangeText={(value) => passwordChange(value)}
                    placeholderTextColor={COLORS.primary}
                    placeholder="Password"
                    style = {styles.inputs}
                />
                <TouchableOpacity
                     onPress={() => onSignUp()}
                    style = {styles.loginBtn}
                >
                    <Text style = {{ color: COLORS.primary, fontWeight: 'bold', fontSize: 15}}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {/* {renderHeader()} */}
            {renderInputs()}
        </SafeAreaView>
    )
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
    }
})

const mapStateToProps = (state) => {
    const { phoneValue, passwordValue, fullNameValue, emailValue, isMainLogin, authSpinnerStatus, userData} = state.authReducer;
    return {
        phoneValue,
        passwordValue,
        fullNameValue,
        emailValue,
        isMainLogin,
        authSpinnerStatus,
        userData
    }
  }
  export default connect(
    mapStateToProps,
    {
      signInClicked,
      passwordChange,
      phoneChange,
      fullNameChange,
      emailChange,
      signUpClicked
    }
  )(SignUp)