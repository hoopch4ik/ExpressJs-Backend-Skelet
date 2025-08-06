import { SiteController } from '@controllers/siteController';
import express from 'express';

// Import routes from the ./routes
// import auth from "@routes/authRoute";


const router = express.Router();
const siteController = new SiteController();

// Setup routing
router.get("/", siteController.get);


export {
    router as siteRouter
};