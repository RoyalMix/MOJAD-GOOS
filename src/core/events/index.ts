export const MOJAD_EVENTS = {
  IDENTITY_CREATED: "identity.created",
  IDENTITY_VERIFIED: "identity.verified",

  SKILL_ADDED: "skill.added",
  SKILL_VERIFIED: "skill.verified",

  OPPORTUNITY_CREATED: "opportunity.created",
  OPPORTUNITY_VALIDATED: "opportunity.validated",
  OPPORTUNITY_VERIFIED: "opportunity.verified",
  OPPORTUNITY_MATCHED: "opportunity.matched",
  OPPORTUNITY_APPLIED: "opportunity.applied",
  OPPORTUNITY_COMPLETED: "opportunity.completed",

  GAME_SESSION_STARTED: "game.session.started",
  GAME_SESSION_COMPLETED: "game.session.completed",

  GAME_SKILL_SIGNAL_CREATED:
    "game.skill_signal.created",

  LEARNING_STARTED: "learning.started",
  LEARNING_COMPLETED: "learning.completed",

  TRUST_UPDATED: "trust.updated",
  REPUTATION_UPDATED: "reputation.updated",

  AI_TASK_CREATED: "ai.task.created",
  AI_TASK_COMPLETED: "ai.task.completed",

  REALTIME_ROOM_CREATED:
    "realtime.room.created",

  REALTIME_ROOM_ENDED:
    "realtime.room.ended",
} as const;
