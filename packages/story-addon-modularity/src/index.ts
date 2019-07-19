import addons, { makeDecorator } from '@storybook/addons';
import {getContext} from './util';

export * from './withModular';

export {DASHBOARD_STORY_NAME, PARAM_KEY} from './util/const';


const {clientApi} = getContext()

clientApi.storiesOf('grid', module)
    .add('12', () => '')
    .add('6 6', () => '')
    .add('4 4', () => '')
    .add('3 3 3 3', () => '')


