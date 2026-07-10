import { Link } from "react-router-dom";
import { Search, MapPin, ShieldCheck, Wifi, BedDouble, Star, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[#0E1733] text-white overflow-hidden">
        {/* Ambient glow accents */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F98603]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 py-28 lg:py-36 lg:flex items-center justify-between gap-16 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-amber-300/90 border border-amber-300/30 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-sm">
              <Star size={12} className="fill-amber-300 text-amber-300" />
              Curated student living
            </span>

            <h1 className="mt-6 text-6xl font-extrabold leading-[1.05] tracking-tight">
              Find Your
              <span className="block bg-gradient-to-r from-[#F98603] to-amber-300 bg-clip-text text-transparent">
                Perfect Stay
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300/90 leading-relaxed max-w-lg">
              Discover handpicked hostels near your campus — verified, secure,
              and built for comfortable student living. No compromises.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                to="/hostels"
                className="group bg-gradient-to-r from-[#F98603] to-amber-500 text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-orange-900/30 hover:shadow-orange-900/50 transition-all flex items-center gap-2"
              >
                Browse Hostels
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/register"
                className="border border-white/20 px-7 py-3.5 rounded-full hover:bg-white/10 backdrop-blur-sm transition font-medium"
              >
                Get Started
              </Link>
            </div>

            <div className="mt-14 flex items-center gap-8 text-sm text-gray-400">
              <div>
                <p className="text-2xl font-bold text-white">500+</p>
                <p>Verified hostels</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-2xl font-bold text-white">12k+</p>
                <p>Happy students</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-2xl font-bold text-white">4.8</p>
                <p>Average rating</p>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-400/20 to-transparent rounded-3xl blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700"
              alt="Student Hostel"
              className="relative rounded-3xl shadow-2xl ring-1 ring-white/10 w-full max-w-md object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-[#0E1733] rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">
              <div className="bg-amber-100 rounded-full p-2">
                <ShieldCheck className="text-[#F98603]" size={20} />
              </div>
              <div>
                <p className="font-bold text-sm">Verified & Safe</p>
                <p className="text-xs text-gray-500">Every listing checked</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="-mt-10 relative z-10">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl shadow-gray-300/50 rounded-2xl p-6 ring-1 ring-gray-100">
          <div className="grid md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search hostel..."
              className="border border-gray-200 rounded-xl p-3.5 outline-none focus:ring-2 focus:ring-[#F98603]/30 focus:border-[#F98603] transition"
            />

            <input
              type="text"
              placeholder="Location"
              className="border border-gray-200 rounded-xl p-3.5 outline-none focus:ring-2 focus:ring-[#F98603]/30 focus:border-[#F98603] transition"
            />

            <select className="border border-gray-200 rounded-xl p-3.5 outline-none focus:ring-2 focus:ring-[#F98603]/30 focus:border-[#F98603] transition">
              <option>Budget</option>
              <option>Below Ksh 4,000</option>
              <option>Ksh 4,000 - 7,000</option>
              <option>Above Ksh 7,000</option>
            </select>

            <button className="bg-gradient-to-r from-[#F98603] to-amber-500 text-white rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-orange-900/20 transition-all font-semibold">
              <Search size={20} />
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <span className="block text-center text-xs tracking-widest uppercase text-[#F98603] font-semibold mb-3">
            Why Hostel Finder
          </span>
          <h2 className="text-4xl font-bold text-center text-[#0E1733] tracking-tight">
            Built Around You
          </h2>

          <p className="text-center text-gray-500 mt-3 max-w-lg mx-auto">
            Everything you need to find the right place to stay, without the guesswork.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: MapPin, title: "Nearby Hostels", text: "Find hostels close to your university with accurate locations." },
              { icon: ShieldCheck, title: "Safe & Verified", text: "Browse verified hostels with trusted reviews and ratings." },
              { icon: Wifi, title: "Modern Amenities", text: "Compare Wi-Fi, parking, laundry, security, and more." },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-8 text-center ring-1 ring-gray-100"
              >
                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                  <Icon className="text-[#F98603]" size={28} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#0E1733]">{title}</h3>
                <p className="text-gray-500 mt-3 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hostels */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-2">
            <div>
              <span className="block text-xs tracking-widest uppercase text-[#F98603] font-semibold mb-3">
                Handpicked
              </span>
              <h2 className="text-4xl font-bold text-[#0E1733] tracking-tight">
                Featured Hostels
              </h2>
            </div>

            <Link
              to="/hostels"
              className="text-[#F98603] font-semibold flex items-center gap-1 hover:gap-2 transition-all"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-white ring-1 ring-gray-100 transition-all"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={`https://picsum.photos/500/300?random=${item}`}
                    alt="Hostel"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-semibold text-[#0E1733] px-3 py-1 rounded-full flex items-center gap-1">
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    4.8
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl text-[#0E1733]">
                    Sunrise Hostel
                  </h3>

                  <p className="text-gray-500 mt-2 flex items-center gap-1.5 text-sm">
                    <MapPin size={14} />
                    Eldoret • 5 mins from campus
                  </p>

                  <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">
                    <span className="font-bold text-[#F98603] text-lg">
                      Ksh 6,500<span className="text-sm text-gray-400 font-normal"> / month</span>
                    </span>

                    <div className="bg-gray-50 rounded-full p-2.5">
                      <BedDouble className="text-[#0E1733]" size={18} />
                    </div>
                  </div>

                  <Link
                    to="/hostels/1"
                    className="block text-center mt-6 bg-[#0E1733] text-white py-3 rounded-xl hover:bg-[#16234b] transition font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#0E1733] text-white py-24 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F98603]/10 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-4xl font-bold tracking-tight">
            Ready to Find Your Next Hostel?
          </h2>

          <p className="mt-4 text-gray-300/90 max-w-lg mx-auto">
            Join thousands of students who have found comfortable, secure accommodation
            through Hostel Finder.
          </p>

          <Link
            to="/hostels"
            className="inline-flex items-center gap-2 mt-10 bg-gradient-to-r from-[#F98603] to-amber-500 px-8 py-4 rounded-full font-semibold shadow-lg shadow-orange-900/30 hover:shadow-orange-900/50 transition-all"
          >
            Explore Hostels
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}