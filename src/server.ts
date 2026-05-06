import express from 'express';
import { setRoutes } from './routes/index';
import { requestInterceptor } from './middleware/requestInterceptor';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for request interception
app.use(requestInterceptor);

// Set up API routes
setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});