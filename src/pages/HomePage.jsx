import { Link } from "react-router-dom";
import Navbar from "src/components/Navbar";
import { Search, MapPin, ShieldCheck, Wifi, BedDouble } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-[#0E1733] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:flex items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-extrabold leading-tight">
              Find Your Perfect
              <span className="text-[#F98603]"> Student Hostel</span>
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              Discover affordable, secure, and comfortable hostels near your
              campus. Compare prices, explore amenities, and book with ease.
            </p>

            {/* <div className="mt-8 flex gap-4">
              <Link
                to="/hostels"
                className="bg-[#F98603] hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Browse Hostels
              </Link>

              <Link
                to="/register"
                className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#0E1733] transition"
              >
                Get Started
              </Link>
            </div> */}
          </div>

          <div className="mt-12 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700"
              alt="Student Hostel"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="-mt-10 relative z-10">
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-6">
          <div className="grid md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search hostel..."
              className="border rounded-lg p-3 outline-none"
            />

            <input
              type="text"
              placeholder="Location"
              className="border rounded-lg p-3 outline-none"
            />

            <select className="border rounded-lg p-3">
              <option>Budget</option>
              <option>Below Ksh 4,000</option>
              <option>Ksh 4,000 - 7,000</option>
              <option>Above Ksh 7,000</option>
            </select>

            <button className="bg-[#F98603] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-orange-500">
              <Search size={20} />
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#0E1733]">
            Why Choose Hostel Finder?
          </h2>

          <p className="text-center text-gray-500 mt-3">
            Everything you need to find the right place to stay.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <MapPin className="mx-auto text-[#F98603]" size={40} />
              <h3 className="mt-5 text-xl font-semibold">
                Nearby Hostels
              </h3>
              <p className="text-gray-500 mt-3">
                Find hostels close to your university with accurate locations.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <ShieldCheck className="mx-auto text-[#F98603]" size={40} />
              <h3 className="mt-5 text-xl font-semibold">
                Safe & Verified
              </h3>
              <p className="text-gray-500 mt-3">
                Browse verified hostels with trusted reviews and ratings.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <Wifi className="mx-auto text-[#F98603]" size={40} />
              <h3 className="mt-5 text-xl font-semibold">
                Modern Amenities
              </h3>
              <p className="text-gray-500 mt-3">
                Compare Wi-Fi, parking, laundry, security, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hostels */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* <div className="flex justify-between items-center">
            <h2 className="text-4xl font-bold text-[#0E1733]">
              Featured Hostels
            </h2>

            <Link
              to="/hostels"
              className="text-[#F98603] font-semibold"
            >
              View All →
            </Link>
          </div> */}

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition"
              >
                <img
                  src={`https://picsum.photos/500/300?random=${item}`}
                  alt="Hostel"
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <h3 className="font-bold text-xl">
                    Sunrise Hostel
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Eldoret • 5 mins from campus
                  </p>

                  <div className="flex items-center justify-between mt-5">
                    <span className="font-bold text-[#F98603]">
                      Ksh 6,500 / month
                    </span>

                    <BedDouble className="text-[#0E1733]" />
                  </div>

                  {/* <Link
                    to="/hostels/1"
                    className="block text-center mt-6 bg-[#0E1733] text-white py-3 rounded-lg hover:bg-[#16234b]"
                  >
                    View Details
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0E1733] text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Ready to Find Your Next Hostel?
          </h2>

          <p className="mt-4 text-gray-300">
            Join hundreds of students who have found comfortable accommodation
            through Hostel Finder.
          </p>

          {/* <Link
            to="/hostels"
            className="inline-block mt-8 bg-[#F98603] px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 transition"
          >
            Explore Hostels
          </Link> */}
        </div>
      </section>
    </div>
  );
}