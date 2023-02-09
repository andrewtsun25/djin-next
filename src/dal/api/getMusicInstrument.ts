import {
  createGetterByIdForFirestoreCollection,
  musicInstrumentsCollection,
} from "../firestore";

const getMusicInstrument = createGetterByIdForFirestoreCollection(
  musicInstrumentsCollection
);

export default getMusicInstrument;
