import { Project } from "../../types/api";
import {
  createGetterByIdForFirestoreQuery,
  GetterByIdForFirestoreQuery,
} from "../firestore";
import { projectsCollection } from "../firestore/collections";
import { mapProjectDbEntityToProject } from "../mapper";

export const getProject: GetterByIdForFirestoreQuery<Project> =
  createGetterByIdForFirestoreQuery(
    projectsCollection,
    mapProjectDbEntityToProject,
  );
