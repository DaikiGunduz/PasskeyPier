// Package examples contains runnable, documentation-style examples for the
// passkeypier lab. These use Go's Example test convention so they compile and
// their output is verified by `go test`.
package examples

import (
	"fmt"

	"github.com/passkeypier/passkeypier/internal/harbor"
)

// ExampleRegisterAndAuthenticate walks through an honest passkey ceremony:
