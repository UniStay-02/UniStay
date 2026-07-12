import {
  Users,
  ShieldCheck,
  Home,
  Target,
  Eye,
  BadgeCheck,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NAVY = "#0E1733";
const ORANGE = "#F98603";

export default function About() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero */}
      <section
        className="py-24 text-center text-white"
        style={{ backgroundColor: NAVY }}
      >
        <div className="max-w-5xl mx-auto px-6">

          <p
            className="uppercase tracking-widest font-semibold"
            style={{ color: ORANGE }}
          >
            Welcome to UniStay
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-5">
            About UniStay
          </h1>

          <p className="mt-8 text-xl text-white/80 leading-8 max-w-3xl mx-auto">
            UniStay is a modern student accommodation platform dedicated
            to helping university students discover safe, affordable and
            verified hostels, bedsitters and apartments near their campuses.
            We simplify the search process by connecting students directly
            with trusted property owners.
          </p>

        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80"
            alt="Student Hostel"
            className="rounded-2xl shadow-xl h-[550px] object-cover w-full"
          />

          <div>

            <h2
              className="text-4xl font-bold"
              style={{ color: NAVY }}
            >
              Our Story
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              UniStay was founded by
              <strong> Ian Cymi</strong>,
              <strong> Japheth Kiprono</strong>,
              <strong> Idah Karwitha</strong>,
              and
              <strong> Derrick Weru</strong>,
              a team of passionate innovators who believed that
              every university student deserves quick access to
              secure and affordable accommodation.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              While studying, the founders experienced firsthand
              the frustrations of searching for hostels—limited
              information, unreliable contacts, hidden costs and
              rental scams. These challenges inspired them to
              build a platform that students could trust.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              Today, UniStay serves as a bridge between students
              and landlords by providing verified property listings,
              transparent pricing and an easy-to-use platform that
              makes finding accommodation faster, safer and more
              convenient.
            </p>

          </div>

        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p
              className="font-semibold"
              style={{ color: ORANGE }}
            >
              Leadership
            </p>

            <h2
              className="text-4xl font-bold mt-3"
              style={{ color: NAVY }}
            >
              Meet Our Founding Team
            </h2>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
              UniStay was established through the combined vision,
              dedication and teamwork of four university students
              determined to improve the student housing experience
              across Kenya.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[
              "Ian Cymi",
              "Japheth Kiprono",
              "Idah Karwitha",
              "Derrick Weru",
            ].map((member) => (

              <div
                key={member}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
              >

                <div
                  className="w-24 h-24 rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold"
                  style={{ backgroundColor: NAVY }}
                >
                  {member.charAt(0)}
                </div>

                <h3
                  className="text-xl font-bold mt-6"
                  style={{ color: NAVY }}
                >
                  {member}
                </h3>

                <p
                  className="mt-2 font-semibold"
                  style={{ color: ORANGE }}
                >
                  Co-Founder
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>
            {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-gray-50 rounded-2xl p-10 shadow">
            <Target
              size={50}
              style={{ color: ORANGE }}
            />

            <h2
              className="text-3xl font-bold mt-6"
              style={{ color: NAVY }}
            >
              Our Mission
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              To simplify the process of finding student accommodation by
              providing a trusted digital platform where students can discover
              verified hostels, compare prices, connect directly with landlords
              and make informed housing decisions with confidence.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-10 shadow">
            <Eye
              size={50}
              style={{ color: ORANGE }}
            />

            <h2
              className="text-3xl font-bold mt-6"
              style={{ color: NAVY }}
            >
              Our Vision
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              To become Kenya's leading student accommodation platform,
              empowering every university student to find safe, affordable and
              comfortable housing through technology and innovation.
            </p>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <p
              className="font-semibold"
              style={{ color: ORANGE }}
            >
              What We Stand For
            </p>

            <h2
              className="text-4xl font-bold mt-3"
              style={{ color: NAVY }}
            >
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            <div className="bg-white rounded-xl shadow p-8 text-center">
              <ShieldCheck
                size={45}
                className="mx-auto"
                style={{ color: ORANGE }}
              />
              <h3 className="font-bold mt-5">Trust</h3>
              <p className="text-gray-600 mt-3">
                Every listing is verified to give students confidence when
                choosing accommodation.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-8 text-center">
              <Users
                size={45}
                className="mx-auto"
                style={{ color: ORANGE }}
              />
              <h3 className="font-bold mt-5">Community</h3>
              <p className="text-gray-600 mt-3">
                Building stronger connections between students, landlords and
                universities.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-8 text-center">
              <Home
                size={45}
                className="mx-auto"
                style={{ color: ORANGE }}
              />
              <h3 className="font-bold mt-5">Comfort</h3>
              <p className="text-gray-600 mt-3">
                Helping students find homes where they can thrive throughout
                their academic journey.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-8 text-center">
              <BadgeCheck
                size={45}
                className="mx-auto"
                style={{ color: ORANGE }}
              />
              <h3 className="font-bold mt-5">Excellence</h3>
              <p className="text-gray-600 mt-3">
                Delivering quality service through innovation, reliability and
                continuous improvement.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 text-center"
        style={{ backgroundColor: NAVY }}
      >
        <div className="max-w-4xl mx-auto px-6">

          <p
            className="font-semibold"
            style={{ color: ORANGE }}
          >
            Join Thousands of Students
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Find Your Perfect Student Home Today
          </h2>

          <p className="mt-6 text-white/70 text-lg leading-8">
            Browse verified student hostels, compare prices and secure your
            accommodation with confidence through UniStay.
          </p>

          <a
            href="/hostels"
            className="inline-block mt-10 px-10 py-4 rounded-lg font-bold"
            style={{
              backgroundColor: ORANGE,
              color: NAVY,
            }}
          >
            Browse Listings
          </a>

        </div>
      </section>

      <Footer />
    </div>
  );
}