import { orderBy } from "firebase/firestore";
import { HolisticOfficeLink } from "../../types/api";
import {
  createListerForFirestoreCollection,
  ListerForFirestoreCollection,
  holisticOfficeLinksCollection,
} from "../firestore";

const listHolisticOfficeLinks: ListerForFirestoreCollection<HolisticOfficeLink> =
  createListerForFirestoreCollection(
    holisticOfficeLinksCollection,
    undefined,
    orderBy("name", "asc")
  );

export default listHolisticOfficeLinks;
