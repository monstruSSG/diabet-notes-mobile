import React, { useState } from 'react';
import { Overlay, Text } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

const Modal = props => (
    <View>
        <Overlay isVisible={props.visible} onBackdropPress={props.onClose} overlayStyle={[styles.center, props.size ? props.size : styles.max]}>
            {props.children}
        </Overlay>
    </View>
);

const styles = StyleSheet.create({
    max: {
        width: '90%',
        height: '90%'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    }
})

export default Modal;