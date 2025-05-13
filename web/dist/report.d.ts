import { Report } from "./types.js";
export declare class ReportError extends Error {
}
export declare function parseReport(raw: unknown): Report;
