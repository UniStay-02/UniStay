import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { MapPin, BedDouble, Wallet } from "lucide-react";

const NAVY = "#0E1733";
const ORANGE = "#F98603";

 function DisplayHostels() {
  const [hostels, setHostels] = useState([]);

  useEffect(() => {
    const storedHostels =
      JSON.parse(localStorage.getItem("hostels")) || [];

    setHostels(storedHostels);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p
            className="font-semibold"
            style={{ color: ORANGE }}
          >
            Student Accommodation
          </p>

          <h1
            className="text-5xl font-bold mt-4"
            style={{ color: NAVY }}
          >
            Browse Available Hostels
          </h1>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
            Discover verified hostels near your university and find
            your next home.
          </p>

        </div>
      </section>

      {/* Hostel Cards */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          {hostels.length === 0 ? (

            <div className="text-center py-20">

              <h2
                className="text-3xl font-bold"
                style={{ color: NAVY }}
              >
                No Hostels Available
              </h2>

              <p className="text-gray-500 mt-3">
                No hostel listings have been added yet.
              </p>

            </div>

          ) : (

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {hostels.map((hostel) => (

                <div
                  key={hostel.id}
                  className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
                >

                 <img
  src={
    hostel.coverImage ||
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900"
  }
  alt={hostel.hostelName}
  className="w-full h-56 object-cover"
/>

                  <div className="p-6">

                    <h2
                      className="text-xl font-bold"
                      style={{ color: NAVY }}
                    >
                      {hostel.hostelName}
                    </h2>

                    <p className="text-gray-500 mt-2 line-clamp-2">
                      {hostel.description}
                    </p>

                    <div className="mt-5 space-y-3">

                      <div className="flex items-center gap-2 text-gray-600">

                        <MapPin
                          size={18}
                          color={ORANGE}
                        />

                        <span>
                          {hostel.area}, {hostel.county}
                        </span>

                      </div>

                      <div className="flex items-center gap-2 text-gray-600">

                        <BedDouble
                          size={18}
                          color={ORANGE}
                        />

                        <span>
                          {hostel.roomType}
                        </span>

                      </div>

                      <div className="flex items-center gap-2">

                        <Wallet
                          size={18}
                          color={ORANGE}
                        />

                        <span
                          className="font-bold"
                          style={{ color: NAVY }}
                        >
                          KES {hostel.rent}/month
                        </span>

                      </div>

                    </div>

                    <div className="flex flex-wrap gap-2 mt-6">

                      {hostel.amenities?.slice(0, 4).map((item) => (

                        <span
                          key={item}
                          className="px-3 py-1 rounded-full bg-orange-100 text-sm"
                          style={{ color: ORANGE }}
                        >
                          {item}
                        </span>

                      ))}

                    </div>

                    <Link
                      to={`/hostels/${hostel.id}`}
                      className="block mt-6 text-center py-3 rounded-lg text-white font-semibold"
                      style={{ backgroundColor: NAVY }}
                    >
                      View Details
                    </Link>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>
      </section>
    </div>
  );
}

export default DisplayHostels;