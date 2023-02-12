import {
  createGetterByIdForFirestoreCollection,
  GetterByIdForFirestoreCollection,
  musicInstrumentsCollection,
} from "../firestore";
import { MusicInstrument } from "../../types/api";

const getMusicInstrument: GetterByIdForFirestoreCollection<MusicInstrument> =
  createGetterByIdForFirestoreCollection(musicInstrumentsCollection);

export default getMusicInstrument;
