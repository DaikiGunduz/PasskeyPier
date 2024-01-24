package harbor

import (
	"bytes"
	"encoding/json"
	"strings"
	"testing"
)

const (
	testRPID   = "harbor.example"
	testOrigin = "https://harbor.example"
)

func mustChallenge(t *testing.T) Challenge {
	t.Helper()
