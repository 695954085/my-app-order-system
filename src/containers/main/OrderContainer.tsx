import * as React from 'react';
import { connect } from 'react-redux';
import OrderComponent from '../../components/main/OrderComponent';

const OrderContainer = () => (
  <OrderComponent/>
);

export default connect()(OrderContainer);
