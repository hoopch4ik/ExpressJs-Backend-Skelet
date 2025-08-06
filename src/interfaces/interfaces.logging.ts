

export interface ILoggingData {
    status: "INFO"|"ERROR"|"WARNING"|"DANGER";
    message: string;
    filePath: string;
}