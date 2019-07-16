import React, { PureComponent, Fragment } from 'react';
import { STORY_CHANGED } from '@storybook/core-events';
import { API } from '@storybook/api';
import {CLICK} from '../const';

interface PannelProps {
  api: API;
  active: boolean;
}
export default class Pannel extends PureComponent<PannelProps> {

  componentDidMount() {
    const { api } = this.props;
    api.on(STORY_CHANGED, (e) => {
      // console.log(e);
    });
    api.on(CLICK, this.clickCallback);
  }

  clickCallback = (data: any) => {
    console.log(data);
  }

  componentWillUnmount() {
    const { api } = this.props;
  }
  render() {
    
    return <div>HELLO STROY</div>;
  }
}
