import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements'

import Form from '../../common/FormGenerator/FormGenerator'

const PersonalDiet = () => {
    return (
        <View style={[styles.max, styles.center]}>
            <Card
                title={`Your plan`}
                containerStyle={[styles.card]}
            >
                <Form
                    fields={[
                        {
                            name: 'lowValue',
                            placeholder: 'Low value (70-90 mg/dL)'
                        },
                        {
                            name: 'fastInsluinType',
                            placeholder: 'High value (150-180 mg/dL)'
                        },
                        {
                            name: 'slowInsulinType',
                            placeholder: 'Slow insulin type'
                        },
                        {
                            name: 'debuteYear',
                            placeholder: 'Debute year of diabetes'
                        },
                        {
                            name: 'knowProblems',
                            placeholder: 'Any known problems?'
                        }
                    ]}
                    submitText='Save'
                    onSubmitPressed={() => {}}
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

export default PersonalDiet;