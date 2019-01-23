import CustomerContainer from '../containers/main/CustomerContainer';
import OrderContainer from '../containers/main/OrderContainer';
import ProductContiner from '../containers/main/ProductContiner';
import VendorContainer from '../containers/main/VendorContainer';

const SERVICES: ServiceType[] = [
  {
    component: VendorContainer,
    key: 'vendor',
    path: '/vendor',
    serviceName: '管理供应商',
  },
  {
    component: ProductContiner,
    key: 'product',
    path: '/product',
    serviceName: '管理产品目录',
  },
  {
    component: CustomerContainer,
    key: 'customer',
    path: '/customer',
    serviceName: '管理顾客列表',
  },
  {
    component: OrderContainer,
    key: 'order',
    path: '/order',
    serviceName: '录入顾客订单',
  },
];

export default SERVICES;
