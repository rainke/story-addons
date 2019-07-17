import React, {Component} from 'react';

interface Props {
  html: string;
}

export default class Dashboard extends Component<Props> {

  onDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log({...e});
    const dataTransfer = e.dataTransfer;
    console.log(...dataTransfer.types);
    const data0 = e.dataTransfer.getData("text/plain");
    const data1 = e.dataTransfer.getData("text/uri-list");
    const data2 = e.dataTransfer.getData("text/html");
    console.log(data0, '---------------------', data1,'===================', data2);
  }

  onDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }
  render() {
    const box = <div />;
    return React.cloneElement(box, {
      onDrop: this.onDrop,
      onDragOver:this.onDragOver,
      style: {
        height: 600,
        background: '#eee'
      }
    });
  }
}