import { ImmutableStore } from '../repositories/immutableStore';
import { Record } from '../models/record';

export class AuditService {
    private store: ImmutableStore;

    constructor() {
        this.store = new ImmutableStore();
    }

    public logRequest(requestData: any): void {
        const record = new Record(requestData);
        this.store.save(record);
    }

    public getLogs(): Record[] {
        return this.store.getAll();
    }
}