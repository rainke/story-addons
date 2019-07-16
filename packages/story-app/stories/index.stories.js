import { storiesOf } from '@storybook/html';
import { addons, types } from '@storybook/addons';
import {withModular, box} from 'story-addon-modularity'

storiesOf('Button', module)
//   .addDecorator(withModular({f: 'f'}))
  .addDecorator(box)
  .add('with text', () => '<button class="btn">Hello World</button>', {foo: 'bar'})
  .add('with emoji', () => {
    const button = document.createElement('button');
    button.innerText = '😀 😎 👍 💯';
    return button;
  });
