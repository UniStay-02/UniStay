import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, MapPin, BedDouble, Wallet, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"

const NAVY = "#0E1733";
const ORANGE = "#F98603";

const ROOM_TYPES = [
  { value: "bedsitter", label: "Bedsitter" },
  { value: "single", label: "Single Room" },
  { value: "one_bedroom", label: "One Bedroom" },
  { value: "two_bedroom", label: "Two Bedroom" },
  { value: "hostel", label: "Hostel / Dorm" },
];

const BUDGET_RANGES = [
  { value: "0-4000", label: "Under KES 4,000" },
  { value: "4000-7000", label: "KES 4,000 – 7,000" },
  { value: "7000-10000", label: "KES 7,000 – 10,000" },
  { value: "10000+", label: "Above KES 10,000" },
];

const STATS = [
  { value: "500+", label: "Verified Listings" },
  { value: "10,000+", label: "Students Housed" },
  { value: "50+", label: "Campuses Covered" },
  { value: "4.8", label: "Average Rating" },
];

const LISTINGS = [
  { id: 1, tag: "Bedsitter", name: "Sunrise Hostel", image: "https://picsum.photos/500/380?random=1" },
  { id: 2, tag: "Single Room", name: "Greenview Hostel", image: "https://picsum.photos/500/380?random=2" },
  { id: 3, tag: "One Bedroom", name: "Campus Lodge", image: "https://picsum.photos/500/380?random=3" },
  { id: 4, tag: "Two Bedroom", name: "Elite Residence", image: "https://picsum.photos/500/380?random=4" },
];

export default function HomePage() {
  const [location, setLocation] = useState("");
  const [roomType, setRoomType] = useState("");
  const [budget, setBudget] = useState("");

  const handleSearch = () => {
    // TODO: wire to the listings API, e.g.
    // GET /api/hostels?location=${location}&roomType=${roomType}&budget=${budget}
    console.log({ location, roomType, budget });
  };

  return (
    <div className="bg-white text-[#1C2130]">
      <Navbar/>

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
          <p className="text-sm font-semibold tracking-wide" style={{ color: ORANGE }}>
            Kenya's Trusted Student Housing Platform
          </p>

          <h1 className="mt-3 text-5xl md:text-6xl font-bold leading-tight text-white max-w-2xl">
            Find Your Perfect
            <br />
            Student Home.
          </h1>

          <p className="mt-5 text-white/70 max-w-lg text-[15px] leading-relaxed">
            Verified hostels, bedsitters and apartments near your university —
            with transparent pricing and reviews from students who've actually
            lived there.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/properties"
              className="flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm"
              style={{ backgroundColor: ORANGE, color: NAVY }}
            >
              Browse Listings
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/register"
              className="px-7 py-3.5 rounded-md font-semibold text-sm border border-white/30 text-white"
            >
              List a Property
            </Link>
          </div>
        </div>
      </section>

      {/* Search bar */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-xl border border-gray-200 p-2 md:p-2.5 grid md:grid-cols-[1.2fr_1fr_1fr_auto] divide-y md:divide-y-0 md:divide-x divide-gray-100">

            <label className="flex flex-col gap-1 px-5 py-3">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                Location
              </span>
              <div className="flex items-center gap-2">
                <MapPin size={16} style={{ color: ORANGE }} />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="University or town"
                  className="w-full outline-none text-sm"
                />
              </div>
            </label>

            <label className="flex flex-col gap-1 px-5 py-3">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                Room Type
              </span>
              <div className="flex items-center gap-2">
                <BedDouble size={16} style={{ color: ORANGE }} />
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full outline-none text-sm bg-transparent text-gray-700"
                >
                  <option value="">Any type</option>
                  {ROOM_TYPES.map((r) => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
              </div>
            </label>

            <label className="flex flex-col gap-1 px-5 py-3">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                Budget
              </span>
              <div className="flex items-center gap-2">
                <Wallet size={16} style={{ color: ORANGE }} />
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full outline-none text-sm bg-transparent text-gray-700"
                >
                  <option value="">Any budget</option>
                  {BUDGET_RANGES.map((b) => (
                    <option key={b.value} value={b.value}>{b.label}</option>
                  ))}
                </select>
              </div>
            </label>

            <div className="flex items-center p-2">
              <button
                onClick={handleSearch}
                className="w-full md:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white"
                style={{ backgroundColor: NAVY }}
              >
                <Search size={16} />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section style={{ backgroundColor: NAVY }} className="py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold" style={{ color: ORANGE }}>{s.value}</p>
              <p className="text-sm text-white/60 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold tracking-wide" style={{ color: ORANGE }}>
              About UniStay
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-tight" style={{ color: NAVY }}>
              Shaping the Way Students Find a Place to Live
            </h2>
            <p className="mt-5 text-gray-500 leading-relaxed">
              UniStay connects students with housing near universities across
              Kenya. Every listing on the platform is checked by a local
              contact before it goes live, so what you see is what you get
              when you arrive.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              From bedsitters to shared apartments, we bring pricing,
              amenities and honest reviews together in one place — so
              choosing a room is a comparison, not a gamble.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-7 font-semibold text-sm"
              style={{ color: ORANGE }}
            >
              Learn More About Us
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://picsum.photos/500/650?random=11"
              alt="Student housing"
              className="rounded-lg object-cover h-full w-full row-span-2"
            />
            <img
              src="https://picsum.photos/500/300?random=12"
              alt="Hostel room"
              className="rounded-lg object-cover h-full w-full"
            />
            <img
              src="https://picsum.photos/500/300?random=13"
              alt="Campus accommodation"
              className="rounded-lg object-cover h-full w-full"
            />
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-24" style={{ backgroundColor: "#F7F4EE" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto">
            <p className="text-sm font-semibold tracking-wide" style={{ color: ORANGE }}>
              Our Listings
            </p>
            <h2 className="mt-3 text-4xl font-bold" style={{ color: NAVY }}>
              Featured Student Homes
            </h2>
            <p className="mt-4 text-gray-500">
              A sample of verified rooms currently available near campus.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {LISTINGS.map((l) => (
              <div key={l.id} className="rounded-lg overflow-hidden bg-white shadow-sm">
                <div className="relative">
                  <img src={l.image} alt={l.name} className="w-full h-52 object-cover" />
                  <span
                    className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded"
                    style={{ backgroundColor: ORANGE, color: NAVY }}
                  >
                    {l.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold" style={{ color: NAVY }}>{l.name}</h3>
                  <Link
                    to={`/properties/${l.id}`}
                    className="inline-flex items-center gap-1 mt-3 text-sm font-semibold"
                    style={{ color: ORANGE }}
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm"
              style={{ backgroundColor: NAVY, color: "white" }}
            >
              View All Listings
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ backgroundColor: NAVY }} className="py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-sm font-semibold tracking-wide" style={{ color: ORANGE }}>
            Start Your Search
          </p>
          <h2 className="mt-3 text-4xl font-bold text-white">
            Ready to find your next student home?
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/properties"
              className="flex items-center gap-2 px-7 py-3.5 rounded-md font-semibold text-sm"
              style={{ backgroundColor: ORANGE, color: NAVY }}
            >
              Browse Listings
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-md font-semibold text-sm border border-white/30 text-white"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
      <Footer/>

    </div>
  );
}