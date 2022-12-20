import {
  CollectionReference,
  getDocs,
  query,
  Query,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import { QueryConstraint } from "@firebase/firestore";

export type ListerAsyncMapperFunction<DbType, ApiType> = (
  doc: QueryDocumentSnapshot<DbType>
) => Promise<ApiType>;

const defaultMapper = async <DbType, ApiType>(
  doc: QueryDocumentSnapshot<DbType>
): Promise<ApiType> => {
  return (await doc.data()) as unknown as ApiType;
};

export type ListerForFirestoreCollection<ApiType> = () => Promise<ApiType[]>;

function createListerForFirestoreCollection<DbType, ApiType = DbType>(
  collection: CollectionReference<DbType>,
  mapper: ListerAsyncMapperFunction<DbType, ApiType> = defaultMapper,
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
    const apiTypePromises: Promise<ApiType>[] = querySnapshot.docs
      .filter((doc) => doc.exists)
      .map(mapper);
    const collectedApiTypePromises = await Promise.all(apiTypePromises);
    return collectedApiTypePromises.map((a: Awaited<ApiType>) => a as ApiType);
  };
}

export default createListerForFirestoreCollection;
