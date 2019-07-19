import React from 'react';
import Axios from 'axios';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';

export default class PersonList extends React.Component {
  state = {
    persons: [],
    columns: [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'userName',
        dataIndex: 'user',
        key: 'user',
      },
      {
        title: 'title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Action',
        key: 'action',
        render: e => (
          <div>
            <Link exact="true" to={`/news/${e.id}`}>
              <Button type="primary">View Comments</Button>
            </Link>
          </div>
        ),
      },
    ],
  };

  async componentDidMount() {
    const res = await Axios.get(`https://api.hnpwa.com/v0/news/1.json`);
    const data = res.data;
    const mutable = data.map((it, index) => ({ ...it, key: index + 1 }));
    this.setState({ persons: mutable });
  }

  render() {
    return (
      <Table columns={this.state.columns} dataSource={this.state.persons} />
    );
  }
}
