import { holisticOfficeModulesCollection } from "./firestore/collections";
import { orderBy } from "firebase/firestore";
import { HolisticOfficeModule } from "../types/data";
import {
  createListerForFirestoreCollection,
  ListerForFirestoreCollection,
} from "./firestore";

const listHolisticOfficeModules: ListerForFirestoreCollection<HolisticOfficeModule> =
  createListerForFirestoreCollection(
    holisticOfficeModulesCollection,
    undefined,
    orderBy("name", "asc")
  );

export default listHolisticOfficeModules;
