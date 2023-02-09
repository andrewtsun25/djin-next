import { orderBy, where } from "firebase/firestore";
import { Education, EduType } from "../../types/api";
import {
  AsyncMapperFunction,
  createListerForFirestoreCollection,
  ListerForFirestoreCollection,
} from "../firestore";
import { educationsCollection } from "../firestore/collections";
import { isNil, memoize } from "lodash";
import { EducationDbEntity } from "../../types/db";
import listStudentOrganizationsByEducationType from "./listStudentOrganizationsByEducationType";
import getOrganization from "./getOrganization";

// Memoize creation of mapper function to prevent re-declaration per fetch
const createMapperOfEducationDbEntityToEducationForEducationType = memoize(
  (educationId: EduType): AsyncMapperFunction<EducationDbEntity, Education> => {
    return async (dbEntity: EducationDbEntity): Promise<Education> => {
      const {
        endDate,
        organization: organizationRef,
        startDate,
        type,
        ...rest
      } = dbEntity;
      const studentOrganizations =
        await listStudentOrganizationsByEducationType(educationId);
      const organization = await getOrganization(organizationRef.id);
      if (isNil(organization)) {
        throw new Error(
          `Organization for education at ${organizationRef.id} is null`
        );
      }
      return {
        endDate: endDate?.toDate(),
        startDate: startDate.toDate(),
        organization,
        studentOrganizations,
        type: type as EduType,
        ...rest,
      };
    };
  }
);

// Memoize creation of lister function to prevent re-declaration per fetch
const createListerOfEducationsForEducationType = memoize(
  (educationId: EduType): ListerForFirestoreCollection<Education> => {
    return createListerForFirestoreCollection(
      educationsCollection,
      createMapperOfEducationDbEntityToEducationForEducationType(educationId),
      where("type", "==", educationId),
      orderBy("startDate", "asc")
    );
  }
);

async function listEducationsByEducationType(
  educationId: EduType
): Promise<Education[]> {
  const lister: ListerForFirestoreCollection<Education> =
    createListerOfEducationsForEducationType(educationId);
  return await lister();
}

export default listEducationsByEducationType;
