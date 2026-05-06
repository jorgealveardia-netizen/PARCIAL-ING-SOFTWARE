import { config } from 'dotenv';

config();

const appConfig = {
    encryptionKey: process.env.ENCRYPTION_KEY || 'default_encryption_key',
    auditLogPath: process.env.AUDIT_LOG_PATH || './logs/audit.log',
    apiVersion: process.env.API_VERSION || 'v1',
    requestTimeout: parseInt(process.env.REQUEST_TIMEOUT) || 5000,
};

export default appConfig;