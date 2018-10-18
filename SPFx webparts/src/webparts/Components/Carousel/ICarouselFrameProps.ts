export interface ICarouselFrameProps {
    innerContent: React.ReactElement<any>[] | null;
    indicatorsContent: React.ReactElement<any>[] | null;
    hasCarouselControl: boolean;
    interval: number;
    IdKey: string;
}

export interface ICarouselIndicatorsItem {
    isActive: boolean;
}