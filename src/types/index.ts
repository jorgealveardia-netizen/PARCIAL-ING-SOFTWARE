export interface LogRecord {
    id: string;
    timestamp: Date;
    requestData: string;
    encryptedData: string;
    userId: string;
}

export interface EncryptedRequest {
    data: string;
    encryptionMethod: string;
}

export interface AuditEntry {
    recordId: string;
    action: string;
    userId: string;
    timestamp: Date;
}

export interface EncryptionConfig {
    algorithm: string;
    key: string;
    iv: string;
}