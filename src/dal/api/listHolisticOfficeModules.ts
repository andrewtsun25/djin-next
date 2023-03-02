import { orderBy } from "firebase/firestore";

import { HolisticOfficeModule } from "../../types/api";
import {
  createListerForFirestoreCollection,
  holisticOfficeModulesCollection,
  ListerForFirestoreCollection,
} from "../firestore";

const listHolisticOfficeModules: ListerForFirestoreCollection<HolisticOfficeModule> =
  createListerForFirestoreCollection(
    holisticOfficeModulesCollection,
    undefined,
    orderBy("name", "asc")
  );

export default listHolisticOfficeModules;
