import React, { PureComponent, Fragment } from 'react';
import { STORY_CHANGED } from '@storybook/core-events';
import { API } from '@storybook/api';

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
    api.on('hehe', this.onHehe);
    api.on('cccc', console.log);
  }

  onHehe = (e: any) => {
    // console.log(e);
  }

  componentWillUnmount() {
    const { api } = this.props;
    api.off('hehe', this.onHehe);
  }
  render() {
    
    return <div>HELLO STROY</div>;
  }
}
