import { useNotes } from '../contexts/NotesContext';
import NoteItem from './NoteItem';

export default function NoteList() {
	const { notes } = useNotes();
	
	let noteItems = [];
	if(notes) {
		noteItems = notes.map((note, i) => {
			return (<NoteItem key={note._id} note={note} />);
		});
	} else {
		noteItems = <p>Loading...</p>;
	}
	return (<div className='flex flex-wrap gap-2'>{noteItems}</div>);
}
