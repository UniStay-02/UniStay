import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  BedDouble,
  Wallet,
  ArrowRight,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getHostelImages } from "@/services/unsplash";
import { getProperties } from "@/services/rentcast";

const NAVY = "#0E1733";
const ORANGE = "#F98603";

// Fallback images
const PROPERTY_IMAGES = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
  "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=80",
  "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=1200&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&q=80",
];

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

  // Unsplash images
  const [images, setImages] = useState([]);

  // Load RentCast properties
  useEffect(() => {
    async function loadProperties() {
      try {
        setLoading(true);
        setError("");

        const data = await getProperties();

        console.log("RentCast:", data);

        setProperties(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        setError("Failed to load hostels.");
      } finally {
        setLoading(false);
      }
    }

    loadProperties();
  }, []);

  // Load Unsplash images
  useEffect(() => {
    async function loadImages() {
      try {
        const data = await getHostelImages(20);

        console.log("Unsplash:", data);

        setImages(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
      }
    }

    loadImages();
  }, []);

  // Filter + Sort
  useEffect(() => {
    let results = [...properties];

    // Search by address
    if (search.trim()) {
      results = results.filter((property) =>
        property.formattedAddress
          ?.toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // Filter by location
    if (location.trim()) {
      results = results.filter((property) =>
        property.city
          ?.toLowerCase()
          .includes(location.toLowerCase())
      );
    }

    // Filter by room type (using bedrooms)
    if (roomType === "bedsitter") {
      results = results.filter(
        (property) => (property.bedrooms ?? 0) === 0
      );
    }

    if (roomType === "single") {
      results = results.filter(
        (property) => (property.bedrooms ?? 0) === 1
      );
    }

    if (roomType === "one_bedroom") {
      results = results.filter(
        (property) => (property.bedrooms ?? 0) === 1
      );
    }

    if (roomType === "two_bedroom") {
      results = results.filter(
        (property) => (property.bedrooms ?? 0) >= 2
      );
    }

    // Budget
    if (budget) {
      if (budget === "10000+") {
        results = results.filter(
          (property) => (property.price ?? 0) > 10000
        );
      } else {
        const [min, max] = budget.split("-").map(Number);

        results = results.filter((property) => {
          const price = property.price ?? 0;
          return price >= min && price <= max;
        });
      }
    }

    // Sort
    if (sortBy === "bedrooms") {
      results.sort(
        (a, b) => (b.bedrooms ?? 0) - (a.bedrooms ?? 0)
      );
    }

    if (sortBy === "newest") {
      results = [...results].reverse();
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
            Find verified hostels, bedsitters and apartments near your
            university.
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
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border rounded-lg py-3 pl-10 pr-4 outline-none"
                />

              </div>

              {/* Room Type */}
              <div>

                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full border rounded-lg py-3 px-4 outline-none"
                >
                  <option value="">Any Room Type</option>
                  <option value="bedsitter">Bedsitter</option>
                  <option value="single">Single Room</option>
                  <option value="one_bedroom">One Bedroom</option>
                  <option value="two_bedroom">Two Bedroom</option>
                </select>

              </div>

              {/* Budget */}
              <div>

                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full border rounded-lg py-3 px-4 outline-none"
                >
                  <option value="">Any Budget</option>
                  <option value="0-5000">KES 0 - 5,000</option>
                  <option value="5000-10000">KES 5,000 - 10,000</option>
                  <option value="10000+">Above KES 10,000</option>
                </select>

              </div>

              {/* Sort */}
              <div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full border rounded-lg py-3 px-4 outline-none"
                >
                  <option value="">Sort By</option>
                  <option value="newest">Newest</option>
                  <option value="bedrooms">Most Bedrooms</option>
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

          {!loading && error && (
            <div className="text-center py-20 text-red-500">
              {error}
            </div>
          )}

          {!loading &&
            !error &&
            filteredProperties.length === 0 && (
              <div className="text-center py-20">

                <h3 className="text-2xl font-semibold text-gray-700">
                  No hostels found
                </h3>

                <p className="mt-3 text-gray-500">
                  Try changing your search or filters.
                </p>

              </div>
            )}

          {!loading && !error && filteredProperties.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProperties.map((property, index) => {
                const image =
                  property.imageUrl ||
                  images[index]?.urls?.regular ||
                  PROPERTY_IMAGES[index % PROPERTY_IMAGES.length];

                return (
                  <div
                    key={property.id || index}
                    className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Property Image */}
                    <div className="relative">
                      <img
                        src={image}
                        alt={property.formattedAddress || "Hostel"}
                        className="w-full h-56 object-cover"
                        loading="lazy"
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

                    {/* Card Body */}
                    <div className="p-5">

                      <h3
                        className="text-lg font-bold line-clamp-2"
                        style={{ color: NAVY }}
                      >
                        {property.formattedAddress || "Address unavailable"}
                      </h3>

                      <div className="flex items-center gap-2 mt-3 text-gray-500">
                        <MapPin size={16} />

                        <span>
                          {property.city || "Unknown City"}
                          {property.state ? `, ${property.state}` : ""}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mt-5">

                        <div className="flex items-center gap-2 text-gray-600">
                          <BedDouble size={16} />
                          <span>
                            {property.bedrooms ?? "-"} Beds
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-600">
                          <Wallet size={16} />
                          <span>
                            {property.bathrooms ?? "-"} Baths
                          </span>
                        </div>

                      </div>

                      {/* Property Type */}
                      <div className="mt-4">
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: "#F4F4F4",
                            color: NAVY,
                          }}
                        >
                          {property.propertyType || "Residential"}
                        </span>
                      </div>

                      {/* Footer */}
                      <div className="mt-6 flex items-center justify-between">

                        <div>
                          <p className="text-xs text-gray-400">
                            Property ID
                          </p>

                          <p
                            className="font-bold"
                            style={{ color: ORANGE }}
                          >
                            #{property.id}
                          </p>
                        </div>

                        <Link
                          to={`/hostels/${property.id}`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-semibold transition hover:opacity-90"
                          style={{ backgroundColor: NAVY }}
                        >
                          Details
                          <ArrowRight size={16} />
                        </Link>

                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* Call To Action */}
      <section
        className="py-20"
        style={{ backgroundColor: NAVY }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">

          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-5"
            style={{
              backgroundColor: `${ORANGE}20`,
              color: ORANGE,
            }}
          >
            Still Looking?
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Can't Find Your Ideal Hostel?
          </h2>

          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            New hostels and apartments are added every day.
            Browse our latest listings or contact our support team
            and we'll help you find accommodation near your campus.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition hover:scale-105"
              style={{
                backgroundColor: ORANGE,
                color: NAVY,
              }}
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/hostels"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white text-white font-semibold transition hover:bg-white hover:text-[#0E1733]"
            >
              Browse More
            </Link>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}