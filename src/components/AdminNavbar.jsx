import { Link, useNavigate, useLocation } from "react-router-dom";
import { Building2, LayoutDashboard, PlusCircle, List, Users, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
 function AdminNavbar() {
  return (
    <nav className="bg-[#0E1733] sticky text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/admin" className="flex items-center gap-2">
          <Building2 className="w-7 h-7" />
          <span className="text-2xl font-bold">UniStay Admin</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/admindash"
            className="flex items-center gap-2 hover:text-yellow-300 transition"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link
            to="/addhostel"
            className="flex items-center gap-2 hover:text-yellow-300 transition"
          >
            <PlusCircle size={18} />
            Add Hostel
          </Link>

          <Link
            to="/managebookings"
            className="flex items-center gap-2 hover:text-yellow-300 transition"
          >
            <List size={18} />
            Bookings
          </Link>

          <Link
            to="/manageusers"
            className="flex items-center gap-2 hover:text-yellow-300 transition"
          >
            <Users size={18} />
            Users
          </Link>

        </div>

        {/* Logout */}
        <button className="flex items-center gap-2 bg-white text-red-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
          <LogOut size={18} />
          Logout
        </button>

      </div>
    </nav>
  );
}

export default AdminNavbar;