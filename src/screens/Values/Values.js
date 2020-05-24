import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, ListItem, Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

import * as VALUES_REQUESTS from '../../requests/values';
import CreateModal from './Create/Create';

const LOW = 80
const HIGH = 180

const Values = () => {
    let [showCreate, setShowCreate] = useState(false)
    let [values, setValues] = useState([])
    let [count, setCount] = useState(0)

    let onSubmitHandler = async data => {
        await VALUES_REQUESTS.create(data)
        await getValues()
        setShowCreate(false)
    }

    let getValues = async () => {
        let { values, count } = await VALUES_REQUESTS.get()

        setValues(values)
        setCount(count)
    }

    useEffect(() => {
        getValues()
    }, [])

    return (
        <View style={[styles.max, styles.center]}>
            <CreateModal
                visible={showCreate}
                onClose={() => setShowCreate(false)}
                onSubmit={onSubmitHandler}
            />
            <Card
                title={`${count} values`}
                containerStyle={[styles.card]}
            >
                <ScrollView style={[styles.max, { height: '80%' }]}>
                    {values.map((item, index) => {
                        let value = item.value || 0
                        let color = '#00600f'

                        if (value < LOW) color = '#f4511e'
                        else if(value > HIGH) color = '#fdd835'

                        return <ListItem
                            key={index}
                            title={`${item.value || '-'} mg/dL`}
                            subtitle={item.comment}
                            bottomDivider
                            rightTitle={`${item.fastInsulin}/${item.slowInsulin}`}
                            rightSubtitle="Rapida/Lenta"
                            badge={{ badgeStyle: { backgroundColor: color } }}

                        />
                    })}
                </ScrollView>
                <Button icon={
                    <Icon
                        name="plus"
                        size={20}
                        color="white"
                    />
                }
                    title='Add value'
                    onPress={() => setShowCreate(true)}
                />

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

export default Values;