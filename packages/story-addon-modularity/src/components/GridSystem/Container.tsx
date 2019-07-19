import React, { Component } from 'react';
import Row from './Row';
import { getStorybook, getStoryFormHTML } from '../../util';
import BoxWrap from '../BoxWrap';
import './Container.css';

interface ContainerProps {
  accept?: string;
  col?: number;
  root?: boolean;
}

interface ContainerState {
  rows: { kind: string; name: string }[];
}

export default class Container extends Component<ContainerProps> {
  static defaultPorps = {
    root: false
  };

  state: ContainerState = {
    rows: []
  };
  onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const dataTransfer = e.dataTransfer;
    const html = dataTransfer.getData('text/html');
    const { kind, name } = getStoryFormHTML(html);
    if (this.props.accept) {
      if (kind !== this.props.accept) {
        return;
      }
    }

    const { rows } = this.state;
    rows.push({ kind, name });
    this.setState({ rows });
  };

  onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  render() {
    const { root, col } = this.props;
    let cls = '';
    if (root) {
      cls = 'container';
    } else if (col) {
      cls = `col-${col}`;
    }
    const { rows } = this.state;
    const storybook = getStorybook();

    const Rows = root
      ? rows.map((row, idx) => {
          const cols = row.name
            .split(/\s+/)
            .map(s => Number(s))
            .filter(n => Boolean(n));
          return <Row key={idx} cols={cols} />;
        })
      : rows.map((row, idx) => {
          const kind = storybook.find(book => row.kind === book.kind);
          const story = kind.stories.find(story => story.name === row.name);
          let html = story.render();
          if (html instanceof HTMLElement) {
            html = html.outerHTML;
          }
          return <BoxWrap html={html} key={idx} />;
        });

    return (
      <div className={cls} onDragOver={this.onDragOver} onDrop={this.onDrop}>
        {Rows}
      </div>
    );
  }
}
