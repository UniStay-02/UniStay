import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HostelDetails from './components/HostelDetails'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/hostels/:id" element={<HostelDetails/>} />
        <Route path="/profile" element={<Profile/>} />
        
      </Routes>

      </BrowserRouter>
      <HomePage/>
    </>
  );
}

export default App;
