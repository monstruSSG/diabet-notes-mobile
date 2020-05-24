import React, { useRef } from 'react';
import { Input } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

let styles = StyleSheet.create({
    container: {
        width: '100%'
    }
})

let FormInput = props => {
    return (
        <View style={[styles.container, { ...props.styles }]}>
            <Input
                placeholder={props.placeholder}
                onChangeText={props.onChange}
                value={props.defaultValue ? props.defaultValue : null}
                {...props}
            />
        </View>
    )
}

export default FormInput;