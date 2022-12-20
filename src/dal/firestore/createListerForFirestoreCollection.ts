import {
  CollectionReference,
  getDocs,
  query,
  Query,
  QuerySnapshot,
} from "firebase/firestore";
import { QueryConstraint } from "@firebase/firestore";
import {
  AsyncMapperFunction,
  identityMapper,
  MapperFunction,
} from "./mapperFunction";
import createListerAsyncMapperFunction, {
  ListerAsyncMapperFunction,
} from "./createListerAsyncMapperFunction";

export type ListerForFirestoreCollection<ApiType> = () => Promise<ApiType[]>;

function createListerForFirestoreCollection<DbType, ApiType = DbType>(
  collection: CollectionReference<DbType>,
  mapper:
    | MapperFunction<DbType, ApiType>
    | AsyncMapperFunction<DbType, ApiType> = identityMapper,
  ...queryConstraints: QueryConstraint[]
): ListerForFirestoreCollection<ApiType> {
  return async () => {
    const collectionQuery: Query<DbType> = query<DbType>(
      collection,
      ...queryConstraints
    );
    const querySnapshot: QuerySnapshot<DbType> = await getDocs<DbType>(
      collectionQuery
    );
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

export default createListerForFirestoreCollection;
