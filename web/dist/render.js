// DOM rendering for the passkeypier browser lab. Dependency-free; builds nodes
// with textContent (never innerHTML from report data) to avoid injection.
function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className)
        node.className = className;
    if (text !== undefined)
        node.textContent = text;
    return node;
}
function formatDuration(ns) {
    if (ns < 1000)
        return `${ns} ns`;
    if (ns < 1000000)
        return `${(ns / 1000).toFixed(1)} µs`;
    return `${(ns / 1000000).toFixed(2)} ms`;
}
function renderSummary(report) {
    const wrap = el("div", "summary");
    const banner = el("div", report.summary.all_passed ? "banner banner-pass" : "banner banner-fail", report.summary.all_passed
