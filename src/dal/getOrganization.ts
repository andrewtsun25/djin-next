import { organizationsCollection } from "./firestore/collections";
import { Organization } from "../types/data";
import {
  createGetterByIdForFirestoreCollection,
  GetterByIdForFirestoreCollection,
} from "./firestore";

const getOrganization: GetterByIdForFirestoreCollection<Organization> =
  createGetterByIdForFirestoreCollection(organizationsCollection);

export default getOrganization;
