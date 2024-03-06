import { Project } from "../../types/api";
import { ProjectDbEntity } from "../../types/db";
import {
  createListerForFirestoreQuery,
  ListerForFirestoreQuery,
} from "../firestore";
import { projectsCollection } from "../firestore/collections";
import { mapProjectDbEntityToProject } from "../mapper";

const listProjects: ListerForFirestoreQuery<Project> =
  createListerForFirestoreQuery<ProjectDbEntity, Project>(
    projectsCollection.orderBy("startDate", "desc"),
    mapProjectDbEntityToProject,
  );

export default listProjects;
