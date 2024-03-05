// Report parsing and validation. Dependency-free: uses only the DOM and
// standard JS. Validates the untrusted JSON against the expected schema shape
// before the UI renders it.

import { Report, ScenarioResult, EXPECTED_SCHEMA } from "./types.js";
