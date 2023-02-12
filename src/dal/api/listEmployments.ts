import { orderBy } from "firebase/firestore";
import { EmploymentDbEntity } from "../../types/db";
import getOrganization from "./getOrganization";
import { Employment, JobType } from "../../types/api";
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
    startDate,
    endDate,
    jobType,
    ...rest
  } = dbEntity;
  const organization = await getOrganization(organizationRef.id);
  if (isNil(organization)) {
    throw new Error(
      `Organization information for ${organizationRef.id} is missing`
    );
  }
  return {
    organization,
    startDate: startDate.toDate(),
    endDate: endDate?.toDate(),
    jobType: jobType as JobType,
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
