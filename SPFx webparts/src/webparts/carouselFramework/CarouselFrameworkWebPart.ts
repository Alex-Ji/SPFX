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
import carouselIndicatorsItem from '../Components/Carousel/CarouselIndicatorItem/CarouselIndicatorItem'
export interface ICarouselFrameworkWebPartProps {
  description: string;
}

export default class CarouselFrameworkWebPart extends BaseClientSideWebPart<ICarouselFrameworkWebPartProps> {

  private contentItems: React.ReactElement<any>[] = new Array();
  private indicatorItems: React.ReactElement<any>[] = new Array();
  public render(): void {
    this.loaddata();
    const element: React.ReactElement<ICarouselFrameworkProps> = React.createElement(
      CarouselFramework,
      {
        IdKey: "acs-carousel-" + this.properties.description,
        ContentItems: this.contentItems,
        Indicators: this.indicatorItems,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  private loaddata() {
    if (this.contentItems.length == 0) {
      this.contentItems.push(React.createElement(carouselContentItem, { key: 1, src: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3923287780,3552075167&fm=173&app=49&f=JPEG?w=218&h=146&s=D48249B6408194BECE99B01303000061" }, null));
      this.contentItems.push(React.createElement(carouselContentItem, { key: 2, src: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3985052971,2625248377&fm=173&app=49&f=JPEG?w=218&h=146&s=590989573E2442035F0430E503008022" }, null));
      this.contentItems.push(React.createElement(carouselContentItem, { key: 3, src: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=489305077,849989083&fm=173&app=49&f=JPEG?w=218&h=146&s=CF1804C5449331D20FA091200300E052" }, null));
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
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
