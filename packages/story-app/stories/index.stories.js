import { storiesOf } from '@storybook/html';
import { addons, types } from '@storybook/addons';
import {withModular, DASHBOARD_STORY_NAME, PARAM_KEY} from 'story-addon-modularity'
import './bootstrap.css';

storiesOf('button', module)
  .addDecorator(withModular({f: 'f'}))
  .add(DASHBOARD_STORY_NAME, () => '', {[PARAM_KEY]: {
    dashboard: true
  }})
  .add('with text', () => '<button class="btn">Hello World</button>', {foo: 'bar'})
  .add('with emoji', () => {
    const button = document.createElement('button');
    button.innerText = '😀 😎 👍 💯';
    return button;
  });
