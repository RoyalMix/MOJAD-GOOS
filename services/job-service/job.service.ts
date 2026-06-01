export class JobService {

  createJob(companyId: string, title: string, description: string) {
    return {
      id: Date.now().toString(),
      companyId,
      title,
      description,
      currency: "PI"
    };
  }

  applyToJob(userId: string, jobId: string) {
    return {
      applicationId: Date.now().toString(),
      userId,
      jobId,
      status: "pending"
    };
  }

  listJobs() {
    return [];
  }
}
createEscrowForJob(userId: string, jobId: string, amount: number) {
  return {
    escrow: true,
    jobId,
    userId,
    amount,
    currency: "PI"
  };
}
