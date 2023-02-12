import {
  CollectionReference,
  doc,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
} from "firebase/firestore";
import {
  createGetterAsyncMapperFunction,
  GetterAsyncMapperFunction,
} from "./createGetterAsyncMapperFunction";
import {
  AsyncMapperFunction,
  identityMapper,
  MapperFunction,
} from "./mapperFunction";

export type GetterByIdForFirestoreCollection<ApiType> = (
  id: string
) => Promise<ApiType | null>;

export default function createGetterByIdForFirestoreCollection<
  DbType,
  ApiType = DbType
>(
  collection: CollectionReference<DbType>,
  mapper:
    | MapperFunction<DbType, ApiType>
    | AsyncMapperFunction<DbType, ApiType> = identityMapper
): GetterByIdForFirestoreCollection<ApiType> {
  return async (id: string): Promise<ApiType | null> => {
    const documentReference: DocumentReference<DbType> = doc<DbType>(
      collection,
      id
    );
    const documentSnapshot: DocumentSnapshot<DbType> = await getDoc(
      documentReference
    );
    const getterAsyncMapperFunction: GetterAsyncMapperFunction<
      DbType,
      ApiType
    > = createGetterAsyncMapperFunction(mapper);
    return documentSnapshot.exists()
      ? getterAsyncMapperFunction(documentSnapshot, documentSnapshot.id)
      : null;
  };
}
