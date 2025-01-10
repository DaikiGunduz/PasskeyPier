package harbor

import (
	"encoding/json"
	"fmt"
	"io"
	"sort"
	"strings"
	"time"
)

// ReportSchemaVersion identifies the JSON report shape consumed by the
// TypeScript browser lab. Bump on breaking changes.
const ReportSchemaVersion = "passkeypier/report/v1"

