import { orderBy } from "firebase/firestore";
import { isNil } from "lodash";

import { Organization, Project } from "../../types/api";
import { ProjectDbEntity } from "../../types/db";
import {
  AsyncMapperFunction,
  createListerForFirestoreCollection,
  ListerForFirestoreCollection,
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

const listProjects: ListerForFirestoreCollection<Project> =
  createListerForFirestoreCollection<ProjectDbEntity, Project>(
    projectsCollection,
    mapProjectDbEntityToProject,
    orderBy("startDate", "desc")
  );

export default listProjects;
