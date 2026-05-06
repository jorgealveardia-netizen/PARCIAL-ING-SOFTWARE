import { config } from 'dotenv';

config();

const appConfig = {
    encryptionAlgorithm: process.env.ENCRYPTION_ALGORITHM || 'aes-256-cbc',
    encryptionKey: process.env.ENCRYPTION_KEY || '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef', // 64 hex chars for aes-256
    auditLogPath: process.env.AUDIT_LOG_PATH || './logs/audit.log',
    apiVersion: process.env.API_VERSION || 'v1',
    requestTimeout: parseInt(process.env.REQUEST_TIMEOUT || '5000'),
};

export default appConfig;