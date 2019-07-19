import React, { Component } from 'react';

class UserComments extends Component {
  render() {
    if (this.props.comment.length === 0) {
      return <div class="out_comment">NO Comment</div>;
    }
    return (
      <div>
        <span>
          {this.props.comment.map(it => (
            <div style={{ color: '#000' }} key={it.id}>
              {it.content}
            </div>
          ))}
        </span>
      </div>
    );
  }
}

export default UserComments;
