import express from 'express';



// Import routes from the ./routes
// import auth from "@routes/authRoute";

const api = express.Router();


// Setup routing
api.use("/", siteRouter);


export {api as apiv1};