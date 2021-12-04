import express, { Application } from 'express';
import authRoutes from './routes/auth';

const app: Application = express() // instance of express application
/* Settings */
app.set('port', 3000) // set the port to use in index

/* Routes */
app.use(authRoutes)

export default app;