
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign'

import * as USER_REQUESTS from '../../requests/user'

import ImagePicker from '../../common/ImagePicker'

const Ranking = () => {
    let [user, setUser] = useState({})

    useEffect(() => {
        USER_REQUESTS.getMe().then(setUser)
    }, [])

    let makeAppointment = async () => {
        let result = await USER_REQUESTS.makeAppointment()

        console.log(result, 'RESULT AICI')

        return true
    }

    return (
        <View style={[styles.max, styles.center]}>
            <Card
                title={`Reminders`}
                containerStyle={[styles.card]}
            >
                {user && !user.nutritionist ? <ListItem
                    leftIcon={
                        <Icon
                            name="exclamation"
                            size={35}
                        />
                    }
                    title='Select a nutritionist'
                    subtitle='In order to get the most out of DiabetNotes select a nutritionist'
                    bottomDivider /> : null}
                <ListItem
                    leftIcon={
                        <Icon
                            name="profile"
                            size={35}
                        />
                    }
                    rightIcon={
                        <Icon
                            name="exclamation"
                            size={35}
                        />
                    }
                    title='Analysis'
                    subtitle='This month you have to take the blood test'
                    bottomDivider />
                <ListItem
                    leftIcon={
                        <Icon
                            name="inbox"
                            size={35}
                        />
                    }
                    rightIcon={
                        <Icon
                            name="right"
                            size={35}
                        />
                    }
                    title='Last analyses'
                    subtitle='Add and see previous analyses'
                    bottomDivider />
                <ListItem
                    leftIcon={
                        <Icon
                            name="phone"
                            size={35}
                        />
                    }
                    rightIcon={
                        <Icon
                            name="right"
                            size={35}
                        />
                    }
                    title='Appointment'
                    subtitle='Dont`t forgate to make an appointment for the nutritionist'
                    bottomDivider
                    onPress={() => makeAppointment()}
                />
                <ListItem
                    leftIcon={
                        <Icon
                            name="phone"
                            size={35}
                        />
                    }
                    rightIcon={
                        <Icon
                            name="right"
                            size={35}
                        />
                    }
                    title='Call nutritionist'
                    subtitle='You can call your nutritionist in case of any emergency'
                    bottomDivider
                    onPress={() => Linking.openURL(`tel:${user.nutritionist.phoneNumber || ''}`)}
                />
                {/* {user && user.nutritionist ? <ListItem
                    leftIcon={
                        <Icon
                            name="woman"
                            size={35}
                        />
                    }
                    rightIcon={
                        <Icon
                            name="right"
                            size={35}
                        />
                    }
                    title={`Doctor ${user.nutritionist.firstName || ''} ${user.nutritionist.lastName || ''}`}
                    subtitle={`${user.nutritionist.country || ''} ${user.nutritionist.city || ''} ${user.nutritionist.region || ''}`}
                    bottomDivider /> : null} */}
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


export default Ranking;