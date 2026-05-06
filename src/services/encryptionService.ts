import crypto from 'crypto';
import { config } from '../config';
import { Record } from '../models/record';

export class EncryptionService {
    private algorithm: string;
    private key: Buffer;

    constructor() {
        this.algorithm = config.encryptionAlgorithm;
        this.key = Buffer.from(config.encryptionKey, 'hex');
    }

    encrypt(data: string): string {
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);
        let encrypted = cipher.update(data, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return iv.toString('hex') + ':' + encrypted;
    }

    decrypt(encryptedData: string): string {
        const parts = encryptedData.split(':');
        const iv = Buffer.from(parts.shift()!, 'hex');
        const encryptedText = Buffer.from(parts.join(':'), 'hex');
        const decipher = crypto.createDecipheriv(this.algorithm, this.key, iv);
        let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }

    generateRecord(data: string): Record {
        const encryptedData = this.encrypt(data);
        return new Record(encryptedData, new Date());
    }
}