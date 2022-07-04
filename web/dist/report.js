// Report parsing and validation. Dependency-free: uses only the DOM and
// standard JS. Validates the untrusted JSON against the expected schema shape
// before the UI renders it.
import { EXPECTED_SCHEMA } from "./types.js";
export class ReportError extends Error {
