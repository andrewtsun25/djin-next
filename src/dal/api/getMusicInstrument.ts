import { MusicInstrument } from "../../types/api";
import {
  createGetterByIdForFirestoreQuery,
  GetterByIdForFirestoreQuery,
  musicInstrumentsCollection,
} from "../firestore";

const getMusicInstrument: GetterByIdForFirestoreQuery<MusicInstrument> =
  createGetterByIdForFirestoreQuery(musicInstrumentsCollection);

export default getMusicInstrument;
