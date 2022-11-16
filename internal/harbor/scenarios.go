package harbor

import (
	"fmt"
	"sort"
)

// Outcome is the result of running a single scenario check.
type Outcome string

const (
	OutcomePass Outcome = "pass"
	OutcomeFail Outcome = "fail"
)

// Expectation declares whether a scenario is expected to succeed or to be
