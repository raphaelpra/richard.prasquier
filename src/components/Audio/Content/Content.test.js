// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import Content from './Content';

describe('Content', () => {
  it('renders correctly', () => {
    const props = {
      title: 'test',
      body: '<p>test</p>',
      audioUrl: 'https://www.dropbox.com/s/gwxxoei8t7r5blo/2019-05-21%20Ph.%20VAL.mp3?dl=1'
    };

    const tree = renderer.create(<Content {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
