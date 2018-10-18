import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'CarouselFrameworkWebPartStrings';
import CarouselFramework from './components/CarouselFramework';
import { ICarouselFrameworkProps } from './components/ICarouselFrameworkProps';
import carouselContentItem from '../Components/Carousel/CarouselContentItem/CarouselContentItem';
import carouselIndicatorsItem from '../Components/Carousel/CarouselIndicatorItem/CarouselIndicatorItem';
export interface ICarouselFrameworkWebPartProps {
  UniqueId: string;
  Interval: number;
}

const pa: any = require('../carouselFramework/assert/a.jpg');
const pb: any = require('../carouselFramework/assert/b.jpg');
const pc: any = require('../carouselFramework/assert/c.jpg');
export default class CarouselFrameworkWebPart extends BaseClientSideWebPart<ICarouselFrameworkWebPartProps> {

  private contentItems: React.ReactElement<any>[] = new Array();
  private indicatorItems: React.ReactElement<any>[] = new Array();
  public render(): void {
    this.loaddata();
    const element: React.ReactElement<ICarouselFrameworkProps> = React.createElement(
      CarouselFramework,
      {
        uniqueId: "acs-carousel-" + this.properties.UniqueId,
        ContentItems: this.contentItems,
        Indicators: this.indicatorItems,
        Interval: this.properties.Interval
      }
    );

    ReactDom.render(element, this.domElement);
  }

  private loaddata() {
    if (this.contentItems.length == 0) {
      this.contentItems.push(React.createElement(carouselContentItem, { key: 1, src: pa }, null));
      this.contentItems.push(React.createElement(carouselContentItem, { key: 2, src: pb }, null));
      this.contentItems.push(React.createElement(carouselContentItem, { key: 3, src: pc }, null));
      this.indicatorItems.push(React.createElement(
        carouselIndicatorsItem,
        null));
      this.indicatorItems.push(React.createElement(
        carouselIndicatorsItem,
        null));
      this.indicatorItems.push(React.createElement(
        carouselIndicatorsItem,
        null));
    }
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('UniqueId', {
                  label: strings.UniqueIdLabel,
                  description: "Give different value when two or more carousel are in the same page"
                }),
                PropertyPaneTextField('Interval', {
                  label: strings.IntervalLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
