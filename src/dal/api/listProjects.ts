import { isNil } from "lodash";

import { Organization, Project } from "../../types/api";
import { ProjectDbEntity } from "../../types/db";
import {
  AsyncMapperFunction,
  createListerForFirestoreQuery,
  ListerForFirestoreQuery,
} from "../firestore";
import { projectsCollection } from "../firestore/collections";
import getOrganization from "./getOrganization";

const mapProjectDbEntityToProject: AsyncMapperFunction<
  ProjectDbEntity,
  Project
> = async (dbEntity: ProjectDbEntity): Promise<Project> => {
  const {
    startDate,
    endDate,
    organization: organizationRef,
    responsibilities,
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
    startDate: startDate.toDate(),
    endDate: endDate?.toDate(),
    organization,
    responsibilities: responsibilities ?? [],
    ...rest,
  };
};

const listProjects: ListerForFirestoreQuery<Project> =
  createListerForFirestoreQuery<ProjectDbEntity, Project>(
    projectsCollection.orderBy("startDate", "desc"),
    mapProjectDbEntityToProject
  );

export default listProjects;
