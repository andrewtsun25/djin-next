import { organizationsCollection } from "./firestore/collections";
import createGetterByIdForFirestoreCollection, {
  GetterByIdForFirestoreCollection,
} from "./firestore/createGetterByIdForFirestoreCollection";
import { Organization } from "../types/data";

const getOrganization: GetterByIdForFirestoreCollection<Organization> =
  createGetterByIdForFirestoreCollection(organizationsCollection);

export default getOrganization;
