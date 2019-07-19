import React, { Component } from 'react';
import Axios from 'axios';
import { Button } from 'antd';
import UserComments from './UserComments';
class ProfileComments extends Component {
  state = {
    comments: [],
  };
  async componentDidMount() {
    const res = await Axios.get(
      `https://api.hnpwa.com/v0/item/${this.props.match.params.id}.json`
    );
    const data = res.data;
    const mutable = data.comments.map((it, index) => ({
      ...it,
      key: index + 1,
    }));
    this.setState({ comments: mutable });
  }
  render() {
    return (
      <div>
        <Button onClick={() => window.history.back()}>Back</Button>
        <ul>
          {this.state.comments.map(it => (
            <li style={{ color: 'blue' }} key={it.id}>
              User: <strong style={{ color: 'red' }}>{it.user}</strong>
              comments
              <span>
                <UserComments comment={it.comments} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProfileComments;
