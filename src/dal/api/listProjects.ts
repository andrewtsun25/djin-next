import {
  AsyncMapperFunction,
  createListerForFirestoreCollection,
  ListerForFirestoreCollection,
} from "../firestore";
import { ProjectDbEntity } from "../../types/db";
import { Organization, Project } from "../../types/api";
import { isNil } from "lodash";
import { orderBy } from "firebase/firestore";
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
