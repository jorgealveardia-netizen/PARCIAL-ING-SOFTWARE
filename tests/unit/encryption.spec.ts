import { EncryptionService } from '../../src/services/encryptionService';

describe('EncryptionService', () => {
    let encryptionService: EncryptionService;

    beforeEach(() => {
        encryptionService = new EncryptionService();
    });

    it('should encrypt data correctly', () => {
        const data = 'test data';
        const encryptedData = encryptionService.encrypt(data);
        expect(encryptedData).not.toEqual(data);
        expect(encryptionService.decrypt(encryptedData)).toEqual(data);
    });

    it('should decrypt data correctly', () => {
        const data = 'test data';
        const encryptedData = encryptionService.encrypt(data);
        const decryptedData = encryptionService.decrypt(encryptedData);
        expect(decryptedData).toEqual(data);
    });

    it('should throw an error when decrypting invalid data', () => {
        expect(() => encryptionService.decrypt('invalid data')).toThrowError();
    });
});