import { Form, Layout, notification, Spin } from 'antd';
import PropTypes from 'prop-types';
import * as React from 'react';
import { PropTypes as P } from '../types/components/NormalLoginForm';
import NormalLoginForm from './NormalForm';
const { Header, Content, Footer } = Layout;

const WrapperNormalLoginForm = Form.create({
  mapPropsToFields(props: P) {
    return {
      onSubmit: Form.createFormField(props.onSubmit),
    };
  },
})(NormalLoginForm);

class Login extends React.Component<LoginPropTypes> {
  public static propTypes = {
    error: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  public render() {
    const errorMessage = this.props.error;
    if (errorMessage) {
      notification.open({
        description: errorMessage,
        message: 'Notification Title',
      });
    }
    return (
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Content>
            <Spin spinning={this.props.isFetching}>
              <WrapperNormalLoginForm onSubmit={this.props.onSubmit} />
            </Spin>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default Login;
