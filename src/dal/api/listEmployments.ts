import { Employment } from "../../types/api";
import { EmploymentDbEntity } from "../../types/db";
import { ListerForFirestoreQuery } from "../firestore";
import { employmentsCollection } from "../firestore/collections";
import createListerForFirestoreQuery from "../firestore/createListerForFirestoreQuery";
import { mapEmploymentDbEntityToEmployment } from "../mapper";

const listEmployments: ListerForFirestoreQuery<Employment> =
  createListerForFirestoreQuery<EmploymentDbEntity, Employment>(
    employmentsCollection.orderBy("startDate", "desc"),
    mapEmploymentDbEntityToEmployment,
  );

export default listEmployments;
