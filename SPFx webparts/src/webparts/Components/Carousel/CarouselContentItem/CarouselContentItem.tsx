import * as React from 'react';
import styles from './CarouselContentItem.module.scss';
export interface IcarouselContentItem {
    src: string;
}

export default class carouselContentItem extends React.Component<IcarouselContentItem, any> {
    constructor(props: IcarouselContentItem, state: any) {
        super(props);
    }

    public render(): React.ReactElement<any> {
        return <img className={styles.img} src={this.props.src} />;
    }
}