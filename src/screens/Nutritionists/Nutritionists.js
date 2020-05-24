import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign'

import * as NUTRITIONISTS_REQUESTS from '../../requests/nutritionits'

import Presentation from './Presentation/Presentation'

const Nutritionists = () => {
    let [showPresentation, setShowPresentation] = useState(false)
    let [nutritionists, setNutritionists] = useState([])
    let [count, setCount] = useState(0)
    let [selectedUserId, setSelectedUserId] = useState(null)

    let getNutritionists = () => NUTRITIONISTS_REQUESTS.get()
        .then(data => {
            setCount(data.count)
            setNutritionists(data.users)
        })

    useEffect(() => {
        getNutritionists()
    }, [])


    return (
        <View style={[styles.max, styles.center]}>
            <Presentation
                visible={showPresentation}
                userId={selectedUserId}
                onClose={() => { setShowPresentation(false); setSelectedUserId(null) }}
            />
            <Card
                title={`${count} nutritionists`}
                containerStyle={[styles.card]}
            >
                <ScrollView style={[styles.max, { height: '90%' }]}>
                    {nutritionists.map((l, i) => (
                        <ListItem
                            key={i}
                            leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
                            title={`${l.firstName} ${l.lastName}`}
                            subtitle={l.clinicName}
                            bottomDivider
                            rightTitle={l.city}
                            rightSubtitle={l.region}
                            rightIcon={<Icon
                                name="right"
                                size={25}
                            />}
                            onPress={() => {
                                setSelectedUserId(l._id)
                                setShowPresentation(true)
                            }}
                        />
                    ))}
                </ScrollView>
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

export default Nutritionists;