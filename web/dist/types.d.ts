export type Outcome = "pass" | "fail";
export type Expectation = "accept" | "reject";
export interface ScenarioResult {
    name: string;
    category: string;
