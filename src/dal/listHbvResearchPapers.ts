import { orderBy, QueryDocumentSnapshot } from "firebase/firestore";
import { HbvResearchPaperDbEntity } from "../types/dbEntity";
import getOrganization from "./getOrganization";
import { HbvResearchPaper } from "../types/data";
import { isNil } from "lodash";
import { hbvResearchPapersCollection } from "./firestore/collections";
import createListerForFirestoreCollection, {
  ListerAsyncMapperFunction,
  ListerForFirestoreCollection,
} from "./firestore/createListerForFirestoreCollection";

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
