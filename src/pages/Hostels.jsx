import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  BedDouble,
  Wallet,
  ArrowRight,
  SlidersHorizontal,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getHostelImages } from "@/services/unsplash";

const NAVY = "#0E1733";
const ORANGE = "#F98603";

export default function Hostels() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [roomType, setRoomType] = useState("");
  const [budget, setBudget] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
  async function loadImages() {
    try {
      const data = await getHostelImages(20);
      setImages(data);
    } catch (err) {
      console.error(err);
    }
  }

  loadImages();
}, []);

  useEffect(() => {
    let results = [...properties];

    if (search) {
      results = results.filter((property) =>
        property.formattedAddress
          ?.toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    if (location) {
      results = results.filter((property) =>
        property.city
          ?.toLowerCase()
          .includes(location.toLowerCase())
      );
    }

    if (sortBy === "newest") {
      results.reverse();
    }

    if (sortBy === "bedrooms") {
      results.sort(
        (a, b) => (b.bedrooms || 0) - (a.bedrooms || 0)
      );
    }

    setFilteredProperties(results);
  }, [properties, search, location, roomType, budget, sortBy]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Header */}

      <section
        className="py-16"
        style={{ backgroundColor: NAVY }}
      >
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-white">
            Browse Hostels
          </h1>

          <p className="text-white/70 mt-4 max-w-xl">
            Find verified hostels, bedsitters and apartments
            near your university.
          </p>

        </div>
      </section>

      {/* Search */}

      <section className="-mt-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-xl shadow-lg p-6">

            <div className="grid lg:grid-cols-5 gap-4">

              {/* Search */}

              <div className="relative">

                <Search
                  size={18}
                  className="absolute left-3 top-4 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Search hostel..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full border rounded-lg py-3 pl-10 pr-4 outline-none"
                />

              </div>

              {/* Location */}

              <div className="relative">

                <MapPin
                  size={18}
                  className="absolute left-3 top-4 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) =>
                    setLocation(e.target.value)
                  }
                  className="w-full border rounded-lg py-3 pl-10 pr-4 outline-none"
                />

              </div>

              {/* Room Type */}

              <div>

                <select
                  value={roomType}
                  onChange={(e) =>
                    setRoomType(e.target.value)
                  }
                  className="w-full border rounded-lg py-3 px-4 outline-none"
                >
                  <option value="">
                    Any Room Type
                  </option>

                  <option>Bedsitter</option>

                  <option>Single Room</option>

                  <option>One Bedroom</option>

                  <option>Two Bedroom</option>

                </select>

              </div>

              {/* Budget */}

              <div>

                <select
                  value={budget}
                  onChange={(e) =>
                    setBudget(e.target.value)
                  }
                  className="w-full border rounded-lg py-3 px-4 outline-none"
                >
                  <option value="">
                    Any Budget
                  </option>

                  <option>0-5000</option>

                  <option>5000-10000</option>

                  <option>10000+</option>

                </select>

              </div>

              {/* Sort */}

              <div>

                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value)
                  }
                  className="w-full border rounded-lg py-3 px-4 outline-none"
                >
                  <option value="">
                    Sort By
                  </option>

                  <option value="newest">
                    Newest
                  </option>

                  <option value="bedrooms">
                    Most Bedrooms
                  </option>

                </select>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Results */}

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between mb-8">

            <h2
              className="text-3xl font-bold"
              style={{ color: NAVY }}
            >
              Available Hostels
            </h2>

            <span className="text-gray-500">
              {filteredProperties.length} Results
            </span>

          </div>

          {loading && (
            <div className="text-center py-20 text-lg">
              Loading hostels...
            </div>
          )}

          {error && (
            <div className="text-center py-20 text-red-500">
              {error}
            </div>
          )}
                    {!loading && !error && (
            <>
              {filteredProperties.length === 0 ? (
                <div className="text-center py-20">
                  <h3 className="text-2xl font-semibold text-gray-700">
                    No hostels found
                  </h3>

                  <p className="mt-3 text-gray-500">
                    Try changing your search or filters.
                  </p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filteredProperties.map((property, index) => (
                    <div
                      key={property.id || index}
                      className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300"
                    >
                      <div className="relative">
                        <img
                          src={`https://picsum.photos/600/450?random=${index + 1}`}
                          alt={property.formattedAddress}
                          className="w-full h-56 object-cover"
                        />

                        <span
                          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                          style={{
                            backgroundColor: ORANGE,
                            color: NAVY,
                          }}
                        >
                          Verified
                        </span>
                      </div>

                      <div className="p-5">
                        <h3
                          className="text-lg font-bold"
                          style={{ color: NAVY }}
                        >
                          {property.formattedAddress}
                        </h3>

                        <div className="flex items-center gap-2 mt-3 text-gray-500">
                          <MapPin size={16} />

                          <span>
                            {property.city}, {property.state}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mt-3 text-gray-500">
                          <BedDouble size={16} />

                          <span>
                            {property.bedrooms ?? "-"} Bedrooms
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mt-2 text-gray-500">
                          <Wallet size={16} />

                          <span>
                            {property.bathrooms ?? "-"} Bathrooms
                          </span>
                        </div>

                        <div className="mt-5 flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-400">
                              Property ID
                            </p>

                            <h4
                              className="font-bold"
                              style={{ color: ORANGE }}
                            >
                              #{property.id}
                            </h4>
                          </div>

                          <Link
                            to={`/hostels/${property.id}`}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-semibold"
                            style={{ backgroundColor: NAVY }}
                          >
                            Details
                            <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Call To Action */}

      <section
        className="py-20"
        style={{ backgroundColor: NAVY }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">
            Can't Find Your Ideal Hostel?
          </h2>

          <p className="mt-5 text-white/70">
            New hostels are added every day. Check back often or
            contact us for assistance.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-lg font-semibold"
            style={{
              backgroundColor: ORANGE,
              color: NAVY,
            }}
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

         