import { MartialArtsStudio } from "../../types/api";
import {
  createGetterByIdForFirestoreCollection,
  MapperFunction,
  martialArtsStudiosCollection,
} from "../firestore";
import { MartialArtsStudioDbEntity } from "../../types/db";

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

const getMartialArtsStudio = createGetterByIdForFirestoreCollection(
  martialArtsStudiosCollection,
  mapMartialArtsStudioDbEntityToMartialArtsStudio
);

export default getMartialArtsStudio;
