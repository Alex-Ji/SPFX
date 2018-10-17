import * as React from 'react';

export interface IcarouselContentItem {

}


export default class carouselContentItem extends React.Component<IcarouselContentItem, any> {
    constructor(props: IcarouselContentItem, state: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return React.createElement('div', null, null);
    }
}