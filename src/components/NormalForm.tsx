import { Button, Checkbox, Form, Icon, Input } from 'antd';
import * as React from 'react';
import { PropTypes } from '../types/components/NormalLoginForm';
import './Login.less';

class NormalLoginForm extends React.Component<PropTypes> {
  public constructor(props: PropTypes) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        console.log(err);
      }
      const { userName, password } = values;
      this.props.onSubmit({
        password,
        userName,
      });
    });
  }

  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className='login-form'>
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Username'
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='password'
              placeholder='Password'
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            initialValue: true,
            valuePropName: 'checked',
          })(<Checkbox>Remember me</Checkbox>)}
          <a className='login-form-forgot' href=''>
            Forgot password
          </a>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            Log in
          </Button>
          Or <a href=''>register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

export default NormalLoginForm;
