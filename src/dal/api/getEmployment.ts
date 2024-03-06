import { Employment } from "../../types/api";
import {
  createGetterByIdForFirestoreQuery,
  GetterByIdForFirestoreQuery,
} from "../firestore";
import { employmentsCollection } from "../firestore/collections";
import { mapEmploymentDbEntityToEmployment } from "../mapper";

const getEmployment: GetterByIdForFirestoreQuery<Employment> =
  createGetterByIdForFirestoreQuery(
    employmentsCollection,
    mapEmploymentDbEntityToEmployment,
  );

export default getEmployment;
