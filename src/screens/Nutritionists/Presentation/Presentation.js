import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Image, ListItem, Button } from 'react-native-elements'

import Modal from '../../../common/Modal'
import * as NUTRITIONISTS_REQUESTS from '../../../requests/nutritionits'

let Presentation = props => {
    let [user, setUser] = useState({})

    useEffect(() => {
        if (props.userId) NUTRITIONISTS_REQUESTS.getById(props.userId)
            .then(user => setUser(user))
    }, [props.userId])

    return (
        <Modal
            size={[styles.container]}
            onClose={props.onClose}
            visible={props.visible}
        >
            <View style={[styles.photoContainer]}>
                <Image
                    source={{ uri: user.clinicImage || 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg' }}
                    style={styles.max}
                />
            </View>
            <View style={[styles.contentContainer]}>
                <ListItem
                    title={user.firstName ? `Doctor ${user.firstName} ${user.lastName}` : 'Doctor'}
                    subtitle={user.clinicName || 'Clinic'}
                    bottomDivider />
                <ListItem
                    title={`${user.country} ${user.region} ${user.city}`}
                    subtitle={`str. ${user.street || ''} nr. ${user.streetNumber || ''}`}
                    bottomDivider />
                <ListItem
                    title={user.email || ''}
                    subtitle={user.phoneNumber || ''}
                    bottomDivider />
                <Button
                    title={`Request ${user.firstName} manage you`}
                    onPress={props.onRequestPressed}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: '65%'
    },
    photoContainer: {
        width: '100%',
        height: '35%'
    },
    contentContainer: {
        width: '100%',
        height: '65%'
    },
    max: {
        width: '100%',
        height: '100%'
    }
})

export default Presentation;