import { configConst } from "@config/config.const";
import { ILoggingData } from "@interfaces/interfaces.logging";
import { Worker } from "worker_threads";


export class Logging {
    protected static worker_file = "./"+configConst.LOG_WORKER_FILE;
    protected static logWorker = new Worker(Logging.worker_file);

    protected constructor() {}

    public static info(message: string, filePath: string) {
        const data: ILoggingData = {
            status: "INFO",
            message,
            filePath
        }

        // Send a message to the worker
        Logging.logWorker.postMessage(JSON.stringify(data));
    }

}