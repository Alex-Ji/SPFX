import * as React from 'react';
import { ICarouselIndicatorItem } from '../ICarouselFrameProps';
import './carouselIndicatorItem.css';
export default class carouselIndicatorItem extends React.Component<ICarouselIndicatorItem, any> {
    constructor(props: ICarouselIndicatorItem, state: any) {
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