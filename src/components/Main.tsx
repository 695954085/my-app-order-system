import { Layout, Menu } from 'antd';
import * as React from 'react';
import { Route } from 'react-router';
import ServiceTypes from '../constants/ServiceTypes';
import { MainContainerOwnProps as MainComponentOwnProps } from '../types/containers/MainContainer';
const { Header, Content, Footer } = Layout;

export default class Main extends React.Component<
  MainComponentOwnProps,
  MainComponentState
> {
  public state = {
    current: 'vendor',
  };

  public constructor(props: MainComponentOwnProps) {
    super(props);
  }

  public handleClick = (e: any) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
    // Redirection
    // 1. get the serviceType
    const serviceType = ServiceTypes.filter((value) => {
      if (value.key === e.key) {
        return true;
      }
      return false;
    }).pop();
    // 2. Determine if the serviceType exists
    if (serviceType) {
      // 3. get the path and redirect
      const path = serviceType.path;
      this.props.history.push(path);
    }
  }

  public render() {
    return (
      <Layout>
        <Header>
          <div className='logo' />
          <Menu
            theme='dark'
            mode='horizontal'
            selectedKeys={[this.state.current]}
            style={{ lineHeight: '64px' }}
          >
            {ServiceTypes.map((value) => (
              <Menu.Item key={value.key}>{value.serviceName}</Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content>
          {ServiceTypes.map((value, index) => (
            <Route exact path={value.path} component={value.component} key={`route_${index}`}/>
          ))}
        </Content>
        <Footer />
      </Layout>
    );
  }
}
