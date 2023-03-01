import { orderBy } from "firebase/firestore";
import { EmploymentDbEntity } from "../../types/db";
import getOrganization from "./getOrganization";
import { Employment, EmploymentType, Organization } from "../../types/api";
import { isNil } from "lodash";
import {
  AsyncMapperFunction,
  createListerForFirestoreCollection,
  ListerForFirestoreCollection,
} from "../firestore";
import { employmentsCollection } from "../firestore/collections";

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
