import { HolisticOfficeLink } from "../../types/api";
import {
  createListerForFirestoreQuery,
  holisticOfficeLinksCollection,
  ListerForFirestoreQuery,
} from "../firestore";

const listHolisticOfficeLinks: ListerForFirestoreQuery<HolisticOfficeLink> =
  createListerForFirestoreQuery(
    holisticOfficeLinksCollection.orderBy("name", "asc")
  );

export default listHolisticOfficeLinks;
