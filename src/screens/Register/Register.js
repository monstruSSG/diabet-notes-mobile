import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux'

import * as USER from '../../store/actions/user'
import Form from '../../common/FormGenerator/FormGenerator'
import * as USER_REQUESTS from '../../requests/user'

const Register = props => {

    return (
        <View style={[styles.center, styles.container]}>
            <View style={[styles.formContainer]}>
                <Form
                    scrollable
                    fields={[
                        {
                            name: 'username',
                            placeholder: 'Username...'
                        },
                        {
                            name: 'firstName',
                            placeholder: 'First name...'
                        },
                        {
                            name: 'lastName',
                            placeholder: 'Last name...'
                        },
                        {
                            name: 'phoneNumber',
                            placeholder: 'Phone number...'
                        },
                        {
                            name: 'email',
                            placeholder: 'Email...'
                        },
                        {
                            name: 'password',
                            placeholder: 'Password...'
                        },
                        {
                            name: 'confirmPassword',
                            placeholder: 'Confirm password...'
                        }
                    ]}
                    submitText='Register'
                    onSubmitPressed={async data => {
                        await USER_REQUESTS.register({ ...data })

                        return props.navigation.navigate('Login')
                    }}
                />
            </View>
        </View>
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
        height: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapDispatchToProps = dispatch => ({
    register: user => dispatch(USER_REQUESTS.register(user))
});

export default connect(null, mapDispatchToProps)(Register);
