export class BusinessService {

  createCompany(ownerId: string, name: string) {
    return {
      id: Date.now().toString(),
      ownerId,
      name,
      verified: false
    };
  }

  verifyCompany(companyId: string) {
    return {
      companyId,
      verified: true
    };
  }
}
