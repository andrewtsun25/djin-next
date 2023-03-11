import {
  CollectionReference,
  DocumentSnapshot,
} from "firebase-admin/firestore";

import {
  createGetterAsyncMapperFunction,
  GetterAsyncMapperFunction,
} from "./createGetterAsyncMapperFunction";
import {
  AsyncMapperFunction,
  identityMapper,
  MapperFunction,
} from "./mapperFunction";

export type GetterByIdForFirestoreQuery<ApiType> = (
  id: string
) => Promise<ApiType | null>;

export default function createGetterByIdForFirestoreCollection<
  DbType,
  ApiType = DbType
>(
  collection: CollectionReference,
  mapper:
    | MapperFunction<DbType, ApiType>
    | AsyncMapperFunction<DbType, ApiType> = identityMapper
): GetterByIdForFirestoreQuery<ApiType> {
  return async (id: string): Promise<ApiType | null> => {
    const documentSnapshot: DocumentSnapshot = await collection.doc(id).get();
    const getterAsyncMapperFunction: GetterAsyncMapperFunction<
      DbType,
      ApiType
    > = createGetterAsyncMapperFunction(mapper);
    return documentSnapshot.exists
      ? getterAsyncMapperFunction(documentSnapshot, documentSnapshot.id)
      : null;
  };
}
