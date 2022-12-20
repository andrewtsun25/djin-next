import {
  CollectionReference,
  doc,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
} from "firebase/firestore";

export type GetterAsyncMapperFunction<DbType, ApiType> = (
  doc: DocumentSnapshot<DbType>
) => Promise<ApiType>;

const defaultMapper = <DbType, ApiType>(doc: DocumentSnapshot<DbType>) => {
  return doc.data() as unknown as ApiType;
};

export type GetterByIdForFirestoreCollection<ApiType> = (
  id: string
) => Promise<ApiType | null>;

function createGetterByIdForFirestoreCollection<DbType, ApiType = DbType>(
  collection: CollectionReference<DbType>,
  mapper: GetterAsyncMapperFunction<DbType, ApiType> = defaultMapper
): GetterByIdForFirestoreCollection<ApiType> {
  return async (id: string): Promise<ApiType | null> => {
    const documentReference: DocumentReference<DbType> = doc<DbType>(
      collection,
      id
    );
    const documentSnapshot: DocumentSnapshot<DbType> = await getDoc(
      documentReference
    );
    return documentSnapshot.exists() ? mapper(documentSnapshot) : null;
  };
}

export default createGetterByIdForFirestoreCollection;
