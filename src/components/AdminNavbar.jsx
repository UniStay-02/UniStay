import { Link, useNavigate, useLocation } from "react-router-dom";
import { Building2, LayoutDashboard, PlusCircle, List, Users, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const navLinks = [
  { to: "/admindash", label: "Dashboard", icon: LayoutDashboard },
  { to: "/addhostel", label: "Add Hostel", icon: PlusCircle },
  { to: "/managebookings", label: "Bookings", icon: List },
  { to: "/manageusers", label: "Users", icon: Users },
];

 function AdminNavbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
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
          {navLinks.map(({ to, label, icon: Icon }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-2 pb-1 border-b-2 transition ${
                  isActive
                    ? "text-[#F98603] border-[#F98603] font-semibold"
                    : "border-transparent hover:text-[#F98603]"
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            );
          })}
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