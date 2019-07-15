import { addons, types } from '@storybook/addons';
import * as React from 'react';

addons.register('m', api => {
    addons.addPanel('m/panel', {
        title: '设置',
        render() {
            return <div>hello</div>
        }
    });
});
