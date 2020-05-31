import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-elements'

import Modal from './Modal'

let Alert = props => {

    return (
        <Modal visible={props.visible} size={{ ...styles.size }}>
            <View style={[styles.center, styles.max]}>
                <Text h3>{props.title}</Text>
                <View style={[styles.text]}>
                    <Text h4 h4Style={{ textAlign: 'center', fontSize: 20 }}>{props.content}</Text>
                </View>
                <Button title={props.buttonTitle} onPress={props.onButtonPress}/>
            </View>
        </Modal>
    )
}

let styles = StyleSheet.create({
    size: {
        width: '70%',
        height: '60%'
    },
    center: {
        display: 'flex',
        alignItems: 'center'
    },
    max: {
        width: '100%',
        height: '100%'
    },
    text: {
        height: '77%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
})

export default Alert;