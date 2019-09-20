import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class SignUp extends Component<{}> {

    goBack(){
        Actions.pop()
    }

    render(){
        return(
            <View style={styles.container}> 
                <Logo/>
                <Form type="SignUp"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account?</Text>
                    <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> SignIn</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        backgroundColor: '#455a64',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupTextCont : {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16
        
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    }
})