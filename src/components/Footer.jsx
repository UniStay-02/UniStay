import { Link } from "react-router-dom";
import {
  Building2,
  // Facebook,
  // Instagram,
  // Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0E1733] text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-[#F98603]" />
              <h2 className="text-2xl font-bold text-white">
                UniStay
              </h2>
            </div>

            <p className="mt-5 leading-7 text-gray-400">
              Find secure, affordable and comfortable student hostels near your
              campus. Compare prices, explore amenities and book with
              confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link to="/" className="hover:text-[#F98603] transition">
                Home
              </Link>

              <Link
                to="/hostels"
                className="hover:text-[#F98603] transition"
              >
                Hostels
              </Link>

              <Link
                to="/profile"
                className="hover:text-[#F98603] transition"
              >
                Profile
              </Link>

              <Link
                to="/contact"
                className="hover:text-[#F98603] transition"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Support
            </h3>

            <div className="flex flex-col gap-3">
              <p>Help Center</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <MapPin className="text-[#F98603]" size={18} />
                <span>Nairobi, Kenya</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-[#F98603]" size={18} />
                <span>+254 704 019 505</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-[#F98603]" size={18} />
                <span>support@unistay.com</span>
              </div>

              {/* <div className="flex gap-4 pt-2">
                <Facebook className="cursor-pointer hover:text-[#F98603] transition" />
                <Instagram className="cursor-pointer hover:text-[#F98603] transition" />
                <Twitter className="cursor-pointer hover:text-[#F98603] transition" />
              </div> */}

            </div>
          </div>

        </div>

        <hr className="border-gray-700 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>
            © 2026 UniStay. All rights reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Designed for students 
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;