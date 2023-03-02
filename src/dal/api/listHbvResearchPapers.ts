import { orderBy } from "firebase/firestore";
import { isNil } from "lodash";

import { HbvResearchPaper } from "../../types/api";
import { HbvResearchPaperDbEntity } from "../../types/db";
import {
  AsyncMapperFunction,
  createListerForFirestoreCollection,
  hbvResearchPapersCollection,
  ListerForFirestoreCollection,
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

const listHbvResearchPapers: ListerForFirestoreCollection<HbvResearchPaper> =
  createListerForFirestoreCollection<
    HbvResearchPaperDbEntity,
    HbvResearchPaper
  >(
    hbvResearchPapersCollection,
    mapHbvResearchPaperDbEntityToHbvResearchPaper,
    orderBy("startDate", "asc")
  );

export default listHbvResearchPapers;
