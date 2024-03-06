import { memoize } from "lodash";

import CollectionNames from "../../const/collectionNames";
import { Project } from "../../types/api";
import {
  createListerForFirestoreQuery,
  ListerForFirestoreQuery,
} from "../firestore";
import { projectsCollection } from "../firestore/collections";
import { db } from "../firestore/db";
import { mapProjectDbEntityToProject } from "../mapper";

const createListerOfProjectsForOrganizationId = memoize(
  (organizationId: string): ListerForFirestoreQuery<Project> => {
    const organizationRef = db.doc(
      `${CollectionNames.Shared.Organizations}/${organizationId}`,
    );
    return createListerForFirestoreQuery(
      projectsCollection
        .where("organization", "==", organizationRef)
        .orderBy("startDate", "desc"),
      mapProjectDbEntityToProject,
    );
  },
);

export async function listProjectsByOrganizationId(
  organizationId: string,
): Promise<Project[]> {
  const lister: ListerForFirestoreQuery<Project> =
    createListerOfProjectsForOrganizationId(organizationId);
  return await lister();
}
