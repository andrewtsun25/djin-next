import { orderBy, QueryDocumentSnapshot } from "firebase/firestore";
import { HbvResearchPaperDbEntity } from "../../types/db";
import getOrganization from "./getOrganization";
import { HbvResearchPaper } from "../../types/api";
import { isNil } from "lodash";
import {
  createListerForFirestoreCollection,
  hbvResearchPapersCollection,
  ListerAsyncMapperFunction,
  ListerForFirestoreCollection,
} from "../firestore";

const mapHbvResearchPaperDbEntityToHbvResearchPaper: ListerAsyncMapperFunction<
  HbvResearchPaperDbEntity,
  HbvResearchPaper
> = async (
  doc: QueryDocumentSnapshot<HbvResearchPaperDbEntity>
): Promise<HbvResearchPaper> => {
  const {
    organization: organizationRef,
    startDate,
    endDate,
    ...rest
  } = doc.data();
  const organization = await getOrganization(organizationRef.id);
  if (isNil(organization)) {
    throw new Error(
      `Organization for HBV research paper with id ${doc.id} is null`
    );
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
