// src/server.ts
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());           // Security headers
app.use(cors());             // Enable CORS
app.use(express.json());     // Parse JSON bodies

// Example route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from ts-node-app!');
});

// Global error handler
app.use((err: any, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
