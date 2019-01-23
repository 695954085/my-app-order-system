import * as React from 'react';
import { connect } from 'react-redux';
import ProductComponent from '../../components/main/ProductComponent';

const ProductContainer = () => <ProductComponent />;

export default connect()(ProductContainer);
