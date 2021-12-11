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
        throw new ReportError(`field "${key}" must be a boolean`);
    }
    return v;
}
function parseScenario(v) {
    if (!isObject(v)) {
        throw new ReportError("scenario result must be an object");
    }
    const outcome = requireString(v, "outcome");
    if (outcome !== "pass" && outcome !== "fail") {
        throw new ReportError(`invalid outcome "${outcome}"`);
    }
    const expectation = requireString(v, "expectation");
    if (expectation !== "accept" && expectation !== "reject") {
