class ImmutableStore {
    private records: Map<string, any>;

    constructor() {
        this.records = new Map();
    }

    public addRecord(id: string, record: any): void {
        if (this.records.has(id)) {
            throw new Error('Record with this ID already exists. ImmutableStore does not allow overwriting.');
        }
        this.records.set(id, Object.freeze(record));
    }

    public getRecord(id: string): any | undefined {
        return this.records.get(id);
    }

    public getAllRecords(): Array<any> {
        return Array.from(this.records.values());
    }
}

export default ImmutableStore;