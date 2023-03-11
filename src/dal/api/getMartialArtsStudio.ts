import { MartialArtsStudio } from "../../types/api";
import { MartialArtsStudioDbEntity } from "../../types/db";
import {
  createGetterByIdForFirestoreQuery,
  GetterByIdForFirestoreQuery,
  MapperFunction,
  martialArtsStudiosCollection,
} from "../firestore";

const mapMartialArtsStudioDbEntityToMartialArtsStudio: MapperFunction<
  MartialArtsStudioDbEntity,
  MartialArtsStudio
> = (dbEntity: MartialArtsStudioDbEntity): MartialArtsStudio => {
  const { joinDate, ...rest } = dbEntity;
  return {
    joinDate: joinDate.toDate(),
    ...rest,
  } as MartialArtsStudio;
};

const getMartialArtsStudio: GetterByIdForFirestoreQuery<MartialArtsStudio> =
  createGetterByIdForFirestoreQuery(
    martialArtsStudiosCollection,
    mapMartialArtsStudioDbEntityToMartialArtsStudio
  );

export default getMartialArtsStudio;
