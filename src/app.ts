// src/app.ts
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { errorHandler } from './common/middleware/error.middleware';

const app: Application = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/users', (req: Request, res: Response) => {
    // Return dummy users array for testing
    res.status(200).json([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ]);
});

// Global error handler
app.use(errorHandler);

export default app;
