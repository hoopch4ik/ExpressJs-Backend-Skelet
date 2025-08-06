import { ApiResponse } from "@hooks/hook.response";
import { asyncHandler } from "@mwares/mware.controllers";


export class SiteController {

    public get = asyncHandler(async (_, res) => {
        res.status(200).json(new ApiResponse({
            success: true,
            message: "Api Success"
        }))
    });

}