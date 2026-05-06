import request from 'supertest';
import app from '../../src/app';
import { EncryptionService } from '../../src/services/encryptionService';
import { AuditService } from '../../src/services/auditService';

jest.mock('../../src/services/encryptionService');
jest.mock('../../src/services/auditService');

describe('Middleware: Request Interceptor', () => {
    let encryptionService: EncryptionService;
    let auditService: AuditService;

    beforeEach(() => {
        encryptionService = new EncryptionService();
        auditService = new AuditService();
    });

    it('should encrypt request data and log the request', async () => {
        const mockEncrypt = jest.spyOn(encryptionService, 'encrypt').mockReturnValue('encryptedData');
        const mockLog = jest.spyOn(auditService, 'logRequest').mockImplementation(() => Promise.resolve());

        const response = await request(app)
            .post('/api/test')
            .send({ data: 'testData' });

        expect(mockEncrypt).toHaveBeenCalledWith({ data: 'testData' });
        expect(mockLog).toHaveBeenCalledWith(expect.any(Object)); // Check if logRequest is called with a log object
        expect(response.status).toBe(200);
    });

    it('should handle errors during encryption', async () => {
        jest.spyOn(encryptionService, 'encrypt').mockImplementation(() => { throw new Error('Encryption error'); });

        const response = await request(app)
            .post('/api/test')
            .send({ data: 'testData' });

        expect(response.status).toBe(500);
        expect(response.body.message).toBe('Encryption error');
    });

    it('should handle errors during logging', async () => {
        const mockEncrypt = jest.spyOn(encryptionService, 'encrypt').mockReturnValue('encryptedData');
        jest.spyOn(auditService, 'logRequest').mockImplementation(() => { throw new Error('Logging error'); });

        const response = await request(app)
            .post('/api/test')
            .send({ data: 'testData' });

        expect(mockEncrypt).toHaveBeenCalled();
        expect(response.status).toBe(500);
        expect(response.body.message).toBe('Logging error');
    });
});