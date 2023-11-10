import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Students from './pages/students/Students';
import EditStudent from './pages/editStudent/EditStudent';
import Search from './pages/search/Search';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/editStudent/:id" element={<EditStudent />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
