import { orderBy } from "firebase/firestore";
import { isNil } from "lodash";

import { Employment, EmploymentType, Organization } from "../../types/api";
import { EmploymentDbEntity } from "../../types/db";
import {
  AsyncMapperFunction,
  createListerForFirestoreCollection,
  ListerForFirestoreCollection,
} from "../firestore";
import { employmentsCollection } from "../firestore/collections";
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

const listEmployments: ListerForFirestoreCollection<Employment> =
  createListerForFirestoreCollection<EmploymentDbEntity, Employment>(
    employmentsCollection,
    mapEmploymentDbEntityToEmployment,
    orderBy("startDate", "desc")
  );

export default listEmployments;
