import React from 'react';
import { View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Button, Text, SocialIcon } from 'react-native-elements';

import Form from '../../common/FormGenerator/FormGenerator'

const Login = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={[styles.container]}>
            <View style={[styles.center, { display: 'flex', height: '40%', justifyContent: 'flex-start' }]}>
                <Text h1 style={{ color: '#303f9f' }}>DiabetNotes</Text>
            </View>
            <View style={[styles.formContainer]}>
                <Form />
                <Text style={{ paddingTop: 20, paddingBottom: 20, color: '#bdbdbd' }}>--------------- OR ---------------</Text>
                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                />
                <SocialIcon
                    title='Sign In With Google'
                    button
                    type='google'
                />
            </View>
        </KeyboardAvoidingView>
    );
}

let styles = StyleSheet.create({
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '100%',
        height: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    formContainer: {
        width: '80%',
        height: '45%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Login;