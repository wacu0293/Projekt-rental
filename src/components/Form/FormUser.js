import React, { useState } from 'react';
import { Button, Form, Input, Divider } from 'antd';


const FormUser = ({title, buttonTitle}) => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;

  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: { span: 14, offset: 4 },
        }
      : null;

  return (
    <>
    <Divider style={{margin: 0, marginBottom:'20px'}}>{title}</Divider>
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      onValuesChange={onFormLayoutChange}
    >
      <Form.Item label="Imię">
        <Input placeholder="Imię" />
      </Form.Item>
      <Form.Item label="Nazwisko">
        <Input placeholder="Nazwisko" />
      </Form.Item>
      <Form.Item label="Godzina">
        <Input placeholder="Godzina" />
      </Form.Item>
      <Form.Item label="Nr tel">
        <Input placeholder="Nr tel" />
      </Form.Item>
      <Form.Item label="PESEL">
        <Input placeholder="PESEL" />
      </Form.Item>
      <Form.Item label="Id sprzętu">
        <Input placeholder="Id sprzętu" />
      </Form.Item>
      <Form.Item label="Cena za godzinę">
        <Input placeholder="Cena za godzinę" />
      </Form.Item>
      <Form.Item {...buttonItemLayout} style={{textAlign:'right'}}>
        <Button style={{textAlign:'right'}} type="primary">{buttonTitle}</Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default FormUser;