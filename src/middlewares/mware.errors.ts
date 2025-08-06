
import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "@hooks/hook.response";
import { Logging } from "@logging/log.worker";

// @desc Handles error responses from throw errors

export const errorResponse = async (error: Error, _req: Request, res: Response, _next: NextFunction) => {
   Logging.info(error.name + "::" + error.message, __filename);
   res.status(500).json(new ApiResponse({
        success: false,
        message: error.message,
   }));
};