import addons, { makeDecorator } from '@storybook/addons';
import React from 'react';
import {render} from 'react-dom';
import BoxWrap from './components/BoxWrap';
import Dashboard from './components/Dashboard';
import { DASHBOARD_STORY_NAME, PARAM_KEY } from './const';

export const box = (storyFn: Function) => {
    const div = document.createElement('div');
    const html = storyFn();
    const htmlStr = typeof html === 'string' ? html: html.outerHTML;
    render(<BoxWrap html={htmlStr}></BoxWrap>, div);
    return div;
}

export const withModular = makeDecorator({
    name: 'withModular',
    parameterName: PARAM_KEY,
    skipIfNoParametersOrOptions: false,
    allowDeprecatedUsage: true,
    wrapper: (getStory, context, {options, parameters}) => {
      const story =  getStory(context)
      if(parameters && parameters.dashboard) {
        const box = document.createElement('div');
        const htmlStr = typeof story === 'string' ? story: story.outerHTML;
        render(<Dashboard html={htmlStr}></Dashboard>, box);
        return box;
      } else {
        return story;
      }
    }
  });

function getContex() {
    const channel = addons.getChannel();
    // @ts-ignore
    const clientApi = window.__STORYBOOK_CLIENT_API__;
    return {
        clientApi,
        channel
    }
}
