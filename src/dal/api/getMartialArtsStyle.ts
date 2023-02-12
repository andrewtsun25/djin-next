import { MartialArtsStudio, MartialArtsStyle } from "../../types/api";
import {
  AsyncMapperFunction,
  createGetterByIdForFirestoreCollection,
  GetterByIdForFirestoreCollection,
  martialArtsStylesCollection,
} from "../firestore";
import { MartialArtsStyleDbEntity } from "../../types/db";
import getMartialArtsStudio from "./getMartialArtsStudio";
import { isNotNil } from "../../util";

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
