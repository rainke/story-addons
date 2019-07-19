import React, { Component } from 'react';
import Container from './Container';
import './row.css';

interface GridProps {
  cols: number[]
}
export default class Grid extends Component<GridProps> {
  render() {
    return <div className="row">
      {
        this.props.cols.map((col, idx) => {
          return <Container key={idx} col={col} accept="button"/>
        })
      }
    </div>;
  }
}
