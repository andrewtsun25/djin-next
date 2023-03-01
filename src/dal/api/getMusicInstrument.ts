import { MusicInstrument } from "../../types/api";
import {
  createGetterByIdForFirestoreCollection,
  GetterByIdForFirestoreCollection,
  musicInstrumentsCollection,
} from "../firestore";

const getMusicInstrument: GetterByIdForFirestoreCollection<MusicInstrument> =
  createGetterByIdForFirestoreCollection(musicInstrumentsCollection);

export default getMusicInstrument;
