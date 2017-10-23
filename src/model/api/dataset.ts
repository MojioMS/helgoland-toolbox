import { Parameter } from './parameter';
import { Station } from './station';
import { DatasetTypes, PlatformTypes } from './enums';

export interface IDataset extends Parameter {
    url: string;
    uom: string;
    internalId: string;
    firstValue: FirstLastValue;
    lastValue: FirstLastValue;
    parameters: ParameterConstellation;
}

export class ParameterConstellation {
    public service: Parameter;
    public offering: Parameter;
    public feature: Parameter;
    public procedure: Parameter;
    public phenomenon: Parameter;
    public category: Parameter;
}

export class FirstLastValue {
    public timestamp: number;
    public value: number;
}

export class DatasetParameterConstellation extends ParameterConstellation {
    public platform: PlatformParameter;
}

export class Dataset extends Parameter implements IDataset {
    public url: string;
    public uom: string;
    public internalId: string;
    public firstValue: FirstLastValue;
    public lastValue: FirstLastValue;
    public datasetType: DatasetTypes;
    public parameters: DatasetParameterConstellation;
    public seriesParameters?: DatasetParameterConstellation;
}

export class Timeseries extends Parameter implements IDataset {
    public url: string;
    public uom: string;
    public internalId: string;
    public firstValue: FirstLastValue;
    public lastValue: FirstLastValue;
    public station: Station;
    public parameters: ParameterConstellation;
    public hasData = false;
}

export class PlatformParameter extends Parameter {
    public platformType: PlatformTypes;
}
