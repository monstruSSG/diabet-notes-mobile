import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import Input from './Input/Input';

let FormGenerator = props => {
    return (
        <View style={[styles.container]}>
            <Input
                onChange={value => alert(value)}
                name={'email'}
                placeholder='Email...'
            />
            <Input
                onChange={value => alert(value)}
                name={'passowrd'}
                placeholder='Password...'
            />
            <Button
                title="Sign in"
            />
        </View>
    )
}

let styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FormGenerator;