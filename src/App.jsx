import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HostelDetails from './components/HostelDetails'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/hostels/:id" element={<HostelDetails/>} />
        
      </Routes>

      </BrowserRouter>
      <HomePage/>
    </>
  );
}

export default App;
