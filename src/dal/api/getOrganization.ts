import { Organization } from "../../types/api";
import { OrganizationDbEntity } from "../../types/db";
import {
  createGetterByIdForFirestoreQuery,
  GetterByIdForFirestoreQuery,
  MapperFunction,
  organizationsCollection,
} from "../firestore";

const mapOrganizationDbEntityToOrganization: MapperFunction<
  OrganizationDbEntity,
  Organization
> = (dbEntity: OrganizationDbEntity, organizationId: string) => ({
  ...dbEntity,
  id: organizationId,
});

const getOrganization: GetterByIdForFirestoreQuery<Organization> =
  createGetterByIdForFirestoreQuery(
    organizationsCollection,
    mapOrganizationDbEntityToOrganization
  );

export default getOrganization;
