import { isNil } from "lodash";

import { Organization, Project } from "../../types/api";
import { ProjectDbEntity } from "../../types/db";
import getOrganization from "../api/getOrganization";
import { AsyncMapperFunction } from "../firestore";

export const mapProjectDbEntityToProject: AsyncMapperFunction<
  ProjectDbEntity,
  Project
> = async (dbEntity: ProjectDbEntity, id: string): Promise<Project> => {
  const {
    startDate,
    endDate,
    organization: organizationRef,
    responsibilities,
    ...rest
  } = dbEntity;
  const organization: Organization | null = await getOrganization(
    organizationRef.id,
  );
  if (isNil(organization)) {
    throw new Error(
      `Organization information for ${organizationRef.id} is missing`,
    );
  }
  return {
    startDate: startDate.toDate(),
    endDate: endDate?.toDate(),
    organization,
    responsibilities: responsibilities ?? [],
    ...rest,
    id,
  };
};
