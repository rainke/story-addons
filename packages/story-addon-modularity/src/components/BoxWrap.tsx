import React, { Component } from 'react';
import addons from '@storybook/addons';
import {CLICK} from '../const';

interface Props {
  html: string;
}
export default class BoxWrap extends Component<Props> {
  handleClick = () => {
    const ch = addons.getChannel();
    ch.emit(CLICK, 'aaaaa')
  }
  render() {
    return (
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: this.props.html
          }}
        />
        <span onClick={this.handleClick}>click</span>
      </div>
    );
  }
}
