import { Button, Col, notification, Row, Spin } from 'antd';
import * as React from 'react';
import { fetchVendorData, requestAddVendor } from '../../api';
import { Vendor } from '../../types/components/vendor/AddVendor';
import AddVendor from './vendor/AddVendor';
import ShowVendorData from './vendor/ShowVendorData';
export default class VendorComponent extends React.Component {
  public state = {
    isLoading: false,
    showAddVendor: false,
  };

  // show AddVendor component
  public handleAddVendor = (e: any) => {
    this.setState({
      showAddVendor: true,
    });
  }

  // show Notification about vendor
  public showNotification(message: string) {
    notification.open({
      description: message,
      message: 'add Vendor',
    });
  }

  public handleAddVendorSubmit = (params: Vendor) => {
    this.setState({
      isLoading: true,
    });
    requestAddVendor(params)
      .then((response) => response.data)
      .then((responseData) => {
        const { type, data } = responseData;
        if (type === 'vendor_already_exists') {
          this.showNotification(type);
        } else if (type === 'vendor_created_success') {
          this.showNotification(data);
        }
      })
      .catch((err) => {
        this.showNotification(err.response.data.error);
      })
      .finally(() => {
        this.setState({
          isLoading: false,
          showAddVendor: false,
        });
      });
  }

  public handleVendor = (cb: any) => {
    fetchVendorData()
      .then((response) => response.data)
      .then((responseData) => {
        const { type, data } = responseData;
        if (type === 'vendor_query_success') {
          cb(data);
        } else if (type === 'vendor_query_fail') {
          this.showNotification(data);
        }
      })
      .catch((err) => {
        this.showNotification(err.response.data.error);
      });
  }

  public render() {
    let component;
    if (this.state.showAddVendor) {
      component = <AddVendor onSubmit={this.handleAddVendorSubmit} />;
    } else {
      component = <ShowVendorData fetchData={this.handleVendor} />;
    }
    return (
      <div>
        <Spin spinning={this.state.isLoading}>
          <Row>
            <Col span={24}>
              <Button type='primary' onClick={this.handleAddVendor}>
                add Vendor
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={24}>{component}</Col>
          </Row>
        </Spin>
      </div>
    );
  }
}
