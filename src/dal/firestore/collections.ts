import { CollectionReference } from "firebase-admin/firestore";

import CollectionNames from "../../const/collectionNames";
import { db } from "./db";

function collectionReferenceOf(collectionId: string): CollectionReference {
  return db.collection(collectionId);
}

const educationsCollection: CollectionReference = collectionReferenceOf(
  CollectionNames.Education.Colleges
);

const employmentsCollection: CollectionReference = collectionReferenceOf(
  CollectionNames.Employment.Companies
);
const hbvResearchPapersCollection: CollectionReference = collectionReferenceOf(
  CollectionNames.HbvResearch.Papers
);
const holisticOfficeLinksCollection: CollectionReference =
  collectionReferenceOf(CollectionNames.HolisticOffice.Links);
const holisticOfficeModulesCollection: CollectionReference =
  collectionReferenceOf(CollectionNames.HolisticOffice.Modules);
const martialArtsStudiosCollection: CollectionReference = collectionReferenceOf(
  CollectionNames.MartialArts.Studios
);
const martialArtsStylesCollection: CollectionReference = collectionReferenceOf(
  CollectionNames.MartialArts.Styles
);
const musicInstrumentsCollection: CollectionReference = collectionReferenceOf(
  CollectionNames.Music.Instruments
);
const musicScoresCollection: CollectionReference = collectionReferenceOf(
  CollectionNames.Music.Scores
);
const organizationsCollection: CollectionReference = collectionReferenceOf(
  CollectionNames.Shared.Organizations
);

const projectsCollection: CollectionReference = collectionReferenceOf(
  CollectionNames.Project.Projects
);

export {
  educationsCollection,
  employmentsCollection,
  hbvResearchPapersCollection,
  holisticOfficeLinksCollection,
  holisticOfficeModulesCollection,
  martialArtsStudiosCollection,
  martialArtsStylesCollection,
  musicInstrumentsCollection,
  musicScoresCollection,
  organizationsCollection,
  projectsCollection,
};
