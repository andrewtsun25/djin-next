import { holisticOfficeLinksCollection } from "./firestore/collections";
import { orderBy } from "firebase/firestore";
import { HolisticOfficeLink } from "../types/data";
import {
  createListerForFirestoreCollection,
  ListerForFirestoreCollection,
} from "./firestore";

const listHolisticOfficeLinks: ListerForFirestoreCollection<HolisticOfficeLink> =
  createListerForFirestoreCollection(
    holisticOfficeLinksCollection,
    undefined,
    orderBy("name", "asc")
  );

export default listHolisticOfficeLinks;
