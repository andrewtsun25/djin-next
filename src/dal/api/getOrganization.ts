import { Organization } from "../../types/api";
import {
  createGetterByIdForFirestoreCollection,
  GetterByIdForFirestoreCollection,
  MapperFunction,
  organizationsCollection,
} from "../firestore";
import { OrganizationDbEntity } from "../../types/db";

const mapOrganizationDbEntityToOrganization: MapperFunction<
  OrganizationDbEntity,
  Organization
> = (dbEntity: OrganizationDbEntity, organizationId: string) => ({
  ...dbEntity,
  id: organizationId,
});

const getOrganization: GetterByIdForFirestoreCollection<Organization> =
  createGetterByIdForFirestoreCollection(
    organizationsCollection,
    mapOrganizationDbEntityToOrganization
  );

export default getOrganization;
