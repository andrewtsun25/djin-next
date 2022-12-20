import { holisticOfficeLinksCollection } from "./firestore/collections";
import { orderBy } from "firebase/firestore";
import createListerForFirestoreCollection, {
  ListerForFirestoreCollection,
} from "./firestore/createListerForFirestoreCollection";
import { HolisticOfficeLink } from "../types/data";

const listHolisticOfficeLinks: ListerForFirestoreCollection<HolisticOfficeLink> =
  createListerForFirestoreCollection(
    holisticOfficeLinksCollection,
    undefined,
    orderBy("name", "asc")
  );

export default listHolisticOfficeLinks;
