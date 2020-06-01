import React from 'react';
import { View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux'

import Form from '../../common/FormGenerator/FormGenerator'
import * as LOGIN_REQUESTS from '../../requests/login'
import * as USER from '../../store/actions/user'

const Login = props => {

    const loginHandler = (email, password) => {
        return LOGIN_REQUESTS.login(email, password)
            .then(data => {
                console.log(props.signIn, 'AICI')
                props.signIn(data.token)
            })
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={[styles.container]}>
            <View style={[styles.center, { display: 'flex', height: '40%', justifyContent: 'flex-start' }]}>
                <Text h1 style={{ color: '#373737' }}>DiabetNotes</Text>
            </View>
            <View style={[styles.formContainer]}>
                <Form
                    fields={[
                        {
                            name: 'email',
                            placeholder: 'Email...'
                        },
                        {
                            name: 'password',
                            placeholder: 'Password...'
                        }
                    ]}
                    submitText='Sign in'
                    onSubmitPressed={({ email, password }) => loginHandler(email, password)}
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

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    signIn: token => dispatch(USER.signIn(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
