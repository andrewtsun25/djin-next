import { orderBy } from "firebase/firestore";

import { HolisticOfficeLink } from "../../types/api";
import {
  createListerForFirestoreCollection,
  holisticOfficeLinksCollection,
  ListerForFirestoreCollection,
} from "../firestore";

const listHolisticOfficeLinks: ListerForFirestoreCollection<HolisticOfficeLink> =
  createListerForFirestoreCollection(
    holisticOfficeLinksCollection,
    undefined,
    orderBy("name", "asc")
  );

export default listHolisticOfficeLinks;
