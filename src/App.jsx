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
import { AdminRoute } from './components/AdminRoute';

// import ManageListings from './pages/ManageListings';
import AdminDash from './pages/AdminDash';
import BookingForm from './pages/BookingForm';
import BookingConfirmation from './pages/BookingConfirmation';
import About from './pages/About';

function App() {
  return (
      <Router>
        <AuthProvider>
       {/* <HomePage/> */}
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hostels/:id" element={<HostelDetails />} />
            <Route path="/hostels" element={<Hostels />} />
            <Route path="/booking/:id" element={<BookingForm />} />
            <Route path="/booking/:i" element={<BookingForm />} />
            <Route path ="/about" element={<About/>}/>
            <Route path ="/login" element={<Login/>}/>
            <Route path ="/register" element={<Register/>}/>
            <Route path ="/contact" element={<Contact/>}/>

          <Route
            path="/booking-confirmation"
            element={<ProtectedRoute><BookingConfirmation /></ProtectedRoute>}
          />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

          <Route path="/admindash" element={<AdminRoute><AdminDash /></AdminRoute>} />
          <Route path="/addhostel" element={<AdminRoute><AddHostel /></AdminRoute>} />
          <Route path="/manageusers" element={<AdminRoute><ManageUsers /></AdminRoute>} />
          <Route path="/managebookings" element={<AdminRoute><ManageBookings /></AdminRoute>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;