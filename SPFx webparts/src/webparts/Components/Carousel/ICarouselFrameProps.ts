export interface ICarouselFrameProps {
    innerContent: React.ReactElement<any>[] | null;
    indicatorsContent: React.ReactElement<any>[] | null;
    hasCarouselControl: boolean;//left right button
    interval: number;
    uniqueId: string; //Give different value when two or more Carousels are in the same page
}

export interface ICarouselIndicatorItem {
    isActive: boolean;
}