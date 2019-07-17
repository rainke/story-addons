import { addons, types } from '@storybook/addons';
import * as React from 'react';
import Pannel from './components/Pannel';
import {PARAM_KEY, ADDON_ID, PANNEL_ID} from './const';

addons.register(ADDON_ID, api => {
    addons.addPanel(PANNEL_ID, {
        title: '设置',
        render({active ,key}) {
            return <Pannel api={api} key={key} active={active}/>
        },
        //@ts-ignore
        paramKey: PARAM_KEY
    });
});
