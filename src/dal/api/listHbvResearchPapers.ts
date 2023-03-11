import { isNil } from "lodash";

import { HbvResearchPaper } from "../../types/api";
import { HbvResearchPaperDbEntity } from "../../types/db";
import {
  AsyncMapperFunction,
  createListerForFirestoreQuery,
  hbvResearchPapersCollection,
  ListerForFirestoreQuery,
} from "../firestore";
import getOrganization from "./getOrganization";

const mapHbvResearchPaperDbEntityToHbvResearchPaper: AsyncMapperFunction<
  HbvResearchPaperDbEntity,
  HbvResearchPaper
> = async (dbEntity: HbvResearchPaperDbEntity): Promise<HbvResearchPaper> => {
  const {
    organization: organizationRef,
    startDate,
    endDate,
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
    endDate: endDate.toDate(),
    ...rest,
  };
};

const listHbvResearchPapers: ListerForFirestoreQuery<HbvResearchPaper> =
  createListerForFirestoreQuery<HbvResearchPaperDbEntity, HbvResearchPaper>(
    hbvResearchPapersCollection.orderBy("startDate", "asc"),
    mapHbvResearchPaperDbEntityToHbvResearchPaper
  );

export default listHbvResearchPapers;
