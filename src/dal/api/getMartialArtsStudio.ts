import { MartialArtsStudio } from "../../types/api";
import { MartialArtsStudioDbEntity } from "../../types/db";
import {
  createGetterByIdForFirestoreCollection,
  GetterByIdForFirestoreCollection,
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

const getMartialArtsStudio: GetterByIdForFirestoreCollection<MartialArtsStudio> =
  createGetterByIdForFirestoreCollection(
    martialArtsStudiosCollection,
    mapMartialArtsStudioDbEntityToMartialArtsStudio
  );

export default getMartialArtsStudio;
