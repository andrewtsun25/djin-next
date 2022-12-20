import {
  collection,
  CollectionReference,
  DocumentData,
} from "firebase/firestore";
import { db } from "./db";
import {
  HolisticOfficeLink,
  HolisticOfficeModule,
  Organization,
} from "../../types/data";
import { HbvResearchPaperDbEntity } from "../../types/dbEntity";
import CollectionNames from "../../const/collectionNames";

function collectionReferenceOf<T = DocumentData>(
  collectionId: string
): CollectionReference<T> {
  return collection(db, collectionId) as CollectionReference<T>;
}

const hbvResearchPapersCollection: CollectionReference<HbvResearchPaperDbEntity> =
  collectionReferenceOf(CollectionNames.HbvResearch.Papers);
const holisticOfficeLinksCollection: CollectionReference<HolisticOfficeLink> =
  collectionReferenceOf(CollectionNames.HolisticOffice.Links);
const holisticOfficeModulesCollection: CollectionReference<HolisticOfficeModule> =
  collectionReferenceOf(CollectionNames.HolisticOffice.Modules);
const organizationsCollection: CollectionReference<Organization> =
  collectionReferenceOf(CollectionNames.Shared.Organizations);

export {
  hbvResearchPapersCollection,
  holisticOfficeLinksCollection,
  holisticOfficeModulesCollection,
  organizationsCollection,
};
