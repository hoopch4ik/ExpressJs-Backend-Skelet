import { seregaRouter } from '@routes/seregaRouter';
import { siteRouter } from '@routes/siteRouter';
import express from 'express';

// Import routes from the ./routes
// import auth from "@routes/authRoute";

const api = express.Router();


// Setup routing
api.use("/", siteRouter);
api.use("/serega", seregaRouter);


export {api as apiv1};