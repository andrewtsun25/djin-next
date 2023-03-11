import { HolisticOfficeModule } from "../../types/api";
import {
  createListerForFirestoreQuery,
  holisticOfficeModulesCollection,
  ListerForFirestoreQuery,
} from "../firestore";

const listHolisticOfficeModules: ListerForFirestoreQuery<HolisticOfficeModule> =
  createListerForFirestoreQuery(
    holisticOfficeModulesCollection.orderBy("name", "asc"),
    undefined
  );

export default listHolisticOfficeModules;
