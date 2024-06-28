import { useNotes } from '../contexts/NotesContext';
import NoteModal from './NoteModal';
import NoteList from './NoteList';

export default function Notes() {
  const { notes, dispatch } = useNotes();

  function handleAddNote(text) {
    dispatch({
      type: 'added',
      id: lastId++,
      text: text,
    });
  }
  function handleChangeNote(note) {
    dispatch({
      type: 'changed',
      note: note
    });
  }
  function handleDeleteNote(noteId) {
    dispatch({
      type: 'deleted',
      id: noteId
    });
  }
  return (
    <>
      <NoteModal onAddNote={handleAddNote} />
      <NoteList onChangeNote={handleChangeNote} onDeleteNote={handleDeleteNote} />
    </>
  );
}
