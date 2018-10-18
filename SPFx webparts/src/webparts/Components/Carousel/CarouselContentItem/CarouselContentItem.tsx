import * as React from 'react';

export interface IcarouselContentItem {
    src: string
}

export default class carouselContentItem extends React.Component<IcarouselContentItem, any> {
    constructor(props: IcarouselContentItem, state: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return <img src={this.props.src} />;
    }
}