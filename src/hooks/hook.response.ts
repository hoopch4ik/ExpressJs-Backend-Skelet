import { IApiResponse } from "@interfaces/interfaces.base";


export class ApiResponse<T> {
    public success: boolean;
    public message: string;
    public data?: T;

    public constructor(res: IApiResponse<T>) {
        const {
            success,
            message,
            data
        } = res;

        this.success = success;
        this.message = message;
        this.data = data;
    }

}