import { MartialArtsStudio, MartialArtsStyle } from "../../types/api";
import { MartialArtsStyleDbEntity } from "../../types/db";
import { isNotNil } from "../../util";
import {
  AsyncMapperFunction,
  createGetterByIdForFirestoreCollection,
  GetterByIdForFirestoreCollection,
  martialArtsStylesCollection,
} from "../firestore";
import getMartialArtsStudio from "./getMartialArtsStudio";

const mapMartialArtsStyleDbEntityToMartialArtsStyle: AsyncMapperFunction<
  MartialArtsStyleDbEntity,
  MartialArtsStyle
> = async (dbEntity: MartialArtsStyleDbEntity): Promise<MartialArtsStyle> => {
  const { studios: studioRefs, ...rest } = dbEntity;
  const studios: MartialArtsStudio[] = (
    await Promise.all(
      studioRefs.map((studioRef) => getMartialArtsStudio(studioRef.id))
    )
  ).filter(isNotNil);
  return {
    studios,
    ...rest,
  } as MartialArtsStyle;
};

const getMartialArtsStyle: GetterByIdForFirestoreCollection<MartialArtsStyle> =
  createGetterByIdForFirestoreCollection(
    martialArtsStylesCollection,
    mapMartialArtsStyleDbEntityToMartialArtsStyle
  );

export default getMartialArtsStyle;
