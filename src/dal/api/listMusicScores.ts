import { orderBy } from "firebase/firestore";
import { MusicInstrumentDbEntity, MusicScoreDbEntity } from "../../types/db";
import {
  MusicInstrumentType,
  MusicInstrument,
  MusicScore,
} from "../../types/api";
import { entries, isNil } from "lodash";
import {
  AsyncMapperFunction,
  createListerForFirestoreCollection,
  ListerForFirestoreCollection,
  musicScoresCollection,
} from "../firestore";
import getMusicInstrument from "./getMusicInstrument";

const mapMusicScoreDbEntityToMusicScore: AsyncMapperFunction<
  MusicScoreDbEntity,
  MusicScore
> = async (dbEntity: MusicScoreDbEntity): Promise<MusicScore> => {
  const { date, sections: sectionsMap, ...restOfMusicScore } = dbEntity;
  const musicInstruments: MusicInstrument[] = await Promise.all(
    entries(sectionsMap).map(
      async ([instrumentId, scoreUrl]): Promise<MusicInstrument> => {
        const musicInstrument: MusicInstrumentDbEntity | null =
          await getMusicInstrument(instrumentId);
        if (isNil(musicInstrument)) {
          throw new Error(
            `Music instrument information for ${instrumentId} is missing`
          );
        }
        const { type, ...restOfMusicInstrument } = musicInstrument;
        return {
          ...restOfMusicInstrument,
          type: type as MusicInstrumentType,
          scoreUrl,
        };
      }
    )
  );
  return {
    date: date.toDate(),
    musicInstruments: musicInstruments.sort((mi1, mi2) =>
      mi1.name.localeCompare(mi2.name)
    ),
    ...restOfMusicScore,
  };
};

const listMusicScores: ListerForFirestoreCollection<MusicScore> =
  createListerForFirestoreCollection<MusicScoreDbEntity, MusicScore>(
    musicScoresCollection,
    mapMusicScoreDbEntityToMusicScore,
    orderBy("date", "desc")
  );

export default listMusicScores;
