import { useEffect, useRef } from 'react';
import { useNotes } from '../contexts/NotesContext';
import makeRequest from '../js/makeRequest';

export default function NoteModal() {
	const titleRef = useRef();
	const contentRef = useRef();

	const { dispatch } = useNotes();

	async function handleClickCreate() {
		const title = titleRef.current.value;
		const content = contentRef.current.innerText;
		let data = await makeRequest('/notes/create', { title, content });
		dispatch({ type: 'added', note: { _id: data.note_id, title, content, updated_at: new Date().toISOString() } });
		titleRef.current.value = '';
		contentRef.current.innerText = '';
	}
	return (
		<div className='w-3/5 mx-auto mb-4 border-2 rounded-md p-2'>
			<input className='w-full block border-b-2 pb-1 bg-transparent' type='text' placeholder='type title here' ref={titleRef} />
			{/* <textarea className='w-full min-h-max bg-transparent resize-none' placeholder='type content here' ref={contentRef}></textarea> */}
			<div className="w-full min-h-10 bg-transparent" role="text" contentEditable ref={contentRef}></div>
			<button className='rounded p-2 bg-primary text-xl text-bold' onClick={handleClickCreate}>Create</button>
		</div>
	);
}
