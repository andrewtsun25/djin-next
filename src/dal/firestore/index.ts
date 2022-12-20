import createGetterByIdForFirestoreCollection from "./createGetterByIdForFirestoreCollection";
import type {
  GetterAsyncMapperFunction,
  GetterByIdForFirestoreCollection,
} from "./createGetterByIdForFirestoreCollection";
import createListerForFirestoreCollection from "./createListerForFirestoreCollection";
import type {
  ListerAsyncMapperFunction,
  ListerForFirestoreCollection,
} from "./createListerForFirestoreCollection";
import {
  hbvResearchPapersCollection,
  holisticOfficeLinksCollection,
  holisticOfficeModulesCollection,
  organizationsCollection,
} from "./collections";

export {
  createGetterByIdForFirestoreCollection,
  createListerForFirestoreCollection,
  hbvResearchPapersCollection,
  holisticOfficeLinksCollection,
  holisticOfficeModulesCollection,
  organizationsCollection,
};
export type {
  GetterAsyncMapperFunction,
  GetterByIdForFirestoreCollection,
  ListerAsyncMapperFunction,
  ListerForFirestoreCollection,
};
