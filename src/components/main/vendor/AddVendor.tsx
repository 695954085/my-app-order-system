import { Button, Cascader, Form, Input } from 'antd';
import * as React from 'react';
import { AddVendorProps, Vendor } from '../../../types/components/vendor/AddVendor';

const residences = [
  {
    children: [
      {
        children: [
          {
            label: 'West Lake',
            value: 'xihu',
          },
        ],
        label: 'Hangzhou',
        value: 'hangzhou',
      },
    ],
    label: 'zhejiang',
    value: 'ZJ',
  },
  {
    children: [
      {
        children: [
          {
            label: 'zhonghuaman',
            value: 'Zhong Hua Men',
          },
        ],
        label: 'Nanjing',
        value: 'nanjing',
      },
    ],
    label: 'Jiangu',
    value: 'JS',
  },
];

class AddVendor extends React.Component<AddVendorProps> {
  public handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const params: Vendor = {};
        params.vend_name = values.vend_name;
        params.vend_address = values.vend_address;
        const provinceAndCity = values.vend_city;
        params.vend_state = provinceAndCity[0];
        params.vend_city = provinceAndCity[1];
        params.vend_zip = values.vend_zip;
        params.vend_country = 'china';
        this.props.onSubmit(params);
      }
    });
  }

  public render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        sm: { span: 8 },
        xs: { span: 24 },
      },
      wrapperCol: {
        sm: { span: 16 },
        xs: { span: 24 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        sm: {
          offset: 8,
          span: 16,
        },
        xs: {
          offset: 0,
          span: 24,
        },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item {...formItemLayout} label='vend_name'>
          {getFieldDecorator('vend_name', {
            rules: [
              {
                message: 'Please input vendor name',
                required: true,
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label='vend_address'>
          {getFieldDecorator('vend_address', {
            rules: [
              {
                message: 'Please input vendor address',
                required: true,
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label='vend_city'>
          {getFieldDecorator('vend_city', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [
              {
                message: 'Please select vendor city !',
                required: true,
                type: 'array',
              },
            ],
          })(<Cascader options={residences} />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label='vend_zip'>
          {getFieldDecorator('vend_zip', {
            rules: [{ required: true, message: 'Please input vendor zip!' }],
          })(<Input />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit'>
            Add Vendor
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrapperAddVendor = Form.create({
  mapPropsToFields(props: any) {
    return {
      onSubmit: Form.createFormField(props.onSubmit),
    };
  },
})(AddVendor);
export default WrapperAddVendor;
