
import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign'

const PatientDetails = () => {
    let [user, setUser] = useState({})

    useEffect(() => {
    }, [])

    return (
        <View style={[styles.max, styles.center]}>
            <Card
                title={`Andrei Maximilian`}
                containerStyle={[styles.card]}
            >
               
            </Card>
        </View>
    );
}


const styles = StyleSheet.create({
    max: {
        width: '100%',
        height: '100%'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        width: '95%',
        height: '95%',
        marginTop: 0
    }
})


export default PatientDetails;