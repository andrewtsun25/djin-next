import { DocumentData, DocumentSnapshot } from "firebase-admin/firestore";
import { isNil } from "lodash";

import { AsyncMapperFunction, MapperFunction } from "./mapperFunction";

export type GetterAsyncMapperFunction<DbType, ApiType = DbType> = (
  doc: DocumentSnapshot,
  id: string
) => Promise<ApiType>;

export function createGetterAsyncMapperFunction<DbType, ApiType = DbType>(
  mapper: MapperFunction<DbType, ApiType> | AsyncMapperFunction<DbType, ApiType>
): GetterAsyncMapperFunction<DbType, ApiType> {
  return async (doc: DocumentSnapshot): Promise<ApiType> => {
    const docData: DocumentData | undefined = doc.data();
    if (isNil(docData)) {
      // In practice, this should never be reached.
      throw new Error("Cannot map undefined Firestore document snapshot data");
    }
    return mapper(docData as DbType, doc.id);
  };
}
