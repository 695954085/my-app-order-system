import { Table } from 'antd';
import * as React from 'react';
const columns = [
  {
    dataIndex: 'vend_id',
    key: 'vend_id',
    render: (text: any) => <span>{text}</span>,
    title: 'ID',
  },
  {
    dataIndex: 'vend_name',
    key: 'vend_name',
    render: (text: any) => <span>{text}</span>,
    title: 'NAME',
  },
  {
    dataIndex: 'vend_address',
    key: 'vend_address',
    render: (text: any) => <span>{text}</span>,
    title: 'ADDRESS',
  },
  {
    dataIndex: 'vend_city',
    key: 'vend_city',
    render: (text: any) => <span>{text}</span>,
    title: 'CITY',
  },
  {
    dataIndex: 'vend_state',
    key: 'vend_state',
    render: (text: any) => <span>{text}</span>,
    title: 'STATE',
  },
  {
    dataIndex: 'vend_zip',
    key: 'vend_zip',
    render: (text: any) => <span>{text}</span>,
    title: 'ZIP',
  },
];

export default class ShowVendorData extends React.Component<ShowVendorProps> {
  public state = {
    dataSource: [],
  };

  public componentWillMount() {
    this.props.fetchData((dataSource) => {
      this.setState({
        dataSource,
      });
    });
  }

  public render() {
    return (
      <Table
        dataSource={this.state.dataSource}
        columns={columns}
        rowKey={(record: any) => record.vend_name}
      />
    );
  }
}
