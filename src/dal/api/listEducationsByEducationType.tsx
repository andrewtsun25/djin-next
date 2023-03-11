import { isNil, memoize } from "lodash";

import {
  Education,
  EducationType,
  Organization,
  StudentOrganization,
} from "../../types/api";
import { EducationDbEntity } from "../../types/db";
import {
  AsyncMapperFunction,
  createListerForFirestoreQuery,
  ListerForFirestoreQuery,
} from "../firestore";
import { educationsCollection } from "../firestore/collections";
import getOrganization from "./getOrganization";
import listStudentOrganizationsByEducationType from "./listStudentOrganizationsForEducation";

// Memoize creation of mapper function to prevent re-declaration per fetch
const mapEducationDbEntityToEducation: AsyncMapperFunction<
  EducationDbEntity,
  Education
> = async (dbEntity: EducationDbEntity, eid: string): Promise<Education> => {
  const {
    endDate,
    organization: organizationRef,
    startDate,
    type,
    ...rest
  } = dbEntity;
  const studentOrganizations: StudentOrganization[] =
    await listStudentOrganizationsByEducationType(eid);
  const organization: Organization | null = await getOrganization(
    organizationRef.id
  );
  if (isNil(organization)) {
    throw new Error(
      `Organization information for education at ${organizationRef.id} is missing`
    );
  }
  return {
    endDate: endDate?.toDate(),
    startDate: startDate.toDate(),
    organization,
    studentOrganizations,
    type: type as EducationType,
    ...rest,
  };
};

// Memoize creation of lister function to prevent re-declaration per fetch
const createListerOfEducationsForEducationType = memoize(
  (educationId: EducationType): ListerForFirestoreQuery<Education> => {
    return createListerForFirestoreQuery(
      educationsCollection
        .where("type", "==", educationId)
        .orderBy("startDate", "desc"),
      mapEducationDbEntityToEducation
    );
  }
);

async function listEducationsByEducationType(
  educationId: EducationType
): Promise<Education[]> {
  const lister: ListerForFirestoreQuery<Education> =
    createListerOfEducationsForEducationType(educationId);
  return await lister();
}

export default listEducationsByEducationType;
