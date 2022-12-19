import {
  getDocs,
  orderBy,
  query,
  Query,
  QuerySnapshot,
} from "firebase/firestore";
import { HbvResearchPaperDbEntity } from "../types/dbEntity";
import Collections from "../const/collections";
import { fsc } from "./firestore";
import getOrganization from "./getOrganization";
import { HbvResearchPaper } from "../types/data";
import { isNil } from "lodash";

export default async function listHbvResearchPapers(): Promise<
  HbvResearchPaper[]
> {
  const hbvResearchPapersQuery: Query<HbvResearchPaperDbEntity> =
    query<HbvResearchPaperDbEntity>(
      fsc(Collections.HbvResearch.Papers),
      orderBy("startDate", "asc")
    );
  const hbvResearchPapersSnapshot: QuerySnapshot<HbvResearchPaperDbEntity> =
    await getDocs<HbvResearchPaperDbEntity>(hbvResearchPapersQuery);
  return await Promise.all(
    hbvResearchPapersSnapshot.docs
      .filter((doc) => doc.exists)
      .map(async (doc): Promise<HbvResearchPaper> => {
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
      })
  );
}
