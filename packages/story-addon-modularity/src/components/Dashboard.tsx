import React, { Component } from 'react';
import { Container } from './GridSystem';
import { getStorybook, getStoryFormHTML } from '../util';

interface Props {
  html: string;
}

interface DashboardState {
  stories: string[];
}

export default class Dashboard extends Component<Props, DashboardState> {
  state: DashboardState = {
    stories: []
  };

  componentDidMount() {
    console.log(getStorybook());
  }

  render() {
    return (
      <div className="story-dashboard">
        <Container root accept="grid"/>
      </div>
    );
  }
}
