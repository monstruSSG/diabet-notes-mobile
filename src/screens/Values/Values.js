import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

let items = [
    {
        name: '100 mg/dL',
        subtitle: 'Am mancat mai mult'
    }, {
        name: '100 mg/dL',
        subtitle: 'Am alergat si nu am facut corectie'
    }, {
        name: '100 mg/dL',
        subtitle: 'Am alergat si nu am facut corectie'
    }, {
        name: '100 mg/dL',
        subtitle: 'Am alergat si nu am facut corectie'
    }, {
        name: '100 mg/dL',
        subtitle: 'Am alergat si nu am facut corectie'
    }, {
        name: '100 mg/dL',
        subtitle: 'Am alergat si nu am facut corectie'
    },
    {
        name: '100 mg/dL',
        subtitle: 'Am mancat mai mult'
    }, {
        name: '100 mg/dL',
        subtitle: 'Am alergat si nu am facut corectie'
    }, {
        name: '100 mg/dL',
        subtitle: 'Am alergat si nu am facut corectie'
    }, {
        name: '100 mg/dL',
        subtitle: 'Am alergat si nu am facut corectie'
    }, {
        name: '100 mg/dL',
        subtitle: 'Am alergat si nu am facut corectie'
    }, {
        name: '100 mg/dL',
        subtitle: 'Am alergat si nu am facut corectie'
    },
    {
        name: '100 mg/dL',
        subtitle: 'Am mancat mai mult'
    }, {
        name: '100 mg/dL',
        subtitle: 'Am alergat si nu am facut corectie'
    }, {
        name: '100 mg/dL',
        subtitle: 'Am alergat si nu am facut corectie'
    }, {
        name: '100 mg/dL',
        subtitle: 'Am alergat si nu am facut corectie'
    }, {
        name: '100 mg/dL',
        subtitle: 'Am alergat si nu am facut corectie'
    }, {
        name: '100 mg/dL',
        subtitle: 'Am alergat si nu am facut corectie'
    },
]

const Values = () => {


    return (
        <View style={[styles.max, styles.center]}>
            <Card
                containerStyle={[styles.card]}
            >
                <ScrollView style={[styles.max, { height: '90%' }]}>
                    {items.map((item, index) => <ListItem
                        key={index}
                        title={item.name}
                        subtitle={item.subtitle}
                        bottomDivider
                        rightTitle="30/45"
                        rightSubtitle="Rapida/Lenta"
                        badge={{ badgeStyle: { backgroundColor: '#f4511e' } }}

                    />)}
                </ScrollView>
                <Button icon={<Icon
                    name="plus"
                    size={20}
                    color="white"
                />} 
                title='Add value' 
                onPress={() => props.navigation.navigate('Values')} />

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