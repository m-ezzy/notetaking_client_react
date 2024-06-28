import { createContext, useContext, useEffect, useState, useReducer } from "react";
import makeRequest from '../js/makeRequest';

function notesReducer(notes, action) {
	if(action.type === 'filled') {
		return action.notes;
	} else if(action.type === 'added') {
		return [...notes, action.note];
	} else if(action.type === 'changed') {
		return notes.map(note => note._id === action.editedNote._id ? action.editedNote : note);
	} else if(action.type === 'deleted') {
		return notes.filter(note => note._id !== action.note_id);
	}
	return notes;
}

const NotesContext = createContext(null);

function useNotes() {
  return useContext(NotesContext);
}

function NotesContextProvider(props) {
  // const [notes, setNotes] = useState(null);
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
		async function fetchData() {
			const data = await makeRequest('/notes');
			// setNotes(prev => data);
			dispatch({ type: 'filled', notes: data.notes });
		}
		fetchData();
	}, []);
  return <NotesContext.Provider value={{ notes, dispatch }}>{props.children}</NotesContext.Provider>;
}

export { NotesContextProvider, useNotes };
