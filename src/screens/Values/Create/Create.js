import React from 'react';

import Modal from '../../../common/Modal'
import Form from '../../../common/FormGenerator/FormGenerator'

const Create = props => (
    <Modal
        size={{ width: '90%', height: '70%' }}
        onClose={props.onClose}
        visible={props.visible}
    >
        <Form
            fields={[
                {
                    name: 'value',
                    placeholder: '103 mg/dL',
                    label: 'Value'
                },
                {
                    name: 'comment',
                    placeholder: 'I eat more then I should have eaten',
                    label: 'Comment'
                },
                {
                    name: 'slowInsulin',
                    placeholder: '10 units',
                    label: 'Slow insulin'
                },
                {
                    name: 'fastInsulin',
                    placeholder: '5 units',
                    label: 'Fast insluin'
                }
            ]}
            submitText='Add'
            onSubmitPressed={props.onSubmit}
        />
    </Modal>
);

export default Create;