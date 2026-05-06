import { Router } from 'express';
import ApiController from '../controllers/apiController';

const router = Router();
const apiController = new ApiController();

export function setRoutes(app) {
    app.use('/api', router);
    
    router.post('/encrypt', apiController.encryptData);
    router.post('/audit', apiController.logAudit);
    // Add more routes as needed
}