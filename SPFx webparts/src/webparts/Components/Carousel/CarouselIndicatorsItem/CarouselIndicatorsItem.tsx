import * as React from 'react';
import { ICarouselIndicatorsItem } from '../ICarouselFrameProps';
import './carouselIndicatorsItem.css';
export default class carouselIndicatorsItem extends React.Component<ICarouselIndicatorsItem, any> {
    constructor(props: ICarouselIndicatorsItem, state: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        if (this.props.isActive) {
            return (React.createElement('li', { className: 'acsCarouselIndicatorsItem' + ' ' + 'active', ...this.props }, null));
        }
        else {
            return (React.createElement('li', { className: 'acsCarouselIndicatorsItem', ...this.props }, null));
        }
    }
}