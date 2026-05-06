import express from 'express';
import path from 'path';
import { setRoutes } from './routes/index';
import { requestInterceptor } from './middleware/requestInterceptor';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Middleware for request interception
app.use(requestInterceptor);

// Set up API routes
setRoutes(app);

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});