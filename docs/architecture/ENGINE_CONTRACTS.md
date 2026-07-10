
# MOJAD Engine Contracts

Every engine must expose:

Initialize()

Health()

Process()

Validate()

Sync()

Index()

Recommend()

Shutdown()

No engine communicates directly with UI.

All communication passes through:

Event Bus

API Gateway

Operating Intelligence

Knowledge Graph

This contract must remain stable across future versions.
