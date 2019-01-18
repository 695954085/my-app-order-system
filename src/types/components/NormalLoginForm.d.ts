import { FormComponentProps } from 'antd/lib/form/Form'

export interface PropTypes extends FormComponentProps {
  onSubmit: (params: LoginParams) => void;
}