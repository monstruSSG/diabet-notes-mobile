import React, { useState, useEffect } from 'react'
import { Button } from 'react-native-elements'
import CommuityImagePicker from 'react-native-image-picker'

let ImagePicker = props => {
    let [source, setSource] = useState(null)
    let options = {
        title: 'Select Image',
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    }

    useEffect(() => {
        options = { ...props.options }

    }, [props.options])

    return (
        <Button
            title={props.title ? props.title : "Select Image"}
            onPress={() => {
                CommuityImagePicker.showImagePicker(options, (response) => {
                    console.log('Response = ', response);

                    if (response.didCancel) {
                        console.log('User cancelled image picker');
                    } else if (response.error) {
                        console.log('ImagePicker Error: ', response.error);
                    } else if (response.customButton) {
                        console.log('User tapped custom button: ', response.customButton);
                    } else {
                        const source = { uri: response.uri };

                        // You can also display the image using data:
                        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                        setSource(uri)
                    }
                })
            }}
        />
    )
}

export default ImagePicker;
