import * as React from 'react';
import { connect } from 'react-redux';
import CustomerComponent from '../../components/main/CustomerComponent';

const CustomerContainer = () => (
  <CustomerComponent/>
);

export default connect()(CustomerContainer);
