package harbor

import (
	"bytes"
	"crypto/ed25519"
	"errors"
	"fmt"
)

// RegistrationResult is the authenticator/client response to a create ceremony,
// mirroring the fields an RP consumes from an AuthenticatorAttestationResponse.
