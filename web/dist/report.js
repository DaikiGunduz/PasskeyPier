// Report parsing and validation. Dependency-free: uses only the DOM and
// standard JS. Validates the untrusted JSON against the expected schema shape
// before the UI renders it.
import { EXPECTED_SCHEMA } from "./types.js";
export class ReportError extends Error {
}
function isObject(v) {
    return typeof v === "object" && v !== null && !Array.isArray(v);
}
function requireString(o, key) {
    const v = o[key];
    if (typeof v !== "string") {
        throw new ReportError(`field "${key}" must be a string`);
    }
    return v;
}
function requireNumber(o, key) {
    const v = o[key];
    if (typeof v !== "number" || Number.isNaN(v)) {
        throw new ReportError(`field "${key}" must be a number`);
    }
    return v;
}
function requireBool(o, key) {
    const v = o[key];
    if (typeof v !== "boolean") {
