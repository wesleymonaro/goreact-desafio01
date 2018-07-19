import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import '../assets/styles/style.scss';

import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        userPhoto: 'https://randomuser.me/api/portraits/women/50.jpg',
        userName: 'Deann Russell',
        postTime: 'há 3 min',
        postText: `Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere
        vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis
        pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere
        posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris
        molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam
        interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum.
        Etiam nisi ante, consectetur eget placerat a, tempus a neque. Donec ut elit urna. Etiam
        venenatis eleifend urna eget scelerisque. Aliquam in nunc quis dui sollicitudin ornare ac vitae
        lectus.`,
      },
      {
        id: 2,
        userPhoto: 'https://randomuser.me/api/portraits/men/47.jpg',
        userName: 'Leslie Daniels',
        postTime: 'há 10 min',
        postText: `Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere
        vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis
        pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere
        posuere, rutrum eu ipsum. `,
      },
      {
        id: 3,
        userPhoto: 'https://randomuser.me/api/portraits/women/80.jpg',
        userName: 'Sue Curtis',
        postTime: 'há 20 min',
        postText: `Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere
        vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis
        pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere
        posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris
        molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam
        interdum dolor aliquet dolor sollicitudin fermentum.`,
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <Fragment>
        <Header title="RocketBook" />
        {posts.map(post => <Post data={post} key={post.id} />)}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
