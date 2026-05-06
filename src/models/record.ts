export class Record {
    constructor(
        public id: string,
        public timestamp: Date,
        public requestData: string,
        public encryptedResponse: string,
        public userId: string,
        public status: string
    ) {}
}