# passkeypier

> A harbor for passkeys. Every credential that sails in is checked at the
> lighthouse before it is allowed to dock.

<p align="center">
  <img src="docs/assets/credential-lighthouse.svg" alt="A harbor lighthouse acting as a verification checkpoint, with a credential passing five gates before docking" width="640" />
</p>

**passkeypier** is a mixed-language Passkey and WebAuthn conformance lab. The Go
core and CLI run virtual registration and authentication ceremonies: secure
random challenges, `base64url`, origin and relying-party checks, signature
