import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  ShieldCheck,
  Home,
  BedDouble,
  Wifi,
  Star,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-slate-50">

      {/* Hero */}
      <section className="bg-[#0E1733] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-orange-400 font-semibold mb-3">
              Student Accommodation Platform
            </p>

            <h1 className="text-5xl font-bold leading-tight">
              Find Your Perfect
              <span className="text-orange-400"> Student Home</span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-8">
              UniStay helps students discover verified hostels,
              apartments and bedsitters near their university with
              transparent pricing and trusted reviews.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/properties"
                className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
              >
                Browse Listings
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/register"
                className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#0E1733] transition"
              >
                Join UniStay
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 text-black">
            <h2 className="font-bold text-xl mb-5">
              Search Accommodation
            </h2>

            <div className="space-y-4">

              <div className="flex items-center border rounded-lg px-3">
                <MapPin className="text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="University or Location"
                  className="w-full p-3 outline-none"
                />
              </div>

              <div className="flex items-center border rounded-lg px-3">
                <BedDouble className="text-gray-400" size={18} />
                <select className="w-full p-3 outline-none bg-transparent">
                  <option>Room Type</option>
                  <option>Single Room</option>
                  <option>Bedsitter</option>
                  <option>Apartment</option>
                  <option>Hostel</option>
                </select>
              </div>

              <button className="w-full bg-[#0E1733] text-white py-3 rounded-lg hover:bg-[#16244f] transition flex justify-center items-center gap-2">
                <Search size={18} />
                Search
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* Features */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Why Choose UniStay?
            </h2>

            <p className="text-gray-500 mt-3">
              Making student housing simple, secure and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-xl shadow p-8 text-center">
              <ShieldCheck className="mx-auto text-orange-500" size={40} />
              <h3 className="font-bold mt-5">Verified Listings</h3>
              <p className="text-gray-500 mt-3">
                Every property is reviewed before appearing on UniStay.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-8 text-center">
              <Wifi className="mx-auto text-orange-500" size={40} />
              <h3 className="font-bold mt-5">Modern Amenities</h3>
              <p className="text-gray-500 mt-3">
                Wi-Fi, water, electricity and secure compounds.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-8 text-center">
              <Home className="mx-auto text-orange-500" size={40} />
              <h3 className="font-bold mt-5">Affordable Housing</h3>
              <p className="text-gray-500 mt-3">
                Compare prices and choose accommodation within your budget.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-8 text-center">
              <Star className="mx-auto text-orange-500" size={40} />
              <h3 className="font-bold mt-5">Student Reviews</h3>
              <p className="text-gray-500 mt-3">
                Read genuine experiences before booking a room.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* How It Works */}

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold mb-14">
            How UniStay Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="text-center">
              <div className="bg-orange-500 w-14 h-14 rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl">
                1
              </div>

              <h3 className="font-bold mt-5">
                Search
              </h3>

              <p className="text-gray-500 mt-3">
                Browse verified accommodation around your university.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-14 h-14 rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl">
                2
              </div>

              <h3 className="font-bold mt-5">
                Compare
              </h3>

              <p className="text-gray-500 mt-3">
                Compare prices, amenities and student ratings.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 w-14 h-14 rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl">
                3
              </div>

              <h3 className="font-bold mt-5">
                Book
              </h3>

              <p className="text-gray-500 mt-3">
                Contact landlords and reserve your next student home.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="bg-[#0E1733] text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Ready to Find Your Next Home?
          </h2>

          <p className="mt-5 text-gray-300 text-lg">
            Join hundreds of students using UniStay to discover safe,
            affordable accommodation.
          </p>

          <Link
            to="/register"
            className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition"
          >
            Get Started
          </Link>

        </div>
      </section>

    </div>
  );
}