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
                    placeholder: '103 mg/dL'
                },
                {
                    name: 'comment',
                    placeholder: 'I eat more then I should have eaten'
                },
                {
                    name: 'slowInsulin',
                    placeholder: 'Slow insulin'
                },
                {
                    name: 'fastInsulin',
                    placeholder: 'Fast insulin'
                }
            ]}
            submitText='Add'
            onSubmitPressed={props.onSubmit}
        />
    </Modal>
);

export default Create;