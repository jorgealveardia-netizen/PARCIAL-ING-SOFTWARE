import express from 'express';
import { json } from 'body-parser';
import requestInterceptor from './middleware/requestInterceptor';
import setRoutes from './routes/index';

const app = express();

// Middleware configuration
app.use(json());
app.use(requestInterceptor);

// Set up routes
setRoutes(app);

export default app;