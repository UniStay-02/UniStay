import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import {
  Search,
  MapPin,
  Star,
  BedDouble,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="bg-slate-50">

      {/* Hero */}
    <div className="bg-white text-gray-800">
      <Navbar />
      {/* Hero Section */}
     <section className="bg-[#0E1733] text-white">
  <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">

    {/* LEFT */}
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
      </div>
    </div>

    {/* RIGHT */}
    <div>
      <img
        src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
        alt="Hostel"
        className="rounded-3xl shadow-xl w-full h-[420px] object-cover"
      />
    </div>

  </div>
</section>

      {/* SEARCH */}
      <section className="-mt-10 relative z-10">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6">

          <div className="grid md:grid-cols-4 gap-4">

            <input
              type="text"
              placeholder="Search hostel..."
              className="border rounded-xl p-4"
            />

            <input
              type="text"
              placeholder="Location"
              className="border rounded-xl p-4"
            />

            <select className="border rounded-xl p-4">
              <option>Budget</option>
              <option>Below KES 5,000</option>
              <option>KES 5,000 - 8,000</option>
              <option>Above KES 8,000</option>
            </select>

            <button className="bg-[#F98603] text-white rounded-xl flex items-center justify-center gap-2">
              <Search size={20} />
              Search
            </button>

          </div>

        </div>
      </section>

      {/* FEATURED HOSTELS */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold text-[#0E1733]">
            Featured Hostels
          </h2>

          <Link
            to="/hostels"
            className="text-[#F98603] font-semibold flex items-center gap-2"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {[1,2,3].map((item)=>(
            <div
              key={item}
              className="bg-white rounded-2xl shadow overflow-hidden"
            >

              <img
                src={`https://picsum.photos/600/400?random=${item}`}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="font-bold text-xl text-[#0E1733]">
                  Sunrise Hostel
                </h3>

                <p className="flex items-center gap-2 mt-2 text-gray-500">
                  <MapPin size={15}/>
                  Eldoret
                </p>

                <div className="flex justify-between items-center mt-6">

                  <span className="text-[#F98603] text-2xl font-bold">
                    KES 6,500
                  </span>

                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star fill="currentColor" size={16}/>
                    4.8
                  </div>

                </div>

                <Link
                  to="/hostels/1"
                  className="mt-6 w-full bg-[#0E1733] text-white py-3 rounded-xl flex justify-center items-center gap-2"
                >
                  <BedDouble size={18}/>
                  View Details
                </Link>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* POPULAR LOCATIONS */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0E1733] mb-10">
            Popular Locations
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Eldoret",
              "Nakuru",
              "Kisumu",
              "Nairobi",
            ].map((location)=>(
              <div
                key={location}
                className="rounded-2xl overflow-hidden shadow"
              >

                <img
                  src={`https://picsum.photos/500/300?${location}`}
                  className="w-full h-44 object-cover"
                />

                <div className="p-5">

                  <h3 className="font-bold text-xl">
                    {location}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    100+ Hostels
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}

      <section className="bg-[#0E1733] text-white py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            What Students Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            {["Ian","Grace","Brian"].map((name)=>(
              <div
                key={name}
                className="bg-white/10 rounded-2xl p-8"
              >

                <p className="text-gray-300">
                  "UniStay helped me find a secure hostel near campus in just a few minutes."
                </p>

                <h4 className="mt-6 font-bold">
                  {name}
                </h4>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-white">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold text-[#0E1733]">
            Ready to Find Your Next Hostel?
          </h2>

          <p className="text-gray-600 mt-6 text-lg">
            Browse verified hostels and secure your accommodation today.
          </p>

          <Link
            to="/hostels"
            className="inline-flex items-center gap-2 mt-10 bg-[#F98603] text-white px-8 py-4 rounded-xl font-semibold"
          >
            Explore Hostels
            <ArrowRight size={18}/>
          </Link>

        </div>

      </section>
      <Footer/>

    </div>
    </div>
  );
}