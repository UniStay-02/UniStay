import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HostelDetails from './components/HostelDetails'
import HomePage from './pages/HomePage'
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Router>
       <HomePage/>
      <Routes>
         
        <Route path="/hostels/:id" element={<HostelDetails/>} />
        <Route path="/profile" element={<Profile/>} />
        
      </Routes>
    
      </Router>
      
    </>
  );
}

export default App;
