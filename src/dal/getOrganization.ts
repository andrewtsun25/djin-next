import { Organization } from "../types/data";
import {
  doc,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
} from "firebase/firestore";
import Collections from "../const/collections";
import { fsc } from "./firestore";
import { OrganizationDbEntity } from "../types/dbEntity";

export default async function getOrganization(
  organizationId: string
): Promise<Organization | null> {
  const organizationRef: DocumentReference<OrganizationDbEntity> =
    doc<OrganizationDbEntity>(
      fsc(Collections.Shared.Organizations),
      organizationId
    );
  const organizationSnapshot: DocumentSnapshot<OrganizationDbEntity> =
    await getDoc(organizationRef);
  return organizationSnapshot.exists() ? organizationSnapshot.data() : null;
}
