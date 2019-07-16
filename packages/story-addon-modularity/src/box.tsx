import React from 'react';
import {render} from 'react-dom';
import BoxWrap from './components/BoxWrap'

export const box = (storyFn: Function) => {
    const div = document.createElement('div');
    const html = storyFn();
    const htmlStr = typeof html === 'string' ? html: html.outerHTML;
    render(<BoxWrap html={htmlStr}></BoxWrap>, div);
    return div;
}
