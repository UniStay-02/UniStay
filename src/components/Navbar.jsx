import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar(){
    const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0E1733] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide"
        >
          Uni<span className="text-[#F98603]">Stay</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="hover:text-[#F98603] transition"
          >
            Home
          </Link>

          <Link
            to="/hostels"
            className="hover:text-[#F98603] transition"
          >
            Hostels
          </Link>

          <Link
            to="/about"
            className="hover:text-[#F98603] transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="hover:text-[#F98603] transition"
          >
            Contact
          </Link>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-[#0E1733] transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-[#F98603] hover:bg-orange-500 px-5 py-2 rounded-lg font-semibold transition"
          >
            Register
          </Link>
          <Link
            to="/addhostel"
            className="bg-[#F98603] hover:bg-orange-500 px-5 py-2 rounded-lg font-semibold transition"
          >
           Add hostel
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#16234b] px-6 py-5 space-y-4">
          <Link
            to="/"
            className="block hover:text-[#F98603]"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/hostels"
            className="block hover:text-[#F98603]"
            onClick={() => setOpen(false)}
          >
            Hostels
          </Link>

          <Link
            to="/about"
            className="block hover:text-[#F98603]"
            onClick={() => setOpen(false)}
          >
            About
          </Link>

          <Link
            to="/contact"
            className="block hover:text-[#F98603]"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

          <hr className="border-gray-600" />

          <Link
            to="/login"
            className="block text-center border border-white py-2 rounded-lg hover:bg-white hover:text-[#0E1733] transition"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>

          <Link
            to="/register"
            className="block text-center bg-[#F98603] py-2 rounded-lg font-semibold hover:bg-orange-500 transition"
            onClick={() => setOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
export default Navbar;