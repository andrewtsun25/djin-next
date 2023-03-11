import { isNil } from "lodash";

import { Employment, EmploymentType, Organization } from "../../types/api";
import { EmploymentDbEntity } from "../../types/db";
import { AsyncMapperFunction, ListerForFirestoreQuery } from "../firestore";
import { employmentsCollection } from "../firestore/collections";
import createListerForFirestoreQuery from "../firestore/createListerForFirestoreQuery";
import getOrganization from "./getOrganization";

const mapEmploymentDbEntityToEmployment: AsyncMapperFunction<
  EmploymentDbEntity,
  Employment
> = async (dbEntity: EmploymentDbEntity): Promise<Employment> => {
  const {
    organization: organizationRef,
    responsibilities,
    startDate,
    endDate,
    jobType: employmentType,
    ...rest
  } = dbEntity;
  const organization: Organization | null = await getOrganization(
    organizationRef.id
  );
  if (isNil(organization)) {
    throw new Error(
      `Organization information for ${organizationRef.id} is missing`
    );
  }
  return {
    organization,
    startDate: startDate.toDate(),
    endDate: endDate?.toDate(),
    employmentType: employmentType as EmploymentType,
    responsibilities: responsibilities ?? [],
    ...rest,
  };
};

const listEmployments: ListerForFirestoreQuery<Employment> =
  createListerForFirestoreQuery<EmploymentDbEntity, Employment>(
    employmentsCollection.orderBy("startDate", "desc"),
    mapEmploymentDbEntityToEmployment
  );

export default listEmployments;
