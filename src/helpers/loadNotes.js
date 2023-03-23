import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async ( uid = '') => {
    if ( !uid ) throw new Error('el uid del usuario no existe');

    const collectionRef = collection( FirebaseDB, `${ uid }/agenda/notes` );
    const docs = await getDocs( collectionRef );

    const notes = []
    docs.forEach( doc => {
        notes.push({ id: doc.id, ...doc.data() });
    });

    console.log(notes)
    return notes;
}