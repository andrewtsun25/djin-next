import { QueryDocumentSnapshot } from "firebase-admin/firestore";

import { AsyncMapperFunction, MapperFunction } from "./mapperFunction";

export type ListerAsyncMapperFunction<DbType, ApiType = DbType> = (
  doc: QueryDocumentSnapshot
) => Promise<ApiType>;

export default function createListerAsyncMapperFunction<
  DbType,
  ApiType = DbType
>(
  mapper: MapperFunction<DbType, ApiType> | AsyncMapperFunction<DbType, ApiType>
) {
  return async (doc: QueryDocumentSnapshot): Promise<ApiType> =>
    mapper(doc.data() as DbType, doc.id);
}
