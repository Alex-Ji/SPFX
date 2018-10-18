import * as React from 'react';
import styles from './CarouselFramework.module.scss';
import { ICarouselFrameworkProps } from './ICarouselFrameworkProps';
import { escape } from '@microsoft/sp-lodash-subset';

import CarouselFrame from '../../Components/Carousel/CarouselFrame/CarouselFrame';
export default class CarouselFramework extends React.Component<ICarouselFrameworkProps, {}> {
  public render(): React.ReactElement<ICarouselFrameworkProps> {
    return <div >
      <CarouselFrame IdKey={this.props.IdKey} indicatorsContent={this.props.Indicators} innerContent={this.props.ContentItems} hasCarouselControl={true} interval={3000} />
    </div>;

  }
}
