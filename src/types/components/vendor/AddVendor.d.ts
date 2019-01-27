import { FormComponentProps } from 'antd/lib/form';

export interface AddVendorProps extends FormComponentProps {
  onSubmit: (params: Vendor) => void;
}

export interface Vendor {
  vend_id?: string;
  vend_name?: string;
  vend_address?: string;
  vend_city?: string;
  vend_state?: string;
  vend_zip?: string;
  vend_country?: string;
}
