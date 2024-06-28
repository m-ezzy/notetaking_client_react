import { useState, useRef } from "react";
import { useNotes } from "../contexts/NotesContext";
import makeRequest from "../js/makeRequest";

export default function NoteItem({ note }) {
  const titleRef = useRef();
  const contentRef = useRef();
  const { dispatch } = useNotes();

  function handleClickEdit() {
    const updatedNote = {
      _id: note._id,
      title: titleRef.current.value,
      content: contentRef.current.value,
      updated_at: new Date().getMilliseconds(),
    }
    makeRequest('/notes/update', { updatedNote });
    dispatch({ type: 'changed', editedNote: updatedNote });
  }
  function handleClickDelete() {
    makeRequest('/notes/delete', { note_id: note._id });
    dispatch({ type: 'deleted', note_id: note._id });
  }
	return (
    <div className='min-w-96 min-h-max border-2 border-primary rounded-lg p-2 bg-secondary'>
      <input type="text" className='w-full block border-b-2 bg-transparent text-xl' defaultValue={note.title} ref={titleRef} />
      <textarea className='w-full min-h-max bg-transparent resize-none' defaultValue={note.content} ref={contentRef}></textarea>
      <div className='flex justify-end text-sm'>{ new Date(note.updated_at).toUTCString() }</div>

      <div className='mt-2 flex gap-1'>
        <button className='rounded p-2 bg-primary' onClick={handleClickEdit}>Edit</button>
        <button className='rounded p-2 bg-primary' onClick={handleClickDelete}>Delete</button>
      </div>
    </div>
  );
}
