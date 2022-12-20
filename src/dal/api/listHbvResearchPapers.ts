import { orderBy } from "firebase/firestore";
import { HbvResearchPaperDbEntity } from "../../types/db";
import getOrganization from "./getOrganization";
import { HbvResearchPaper } from "../../types/api";
import { isNil } from "lodash";
import {
  AsyncMapperFunction,
  createListerForFirestoreCollection,
  hbvResearchPapersCollection,
  ListerForFirestoreCollection,
} from "../firestore";

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
    throw new Error("Organization for HBV research paper is null");
  }
  return {
    organization,
    startDate: startDate.toDate(),
    endDate: endDate.toDate(),
    ...rest,
  } as HbvResearchPaper;
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
