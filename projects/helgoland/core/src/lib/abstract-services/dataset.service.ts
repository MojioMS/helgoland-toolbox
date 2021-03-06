import { DatasetOptions } from '../model/internal/options';

export abstract class DatasetService<T extends DatasetOptions | DatasetOptions[]> {

    public datasetIds: string[] = [];

    public datasetOptions: Map<string, T> = new Map();

    public addDataset(internalId: string, options?: T) {
        if (this.datasetIds.indexOf(internalId) < 0) {
            this.datasetIds.push(internalId);
            if (options) {
                this.datasetOptions.set(internalId, options);
            } else {
                this.datasetOptions.set(internalId, this.createStyles(internalId));
            }
            this.saveState();
        } else if (options instanceof Array) {
            const temp = (this.datasetOptions.get(internalId) as DatasetOptions[]);
            options.forEach((e) => temp.push(e));
            this.saveState();
        }
    }

    public removeAllDatasets() {
        this.datasetIds.length = 0;
        this.datasetOptions.clear();
        this.saveState();
    }

    public removeDataset(internalId: string) {
        const datasetIdx = this.datasetIds.indexOf(internalId);
        if (datasetIdx > -1) {
            this.datasetIds.splice(datasetIdx, 1);
            this.datasetOptions.delete(internalId);
        }
        this.saveState();
    }

    public hasDatasets(): boolean {
        return this.datasetIds.length > 0;
    }

    public updateDatasetOptions(options: T, internalId: string) {
        this.datasetOptions.set(internalId, options);
        this.saveState();
    }

    protected abstract createStyles(internalId: string): T;

    protected abstract saveState(): void;

    protected abstract loadState(): void;

}
