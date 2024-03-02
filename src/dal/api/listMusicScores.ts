import { isNil, map } from "lodash";

import {
  MusicInstrument,
  MusicInstrumentType,
  MusicScore,
} from "../../types/api";
import { MusicInstrumentDbEntity, MusicScoreDbEntity } from "../../types/db";
import {
  AsyncMapperFunction,
  createListerForFirestoreQuery,
  ListerForFirestoreQuery,
  musicScoresCollection,
} from "../firestore";
import getMusicInstrument from "./getMusicInstrument";

const mapMusicScoreDbEntityToMusicScore: AsyncMapperFunction<
  MusicScoreDbEntity,
  MusicScore
> = async (dbEntity: MusicScoreDbEntity): Promise<MusicScore> => {
  const { date, sections: sectionsMap, ...restOfMusicScore } = dbEntity;
  const musicInstruments: MusicInstrument[] = await Promise.all(
    map(
      sectionsMap,
      async (
        scoreUrl: string,
        instrumentId: string,
      ): Promise<MusicInstrument> => {
        const musicInstrument: MusicInstrumentDbEntity | null =
          await getMusicInstrument(instrumentId);
        if (isNil(musicInstrument)) {
          throw new Error(
            `Music instrument information for ${instrumentId} is missing`,
          );
        }
        const { type, ...restOfMusicInstrument } = musicInstrument;
        return {
          ...restOfMusicInstrument,
          type: type as MusicInstrumentType,
          scoreUrl,
        };
      },
    ),
  );
  return {
    date: date.toDate(),
    musicInstruments: musicInstruments.sort((mi1, mi2) =>
      mi1.name.localeCompare(mi2.name),
    ),
    ...restOfMusicScore,
  };
};

const listMusicScores: ListerForFirestoreQuery<MusicScore> =
  createListerForFirestoreQuery<MusicScoreDbEntity, MusicScore>(
    musicScoresCollection.orderBy("date", "desc"),
    mapMusicScoreDbEntityToMusicScore,
  );

export default listMusicScores;
