import * as React from 'react';
import { connect } from 'react-redux';
import VendorComponent from '../../components/main/VendorComponent';

const VendorContainer = () => <VendorComponent />;

export default connect()(VendorContainer);
