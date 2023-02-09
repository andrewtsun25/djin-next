import { QueryDocumentSnapshot } from "firebase/firestore";
import { AsyncMapperFunction, MapperFunction } from "./mapperFunction";

export type ListerAsyncMapperFunction<DbType, ApiType = DbType> = (
  doc: QueryDocumentSnapshot<DbType>
) => Promise<ApiType>;

export default function createListerAsyncMapperFunction<
  DbType,
  ApiType = DbType
>(
  mapper: MapperFunction<DbType, ApiType> | AsyncMapperFunction<DbType, ApiType>
) {
  return async (doc: QueryDocumentSnapshot<DbType>): Promise<ApiType> =>
    mapper(doc.data(), doc.id);
}
