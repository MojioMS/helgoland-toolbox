export interface AxesOptions extends jquery.flot.axisOptions {
    uom?: string;
    internalIds?: string[];
    tsColors?: string[];
    timezone?: string;
    additionalWidth?: number;
    panRange?: boolean;
}