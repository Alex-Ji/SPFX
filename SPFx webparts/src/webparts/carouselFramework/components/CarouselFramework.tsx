import * as React from 'react';
import { ICarouselFrameworkProps } from './ICarouselFrameworkProps';
import styles from './CarouselFramework.module.scss';
import CarouselFrame from '../../Components/Carousel/CarouselFrame/CarouselFrame';
export default class CarouselFramework extends React.Component<ICarouselFrameworkProps, {}> {
  public render(): React.ReactElement<ICarouselFrameworkProps> {
    return <CarouselFrame uniqueId={this.props.uniqueId}
      indicatorsContent={this.props.Indicators}
      innerContent={this.props.ContentItems}
      hasCarouselControl={true}
      interval={this.props.Interval} />;
  }
}
