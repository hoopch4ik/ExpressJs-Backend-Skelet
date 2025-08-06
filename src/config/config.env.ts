import dotenv from "dotenv";


// Setup .env variables for app usage
dotenv.config();

export const configEnv = {
    GENERAL_ROUTE: process.env.GENERAL_ROUTE || "/api",
    PORT: process.env.PORT || "8000",
    RATE_TIME_LIMIT: Number(process.env.RATE_TIME_LIMIT || "15"),
    RATE_REQUEST_LIMIT: Number(process.env.RATE_REQUEST_LIMIT || "100"),
}