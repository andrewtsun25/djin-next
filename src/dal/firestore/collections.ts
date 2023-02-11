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
} from "../../types/api";
import {
  EducationDbEntity,
  HbvResearchPaperDbEntity,
  MartialArtsStudioDbEntity,
  MartialArtsStyleDbEntity,
  MusicInstrumentDbEntity,
  MusicScoreDbEntity,
} from "../../types/db";
import CollectionNames from "../../const/collectionNames";

function collectionReferenceOf<T = DocumentData>(
  collectionId: string
): CollectionReference<T> {
  return collection(db, collectionId) as CollectionReference<T>;
}

const educationsCollection: CollectionReference<EducationDbEntity> =
  collectionReferenceOf(CollectionNames.Education.Colleges);
const hbvResearchPapersCollection: CollectionReference<HbvResearchPaperDbEntity> =
  collectionReferenceOf(CollectionNames.HbvResearch.Papers);
const holisticOfficeLinksCollection: CollectionReference<HolisticOfficeLink> =
  collectionReferenceOf(CollectionNames.HolisticOffice.Links);
const holisticOfficeModulesCollection: CollectionReference<HolisticOfficeModule> =
  collectionReferenceOf(CollectionNames.HolisticOffice.Modules);
const martialArtsStudiosCollection: CollectionReference<MartialArtsStudioDbEntity> =
  collectionReferenceOf(CollectionNames.MartialArts.Studios);
const martialArtsStylesCollection: CollectionReference<MartialArtsStyleDbEntity> =
  collectionReferenceOf(CollectionNames.MartialArts.Styles);
const musicInstrumentsCollection: CollectionReference<MusicInstrumentDbEntity> =
  collectionReferenceOf(CollectionNames.Music.Instruments);
const musicScoresCollection: CollectionReference<MusicScoreDbEntity> =
  collectionReferenceOf(CollectionNames.Music.Scores);
const organizationsCollection: CollectionReference<Organization> =
  collectionReferenceOf(CollectionNames.Shared.Organizations);

export {
  educationsCollection,
  hbvResearchPapersCollection,
  holisticOfficeLinksCollection,
  holisticOfficeModulesCollection,
  martialArtsStudiosCollection,
  martialArtsStylesCollection,
  musicInstrumentsCollection,
  musicScoresCollection,
  organizationsCollection,
};
