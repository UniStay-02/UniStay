import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HostelDetails from './components/HostelDetails'
import HomePage from './pages/HomePage'
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import AddHostel from './pages/AddHostel'
import ManageUsers from './pages/ManageUsers'

function App() {
  return (
    <>
      <Router>
       {/* <HomePage/> */}
      <Routes>
         
        <Route path="/" element={<HomePage/>} />
        <Route path="/hostels/:id" element={<HostelDetails/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/addhostel" element={<AddHostel/>} />
        <Route path="/manageusers" element={<ManageUsers/>} />
        
      </Routes>
    
      </Router>
      
    </>
  );
}

export default App;
