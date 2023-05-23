export type Outcome = "pass" | "fail";
export type Expectation = "accept" | "reject";
export interface ScenarioResult {
    name: string;
    category: string;
    description: string;
    expectation: Expectation;
    outcome: Outcome;
    detail: string;
    duration_ns: number;
}
export interface ReportSummary {
    total: number;
    passed: number;
    failed: number;
    all_passed: boolean;
}
export interface CategoryTotals {
    category: string;
    passed: number;
    failed: number;
}
export interface Report {
    schema: string;
    tool: string;
