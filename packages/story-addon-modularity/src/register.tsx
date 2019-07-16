import { addons, types } from '@storybook/addons';
import * as React from 'react';
import Pannel from './components/Pannel';

addons.register('m', api => {
    addons.addPanel('m/panel', {
        title: '设置',
        render({active ,key}) {
            return <Pannel api={api} key={key} active={active}/>
        },
        //@ts-ignore
        paramKey: 'modular'
    });
});
