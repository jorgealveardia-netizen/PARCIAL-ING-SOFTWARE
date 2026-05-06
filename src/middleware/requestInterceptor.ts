import { Request, Response, NextFunction } from 'express';
import { EncryptionService } from '../services/encryptionService';
import { AuditService } from '../services/auditService';

const encryptionService = new EncryptionService();
const auditService = new AuditService();

export const requestInterceptor = (req: Request, res: Response, next: NextFunction) => {
    // Encrypt the request body
    const encryptedBody = encryptionService.encrypt(req.body);
    req.body = encryptedBody;

    // Log the request details
    const logRecord = {
        method: req.method,
        url: req.originalUrl,
        timestamp: new Date().toISOString(),
        encryptedBody: encryptedBody,
    };
    auditService.logRequest(logRecord);

    next();
};