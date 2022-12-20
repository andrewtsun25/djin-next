import { MartialArtsStudio, MartialArtsStyle } from "../../types/api";
import {
  AsyncMapperFunction,
  createGetterByIdForFirestoreCollection,
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

const getMartialArtsSyle = createGetterByIdForFirestoreCollection(
  martialArtsStylesCollection,
  mapMartialArtsStyleDbEntityToMartialArtsStyle
);

export default getMartialArtsStudio;
