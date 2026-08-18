export type Permission =
  | "READ"
  | "CREATE"
  | "UPDATE"
  | "DELETE"
  | "PUBLISH"
  | "VERIFY"
  | "MODERATE"
  | "EXECUTE"
  | "ADMIN";

export interface AuthorizationContext {
  actorId: string;

  roles: string[];

  permissions: Permission[];

  resourceType?: string;

  resourceId?: string;
}

export interface AuthorizationService {
  authorize(
    context: AuthorizationContext,
    permission: Permission
  ): Promise<boolean>;
}
