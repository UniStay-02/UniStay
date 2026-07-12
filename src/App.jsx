import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HostelDetails from './components/HostelDetails'
import HomePage from './pages/HomePage'
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import AddHostel from './pages/AddHostel'
import ManageUsers from './pages/ManageUsers'
import ManageBookings from './pages/ManageBookings'
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Hostels from './pages/Hostels';
import ProtectedRoute from './components/ProtectedRoute';

// import ManageListings from './pages/ManageListings';
// import AdminDash from './pages/AdminDash';
import BookingForm from './pages/BookingForm';
import BookingConfirmation from './pages/BookingConfirmation';
import AdminDashboard from './pages/AdminDash';
import ManageListings from './pages/ManageListings';


function App() {
  return (
    <>
      <Router>
        <AuthProvider>
       {/* <HomePage/> */}
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hostels/:id" element={<HostelDetails />} />
            <Route path="/hostels" element={<Hostels />} />
            <Route path="/booking/:id" element={<BookingForm />} />

            <Route element={<ProtectedRoute />}>
              <Route
                path="/booking-confirmation"
                element={<BookingConfirmation />}
              />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addhostel" element={<AddHostel />} />
            <Route path="/manageusers" element={<ManageUsers />} />
            <Route path="/managebookings" element={<ManageBookings />} />
            <Route path="/managelistings" element={<ManageListings />} />
            <Route path="/admindash" element={<AdminDashboard />} />

      </Routes>
      </AuthProvider>
    
      </Router>
      
    </>
  );
}

export default App;
