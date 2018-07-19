import React from 'react';

import '../../assets/styles/style.scss';

const PostHeader = props => (
  <div className="post-header">
    <img src={props.data.userPhoto} alt={props.data.userName} className="user-avatar" />
    <div className="user-info-box">
      <span className="user-name">
        {props.data.userName}
      </span>
      <span className="post-time">
        {props.data.postTime}
      </span>
    </div>
  </div>
);

export default PostHeader;
