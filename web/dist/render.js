// DOM rendering for the passkeypier browser lab. Dependency-free; builds nodes
// with textContent (never innerHTML from report data) to avoid injection.
function el(tag, className, text) {
    const node = document.createElement(tag);
