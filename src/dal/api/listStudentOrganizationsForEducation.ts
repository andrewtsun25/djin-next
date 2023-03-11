import { memoize } from "lodash";

import CollectionNames from "../../const/collectionNames";
import { StudentOrganization } from "../../types/api";
import {
  createListerForFirestoreQuery,
  ListerForFirestoreQuery,
} from "../firestore";
import { educationsCollection } from "../firestore/collections";

// Memoize creation of lister function to prevent re-declaration per fetch
const createListerOfStudentOrganizationsForEducationType = memoize(
  (educationId: string): ListerForFirestoreQuery<StudentOrganization> => {
    const studentOrganizationsCollection = educationsCollection
      .doc(educationId)
      .collection(CollectionNames.Education.StudentOrganizations)
      .orderBy("name", "asc");
    return createListerForFirestoreQuery(
      studentOrganizationsCollection,
      undefined
    );
  }
);

async function listStudentOrganizationsForEducation(
  educationId: string
): Promise<StudentOrganization[]> {
  const lister: ListerForFirestoreQuery<StudentOrganization> =
    createListerOfStudentOrganizationsForEducationType(educationId);
  return await lister();
}

export default listStudentOrganizationsForEducation;
