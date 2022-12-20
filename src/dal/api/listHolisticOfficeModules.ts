import { orderBy } from "firebase/firestore";
import { HolisticOfficeModule } from "../../types/api";
import {
  createListerForFirestoreCollection,
  ListerForFirestoreCollection,
  holisticOfficeModulesCollection,
} from "../firestore";

const listHolisticOfficeModules: ListerForFirestoreCollection<HolisticOfficeModule> =
  createListerForFirestoreCollection(
    holisticOfficeModulesCollection,
    undefined,
    orderBy("name", "asc")
  );

export default listHolisticOfficeModules;
