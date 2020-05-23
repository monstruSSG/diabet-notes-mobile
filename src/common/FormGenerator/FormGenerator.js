import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import Input from './Input/Input';

let FormGenerator = props => {
    let [formFieldsData, setFormFieldsData] = useState([])

    useEffect(() => {
        setFormFieldsData([...props.fields])
    }, [props.fields])

    let onInputChange = (name, value) => {
        let newFormFields = [...formFieldsData];

        let inputIndex = newFormFields.findIndex(field => field.name === name);

        if(inputIndex < 0) return;

        newFormFields[inputIndex].value = value;

        setFormFieldsData(newFormFields)
    }

    let onSubmit = () => {
        let data = {}

        formFieldsData.forEach(field => data[field.name] = field.value)

        return data
    }

    return (
        <View style={[styles.container]}>
            {formFieldsData.map((field, index) => <Input
                key={index}
                onChange={value => onInputChange(field.name, value)}
                name={field.name}
                value={field.value}
                placeholder={field.placeholder}
            />)}
            <Button
                title={props.submitText}
                onPress={() => props.onSubmitPressed(onSubmit())}
            />
        </View>
    )
}

let styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FormGenerator;