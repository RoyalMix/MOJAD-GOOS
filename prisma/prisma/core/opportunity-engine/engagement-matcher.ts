export class EngagementMatcher {
  matchOpportunity(message: string) {
    if (message.includes("job")) {
      return "JOB_OPPORTUNITY";
    }

    if (message.includes("invest")) {
      return "INVESTMENT_OPPORTUNITY";
    }

    return "GENERAL";
  }
}
