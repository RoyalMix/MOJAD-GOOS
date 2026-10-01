/**
 * AI Runtime Initialization
 *
 * Sets up the minimal AI foundation with provider-neutral contracts
 * and runtime services.
 *
 * External provider execution is BLOCKED until credentials are configured.
 */

import { AIModelRouterService, ProviderModel } from "./ai-model-router.service";
import { ProvenanceService } from "./ai-provenance.service";
import { AIOrchestratorService } from "./ai-orchestrator.service";
import {
  AIProviderAdapterRegistry,
  createBlockedRegistry,
} from "./ai-provider-registry";

/**
 * Initialize the MOJAD AI runtime
 * Returns a service bundle with all components connected
 */
export async function initializeAIRuntime() {
  // Step 1: Create model router
  const router = new AIModelRouterService();

  // Step 2: Create provenance manager
  const provenanceManager = new ProvenanceService();

  // Step 3: Create provider registry
  // For now, all external providers are blocked due to missing credentials
  const registry = createBlockedRegistry([
    "OPENAI",
    "ANTHROPIC",
    "GOOGLE",
    "KIMI",
    "CUSTOM",
  ]);

  // Step 4: Create orchestrator
  const orchestrator = new AIOrchestratorService(router, provenanceManager, {
    requiresApprovalForHighRisk: true,
    maxCostPerRequest: 1.0, // 1 cost unit per request
  });

  return {
    orchestrator,
    router,
    provenanceManager,
    registry,
    status: {
      initialized: true,
      providersAvailable: registry.listAvailableProviders(),
      providersBlocked: registry
        .listProviders()
        .map((p) => ({
          provider: p,
          reason: registry.getUnavailabilityReason(p),
        }))
        .filter((p) => p.reason !== null),
      message:
        "AI foundation is ready. External provider execution is BLOCKED. " +
        "Configure AI provider credentials to enable real execution.",
    },
  };
}

/**
 * Runtime type for the initialized AI system
 */
export interface AIRuntime {
  orchestrator: AIOrchestratorService;
  router: AIModelRouterService;
  provenanceManager: ProvenanceService;
  registry: AIProviderAdapterRegistry;
  status: {
    initialized: boolean;
    providersAvailable: string[];
    providersBlocked: Array<{ provider: string; reason: string | null }>;
    message: string;
  };
}
