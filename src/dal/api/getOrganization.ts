import { Organization } from "../../types/api";
import {
  createGetterByIdForFirestoreCollection,
  GetterByIdForFirestoreCollection,
  organizationsCollection,
} from "../firestore";

const getOrganization: GetterByIdForFirestoreCollection<Organization> =
  createGetterByIdForFirestoreCollection(organizationsCollection);

export default getOrganization;
