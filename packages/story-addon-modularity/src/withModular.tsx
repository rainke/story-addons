import addons, { makeDecorator } from '@storybook/addons';
import React from 'react';
import { render } from 'react-dom';
import BoxWrap from './components/BoxWrap';
import Dashboard from './components/Dashboard';
import { DASHBOARD_STORY_NAME, PARAM_KEY } from './util/const';

const box = document.createElement('div');
let isRendered = false;

export const withModular = makeDecorator({
  name: 'withModular',
  parameterName: PARAM_KEY,
  skipIfNoParametersOrOptions: false,
  allowDeprecatedUsage: true,
  wrapper: (getStory, context, { options, parameters }) => {
    const story = getStory(context);
    if (parameters && parameters.dashboard) {
      if(isRendered) return box;
      const htmlStr = typeof story === 'string' ? story : story.outerHTML;
      render(<Dashboard html={htmlStr} />, box, () => {
        isRendered = true;
      });
      return box;
    } else {
      return story;
    }
  }
});
