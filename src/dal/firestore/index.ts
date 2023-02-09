import createGetterByIdForFirestoreCollection from "./createGetterByIdForFirestoreCollection";
import type { GetterByIdForFirestoreCollection } from "./createGetterByIdForFirestoreCollection";
import createListerForFirestoreCollection from "./createListerForFirestoreCollection";
import type { ListerForFirestoreCollection } from "./createListerForFirestoreCollection";
import type { AsyncMapperFunction, MapperFunction } from "./mapperFunction";
import {
  hbvResearchPapersCollection,
  holisticOfficeLinksCollection,
  holisticOfficeModulesCollection,
  martialArtsStudiosCollection,
  martialArtsStylesCollection,
  musicInstrumentsCollection,
  musicScoresCollection,
  organizationsCollection,
} from "./collections";

export {
  createGetterByIdForFirestoreCollection,
  createListerForFirestoreCollection,
  hbvResearchPapersCollection,
  holisticOfficeLinksCollection,
  holisticOfficeModulesCollection,
  martialArtsStudiosCollection,
  martialArtsStylesCollection,
  musicInstrumentsCollection,
  musicScoresCollection,
  organizationsCollection,
};
export type {
  AsyncMapperFunction,
  MapperFunction,
  GetterByIdForFirestoreCollection,
  ListerForFirestoreCollection,
};
