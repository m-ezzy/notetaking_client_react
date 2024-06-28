import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { NotesContextProvider } from "./contexts/NotesContext";
import Home from './pages/Home';
import './styles/index.css';

function App() {
  return (
    <div className="w-full h-svh relative">
      <nav className='w-full sticky top-0 p-4 bg-primary'>
				<div className='text-xl font-semibold'>Notetaking</div>
			</nav>
      <NotesContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            {/* <Route path="/note/:id" component={NotePage} /> */}
          </Routes>
        </BrowserRouter>
      </NotesContextProvider>
    </div>
  );
}

export default App;
