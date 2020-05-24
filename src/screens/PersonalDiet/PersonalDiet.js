import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements'

import * as PLAN_REQUESTS from '../../requests/plan'

import Form from '../../common/FormGenerator/FormGenerator'

const PersonalDiet = () => {
    let [plan, setPlan] = useState({})
    let [fields, setFields] = useState([
        {
            name: 'lowValue',
            placeholder: 'Low value (70-90 mg/dL)',
            label: 'Minimum good value'
        },
        {
            name: 'highValue',
            placeholder: 'High value (150-180 mg/dL)',
            label: 'Maximum good value'
        },
        {
            name: 'slowInsulinType',
            placeholder: 'Slow insulin type',
            label: 'Slow insulin type'
        },
        {
            name: 'fastInsulinType',
            placeholder: 'Fast insulin type',
            label: 'Fast insulin type'
        },
        {
            name: 'debuteYear',
            placeholder: 'Debute year',
            label: 'Debute year'
        },
        {
            name: 'knownProblems',
            placeholder: 'Any known problems?',
            label: 'Known problem'
        }
    ])

    useEffect(() => {
        getPlan()
    }, [])

    let getPlan = () => PLAN_REQUESTS.get()
        .then(plan => {
            Object.keys(plan).forEach(key => {
                if(plan[key]) {
                    let fieldIndex = fields.findIndex(field => field.name === key)
                
                    if(fieldIndex > -1) { 
                        let newFields = [...fields]

                        newFields[fieldIndex].defaultValue = String(plan[key])

                        setFields(newFields)
                    }
                }
            })
        })

    let updatePlan = plan => PLAN_REQUESTS.update(plan)
        .then(getPlan)

    return (
        <View style={[styles.max, styles.center]}>
            <Card
                title={`Your plan`}
                containerStyle={[styles.card]}
            >
                <Form
                    scrollable
                    fields={fields}
                    submitText='Save'
                    onSubmitPressed={updatePlan}
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