import { QueryDocumentSnapshot } from "firebase/firestore";

export type MapperFunction<DbType, ApiType> = (d: DbType) => ApiType;

export type AsyncMapperFunction<DbType, ApiType> = (
  d: DbType,
  id: string
) => Promise<ApiType>;

const identityMapper = <DbType, ApiType>(obj: DbType) => {
  return obj as unknown as ApiType;
};

export { identityMapper };
