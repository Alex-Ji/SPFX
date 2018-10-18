import * as React from 'react';
import { ICarouselFrameProps } from '../ICarouselFrameProps';
import 'jquery';
var $: any = (window as any).$;
import './carousel.js';
import './carousel.css';

export interface ICarouselFrameState {
}

export default class CarouselFrame extends React.Component<ICarouselFrameProps, ICarouselFrameState> {
    private innerContent: React.ReactElement<any>[] = new Array();
    private indicatorsContent: React.ReactElement<any>[] = new Array();
    private targetId = '';
    constructor(props: ICarouselFrameProps, state: ICarouselFrameState) {
        super(props);
        this.targetId = "#" + this.props.uniqueId;
    }

    public componentDidMount() {
        if (this.props.interval > 0) {
            $(this.targetId).carousel({
                interval: (this.props.interval * 1000)
            });
        }
    }

    private _getCarouselIndicators() {
        this.indicatorsContent = new Array();
        this.props.indicatorsContent.forEach((item, index) => {
            if (index == 0) {
                this.indicatorsContent.push(React.cloneElement(item, { 'data-target': this.targetId, 'data-slide-to': index, isActive: true }));
            }
            else {
                this.indicatorsContent.push(React.cloneElement(item, { 'data-target': this.targetId, 'data-slide-to': index }));
            }
        });
    }

    private _getCarouselContent() {
        this.innerContent = new Array();
        this.props.innerContent.forEach((item, index) => {
            if (index == 0) {
                this.innerContent.push(React.createElement('div', { className: "item active" }, item));
            }
            else {
                this.innerContent.push(React.createElement('div', { className: "item" }, item));
            }
        });
    }

    public render(): React.ReactElement<any> {
        this._getCarouselIndicators();
        this._getCarouselContent();
        let carouselControls = new Array();
        if (this.props.hasCarouselControl) {
            carouselControls.push(React.createElement('a', { className: 'carousel-control left', href: this.targetId, 'data-slide': "prev" }, null));
            carouselControls.push(React.createElement('a', { className: 'carousel-control right', href: this.targetId, 'data-slide': "next" }, null));
            return React.createElement('div', { className: 'carousel slide', id: this.props.uniqueId, 'data-ride': 'carousel' },
                React.createElement('ol', { className: 'carousel-indicators' }, this.indicatorsContent),
                React.createElement('div', { className: 'carousel-inner', role: "listbox" }, this.innerContent),
                carouselControls);
        }
        else {
            return React.createElement('div', { className: 'carousel slide', id: this.props.uniqueId, 'data-ride': 'carousel' },
                React.createElement('ol', { className: 'carousel-indicators' }, this.indicatorsContent),
                React.createElement('div', { className: 'carousel-inner', role: "listbox" }, this.innerContent));
        }
    }
}