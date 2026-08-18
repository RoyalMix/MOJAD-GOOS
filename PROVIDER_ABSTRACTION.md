# PROVIDER ABSTRACTION LAW

MOJAD must not hard-code its core business logic to a single external provider.

External capabilities must use provider-neutral interfaces.

Examples:

AIProvider
RealtimeProvider
PaymentProvider
IdentityProvider
GameRuntimeProvider
StorageProvider
SearchProvider

Provider-specific implementations must live behind adapters.

Example:

MOJAD AI
   ↓
AIProvider interface
   ├── Provider A
   ├── Provider B
   ├── Provider C
   └── Future Provider

MOJAD Realtime
   ↓
RealtimeProvider
   ├── LiveKit
   └── Future provider

MOJAD Payments
   ↓
PaymentProvider
   ├── Pi
   ├── Future compliant rail
   └── Other supported provider

The domain layer must never depend directly on provider-specific SDKs.
