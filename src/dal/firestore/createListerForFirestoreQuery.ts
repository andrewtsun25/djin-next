import { Query, QuerySnapshot } from "firebase-admin/firestore";

import createListerAsyncMapperFunction, {
  ListerAsyncMapperFunction,
} from "./createListerAsyncMapperFunction";
import {
  AsyncMapperFunction,
  identityMapper,
  MapperFunction,
} from "./mapperFunction";

export type ListerForFirestoreQuery<ApiType> = () => Promise<ApiType[]>;

function createListerForFirestoreQuery<DbType, ApiType = DbType>(
  collection: Query,
  mapper:
    | MapperFunction<DbType, ApiType>
    | AsyncMapperFunction<DbType, ApiType> = identityMapper
): ListerForFirestoreQuery<ApiType> {
  return async () => {
    const querySnapshot: QuerySnapshot = await collection.get();

    const listerAsyncMapperFunction: ListerAsyncMapperFunction<
      DbType,
      ApiType
    > = createListerAsyncMapperFunction(mapper);
    const apiTypePromises: Promise<ApiType>[] = querySnapshot.docs
      .filter((doc) => doc.exists)
      .map(listerAsyncMapperFunction);
    return (await Promise.all(apiTypePromises)).map(
      (a: Awaited<ApiType>) => a as ApiType
    );
  };
}

export default createListerForFirestoreQuery;
