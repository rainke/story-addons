import addons from '@storybook/addons';
import {TStroybook} from '../types'

export function getStoryFormHTML(html: string) {
    const tmp = document.createElement('template');
    tmp.innerHTML = html;
    const {content} = tmp;
    const name = content.querySelector('a').title;
    const id = content.querySelector('.sidebar-item').id;
    const kind = id.split('--')[0];
    return {name, kind};
}

export function getContext() {
    const channel = addons.getChannel();
    // @ts-ignore
    const clientApi = window.__STORYBOOK_CLIENT_API__;
    return {
        clientApi,
        channel
    }
}

export function getStorybook(): TStroybook {
    const {clientApi} = getContext();
    return clientApi.getStorybook();
}