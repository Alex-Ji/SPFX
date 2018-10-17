export interface ICarouselFrameProps {
    innerContent: React.ReactElement<any>[] | null;
    indicatorsContent: React.ReactElement<any>[] | null;
    hasCarouselControl: boolean;
    interval: number;
}

export interface ICarouselIndicatorsItem {
    isActive: boolean;
}