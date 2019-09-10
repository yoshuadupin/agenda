import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';
import React from 'react';


const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class ContactForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 12 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 8,
                    offset: 0,
                },
                sm: {
                    span: 2,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '504',
        })(
            <Select style={{ width: 70 }}>
                <Option value="504">+504</Option>
                <Option value="1">+1</Option>
            </Select>,
        );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="Primer Nombre">
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Nombre es requerido!' }],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Segundo Nombre">
                    {getFieldDecorator('middlename', {
                        rules: [{ required: true, message: 'Segundo nombre es requerido!' }],
                    })(<Input />)}
                </Form.Item>

                <Form.Item label="Primer Apellido">
                    {getFieldDecorator('lastname', {
                        rules: [{ required: true, message: 'Primer apellido es requerido!' }],
                    })(<Input />)}
                </Form.Item>

                <Form.Item label="Segudo Apellido">
                    {getFieldDecorator('secondlastname', {
                        rules: [{ required: true, message: 'Segundo apellido es requerido!' }],
                    })(<Input />)}
                </Form.Item>

                <Form.Item label="Phone Number">
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Por favor introduzca el numero de telefono!' }],
                    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                     Agregar contacto
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedContactForm = Form.create({ name: 'register' })(ContactForm);

export default WrappedContactForm;