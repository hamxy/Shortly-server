import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import database from './helpers/mongodb.js';
import cors from 'cors';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());


// Routers
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Loads .env file contents into process.env
dotenv.config()

// Connect to database
database()


export default app;
