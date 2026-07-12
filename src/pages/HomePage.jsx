import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  MapPin,
  BedDouble,
  Wallet,
  Search,
  ShieldCheck,
  Home,
  BadgeCheck,
  School,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProperties } from "@/services/rentcast";

const NAVY = "#0E1733";
const ORANGE = "#F98603";

const PROPERTY_IMAGES = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
  "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800",
  "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800",
];

const ROOM_TYPES = [
  { value: "bedsitter", label: "Bedsitter" },
  { value: "single", label: "Single Room" },
  { value: "one_bedroom", label: "One Bedroom" },
  { value: "two_bedroom", label: "Two Bedroom" },
  { value: "hostel", label: "Hostel / Dorm" },
];

const BUDGET_RANGES = [
  { value: "0-4000", label: "Under KES 4,000" },
  { value: "4000-7000", label: "KES 4,000 - 7,000" },
  { value: "7000-10000", label: "KES 7,000 - 10,000" },
  { value: "10000+", label: "Above KES 10,000" },
];

const STATS = [
  { value: "500+", label: "Verified Listings" },
  { value: "10,000+", label: "Students Housed" },
  { value: "50+", label: "Campuses Covered" },
  { value: "4.8", label: "Average Rating" },
];

export default function HomePage() {
  const [location, setLocation] = useState("");
  const [roomType, setRoomType] = useState("");
  const [budget, setBudget] = useState("");

  // RentCast
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProperties() {
      try {
        const data = await getProperties();

        console.log("RentCast:", data);

        setProperties(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        setError("Failed to load properties");
      } finally {
        setLoading(false);
      }
    }

    loadProperties();
  }, []);

  const handleSearch = () => {
    window.location.href = `/properties?location=${location}&roomType=${roomType}&budget=${budget}`;
  };

  return (
    <div className="bg-white text-[#1C2130]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[560px] md:h-[640px]">
        <img
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80"
          alt="Student accommodation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, ${NAVY}F2 0%, ${NAVY}CC 45%, ${NAVY}66 100%)`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <p
            className="text-sm font-semibold tracking-wide"
            style={{ color: ORANGE }}
          >
            Kenya's Trusted Student Housing Platform
          </p>

          <h1 className="mt-3 text-5xl md:text-6xl font-bold leading-tight text-white max-w-2xl">
            Find Your Perfect
            <br />
            Student Home
          </h1>

          <p className="mt-5 text-white/70 max-w-lg leading-relaxed">
            Discover verified hostels, bedsitters and apartments near your
            university with transparent pricing and trusted reviews.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/hostels"
              className="flex items-center gap-2 px-7 py-3 rounded-md font-semibold"
              style={{ backgroundColor: ORANGE, color: NAVY }}
            >
              Browse Listings
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/register"
              className="px-7 py-3 rounded-md border border-white/30 text-white font-semibold"
            >
              List Property
            </Link>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1.2fr_1fr_1fr_auto] border rounded-xl overflow-hidden">

            <div className="flex items-center px-5 py-4 gap-3">
              <MapPin color={ORANGE} />
              <input
                type="text"
                placeholder="University or Town"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center px-5 py-4 gap-3 border-l">
              <BedDouble color={ORANGE} />
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full outline-none bg-transparent"
              >
                <option value="">Any Room</option>
                {ROOM_TYPES.map((room) => (
                  <option key={room.value} value={room.value}>
                    {room.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center px-5 py-4 gap-3 border-l">
              <Wallet color={ORANGE} />
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full outline-none bg-transparent"
              >
                <option value="">Any Budget</option>
                {BUDGET_RANGES.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSearch}
              className="px-8 flex items-center justify-center gap-2 text-white font-semibold"
              style={{ backgroundColor: NAVY }}
            >
              <Search size={18} />
              Search
            </button>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((item) => (
            <div key={item.label}>
              <h3
                className="text-3xl font-bold"
                style={{ color: ORANGE }}
              >
                {item.value}
              </h3>
              <p className="text-white/70 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose UniStay */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <p className="font-semibold" style={{ color: ORANGE }}>
              Why UniStay?
            </p>

            <h2
              className="text-4xl font-bold mt-3"
              style={{ color: NAVY }}
            >
              Student Housing Made Simple
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-16">

            <div className="text-center">
              <ShieldCheck
                size={42}
                color={ORANGE}
                className="mx-auto"
              />
              <h3 className="font-bold mt-4">Verified Listings</h3>
              <p className="text-gray-500 mt-2">
                Every property is verified before publication.
              </p>
            </div>

            <div className="text-center">
              <Home
                size={42}
                color={ORANGE}
                className="mx-auto"
              />
              <h3 className="font-bold mt-4">Affordable Housing</h3>
              <p className="text-gray-500 mt-2">
                Compare prices that fit every student's budget.
              </p>
            </div>

            <div className="text-center">
              <School
                size={42}
                color={ORANGE}
                className="mx-auto"
              />
              <h3 className="font-bold mt-4">Near Universities</h3>
              <p className="text-gray-500 mt-2">
                Find accommodation close to your campus.
              </p>
            </div>

            <div className="text-center">
              <BadgeCheck
                size={42}
                color={ORANGE}
                className="mx-auto"
              />
              <h3 className="font-bold mt-4">Trusted Reviews</h3>
              <p className="text-gray-500 mt-2">
                Read genuine reviews from fellow students.
              </p>
            </div>

          </div>
        </div>
      </section>
            {/* Featured Hostels */}
      <section className="py-24 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <p
              className="font-semibold"
              style={{ color: ORANGE }}
            >
              Featured Hostels
            </p>

            <h2
              className="text-4xl font-bold mt-3"
              style={{ color: NAVY }}
            >
              Popular Student Accommodation
            </h2>

            <p className="mt-4 text-gray-500">
              Explore some of our most popular student residences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            {[
              {
                id: 1,
                name: "Sunrise Hostel",
                location: "Moi University",
                price: "KES 4,500 / month",
                image:
                  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
              },
              {
                id: 2,
                name: "Green View Residence",
                location: "Kabarak University",
                price: "KES 6,000 / month",
                image:
                  "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600",
              },
              {
                id: 3,
                name: "Campus Lodge",
                location: "University of Eldoret",
                price: "KES 7,500 / month",
                image:
                  "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600",
              },
              {
                id: 4,
                name: "Elite Apartments",
                location: "Egerton University",
                price: "KES 9,000 / month",
                image:
                  "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600",
              },
            ].map((hostel) => (
              <div
                key={hostel.id}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={hostel.image}
                  alt={hostel.name}
                  className="w-full h-52 object-cover"
                />

                <div className="p-5">
                  <h3
                    className="text-lg font-bold"
                    style={{ color: NAVY }}
                  >
                    {hostel.name}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {hostel.location}
                  </p>

                  <p
                    className="mt-3 font-bold"
                    style={{ color: ORANGE }}
                  >
                    {hostel.price}
                  </p>

                  <Link
                    to="/properties"
                    className="inline-flex items-center gap-2 mt-5 font-semibold"
                    style={{ color: ORANGE }}
                  >
                    View Details
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}

          </div>

          <div className="text-center mt-14">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-white font-semibold"
              style={{ backgroundColor: NAVY }}
            >
              Browse All Listings
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">
            <p className="font-semibold" style={{ color: ORANGE }}>
              How It Works
            </p>

            <h2
              className="text-4xl font-bold mt-3"
              style={{ color: NAVY }}
            >
              Find Your Room in Four Easy Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-16">

            {[
              "Search Hostels",
              "Compare Listings",
              "Contact Landlord",
              "Move In",
            ].map((step, index) => (
              <div
                key={step}
                className="text-center"
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold"
                  style={{ backgroundColor: NAVY }}
                >
                  {index + 1}
                </div>

                <h3 className="mt-6 font-bold text-lg">
                  {step}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <p
              className="font-semibold"
              style={{ color: ORANGE }}
            >
              Testimonials
            </p>

            <h2
              className="text-4xl font-bold mt-3"
              style={{ color: NAVY }}
            >
              What Students Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            {[
              {
                name: "Brian",
                text: "UniStay helped me find a hostel within one day.",
              },
              {
                name: "Grace",
                text: "Very easy to compare prices and contact landlords.",
              },
              {
                name: "Faith",
                text: "The verified listings saved me from rental scams.",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-xl p-8 shadow"
              >
                <p className="text-gray-600 italic">
                  "{review.text}"
                </p>

                <h4
                  className="mt-6 font-bold"
                  style={{ color: NAVY }}
                >
                  {review.name}
                </h4>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24"
        style={{ backgroundColor: NAVY }}
      >
        <div className="max-w-4xl mx-auto text-center px-6">

          <p
            className="font-semibold"
            style={{ color: ORANGE }}
          >
            Start Today
          </p>

          <h2 className="text-4xl font-bold text-white mt-3">
            Ready to Find Your Student Home?
          </h2>

          <p className="text-white/70 mt-5">
            Browse verified hostels near your university and secure your next home with confidence.
          </p>

          <Link
            to="/properties"
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-lg font-semibold"
            style={{
              backgroundColor: ORANGE,
              color: NAVY,
            }}
          >
            Browse Listings
            <ArrowRight size={16} />
          </Link>

        </div>
      </section>

      <Footer />
    </div>
  );
}