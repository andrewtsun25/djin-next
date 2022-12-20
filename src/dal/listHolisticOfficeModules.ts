import { holisticOfficeModulesCollection } from "./firestore/collections";
import { orderBy } from "firebase/firestore";
import createListerForFirestoreCollection, {
  ListerForFirestoreCollection,
} from "./firestore/createListerForFirestoreCollection";
import { HolisticOfficeModule } from "../types/data";

const listHolisticOfficeModules: ListerForFirestoreCollection<HolisticOfficeModule> =
  createListerForFirestoreCollection(
    holisticOfficeModulesCollection,
    undefined,
    orderBy("name", "asc")
  );

export default listHolisticOfficeModules;
