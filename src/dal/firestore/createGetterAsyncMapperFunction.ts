import { DocumentSnapshot } from "firebase/firestore";
import { isNil } from "lodash";

import { AsyncMapperFunction, MapperFunction } from "./mapperFunction";

export type GetterAsyncMapperFunction<DbType, ApiType = DbType> = (
  doc: DocumentSnapshot<DbType>,
  id: string
) => Promise<ApiType>;

export function createGetterAsyncMapperFunction<DbType, ApiType = DbType>(
  mapper: MapperFunction<DbType, ApiType> | AsyncMapperFunction<DbType, ApiType>
): GetterAsyncMapperFunction<DbType, ApiType> {
  return async (doc: DocumentSnapshot<DbType>): Promise<ApiType> => {
    const docData: DbType | undefined = doc.data();
    if (isNil(docData)) {
      // In practice, this should never be reached.
      throw new Error("Cannot map undefined Firestore document snapshot data");
    }
    return mapper(docData, doc.id);
  };
}
