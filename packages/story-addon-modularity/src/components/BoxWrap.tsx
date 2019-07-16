import React, {Component} from 'react';

interface Props {
    html: string;
}
export default class BoxWrap extends Component<Props> {
    render() {
        return <div dangerouslySetInnerHTML={{
            __html: this.props.html
        }}></div>
    }
}