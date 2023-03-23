import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers/loadNotes";
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} from "./agendaSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());

    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/agenda/notes`));
    const setDocResp = await setDoc(newDoc, newNote);
    console.log({ newDoc, setDocResp });

    newNote.id = newDoc.id;
    //dispatch
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
    //dispatch( newNote)
    //dispatch( activeNote)
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("El uid del usuario no existe");
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { active: note } = getState().agenda;

    const noteToFiresStore = { ...note };
    delete noteToFiresStore.id;

    const docRef = doc(FirebaseDB, `${uid}/agenda/notes/${note.id}`);
    await setDoc(docRef, noteToFiresStore, { merge: true });

    dispatch(updateNote(note));
  };
};
