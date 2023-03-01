import { collection, orderBy } from "firebase/firestore";
import { memoize } from "lodash";

import CollectionNames from "../../const/collectionNames";
import { EducationType, StudentOrganization } from "../../types/api";
import {
  createListerForFirestoreCollection,
  ListerForFirestoreCollection,
} from "../firestore";
import { educationsCollection } from "../firestore/collections";

// Memoize creation of lister function to prevent re-declaration per fetch
const createListerOfStudentOrganizationsForEducationType = memoize(
  (educationId: string): ListerForFirestoreCollection<StudentOrganization> => {
    const studentOrganizationsCollection = collection(
      educationsCollection,
      educationId,
      CollectionNames.Education.StudentOrganizations
    );
    return createListerForFirestoreCollection(
      studentOrganizationsCollection,
      undefined,
      orderBy("name", "asc")
    );
  }
);

async function listStudentOrganizationsForEducation(
  educationId: string
): Promise<StudentOrganization[]> {
  const lister: ListerForFirestoreCollection<StudentOrganization> =
    createListerOfStudentOrganizationsForEducationType(educationId);
  return await lister();
}

export default listStudentOrganizationsForEducation;
