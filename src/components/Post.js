import React from 'react';

import '../../assets/styles/style.scss';
import PostHeader from './PostHeader';

const Post = props => (
  <article className="post-box">
    <PostHeader data={props.data} />
    <div className="separator" />
    <p className="post-text">
      {props.data.postText}
    </p>
  </article>
);

export default Post;
