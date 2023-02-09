import { collection, orderBy } from "firebase/firestore";
import { EduType, StudentOrganization } from "../../types/api";
import {
  createListerForFirestoreCollection,
  ListerForFirestoreCollection,
} from "../firestore";
import { educationsCollection } from "../firestore/collections";
import CollectionNames from "../../const/collectionNames";
import { memoize } from "lodash";

// Memoize creation of lister function to prevent re-declaration per fetch
const createListerOfStudentOrganizationsForEducationType = memoize(
  (educationId: EduType): ListerForFirestoreCollection<StudentOrganization> => {
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

async function listStudentOrganizationsByEducationType(
  educationId: EduType
): Promise<StudentOrganization[]> {
  const lister: ListerForFirestoreCollection<StudentOrganization> =
    createListerOfStudentOrganizationsForEducationType(educationId);
  return await lister();
}

export default listStudentOrganizationsByEducationType;
