import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "./ImageGallery";

import {
  MapPin,
  Star,
  Wifi,
  ShieldCheck,
  Car,
  BedDouble,
  Bath,
  Droplets,
  BookOpen,
  Heart,
  Home,
} from "lucide-react";

const HostelDetails = () => {
  const { id } = useParams();

  const [hostel, setHostel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHostel = async () => {
      try {
        const response = await fetch("/products/products.json");
        const data = await response.json();

        const selectedHostel = data.find(
          (item) => item.id === Number(id)
        );

        setHostel(selectedHostel);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHostel();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">
          Loading hostel...
        </p>
      </div>
    );
  }

  if (!hostel) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">
          Hostel Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen py-10">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}

        <div className="flex flex-col lg:flex-row justify-between gap-5">

          <div>

            <h1 className="text-4xl font-extrabold text-gray-900">
              {hostel.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-4 text-gray-600">

              <span className="flex items-center gap-1">

                <Star
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />

                {hostel.rating}

              </span>

              <span className="flex items-center gap-2">

                <MapPin size={18} />

                {hostel.location}

              </span>

            </div>

          </div>

          <button className="border rounded-xl px-5 py-3 hover:bg-gray-100 flex items-center gap-2">

            <Heart />

            Save Hostel

          </button>

        </div>

        {/* ================= IMAGE GALLERY ================= */}

        <div className="mt-10">

          <ImageGallery
            images={hostel.images}
            name={hostel.name}
          />

        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid lg:grid-cols-3 gap-10 mt-12">

          {/* LEFT */}

          <div className="lg:col-span-2 space-y-10">

            {/* PRICE */}

            <div className="bg-white rounded-2xl shadow p-8">

              <h2 className="text-3xl font-bold text-orange-600">

                KSh {hostel.price}

                <span className="text-lg text-gray-500">
                  {" "}
                  / month
                </span>

              </h2>

              <p className="text-gray-600 mt-2">
                Affordable student accommodation near campus.
              </p>

            </div>

            {/* DESCRIPTION */}

            <div className="bg-white rounded-2xl shadow p-8">

              <h2 className="text-2xl font-bold mb-5">
                Description
              </h2>

              <p className="text-gray-700 leading-8">

                {hostel.description}

              </p>

            </div>

            {/* QUICK FACTS */}

            <div>

              <h2 className="text-2xl font-bold mb-6">
                Quick Facts
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">

                  <BedDouble
                    className="text-blue-700"
                  />

                  <div>

                    <h3 className="font-semibold">
                      Bedrooms
                    </h3>

                    <p>
                      2 Spacious Rooms
                    </p>

                  </div>

                </div>

                <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">

                  <Bath
                    className="text-blue-700"
                  />

                  <div>

                    <h3 className="font-semibold">
                      Bathrooms
                    </h3>

                    <p>
                      1 Shared Bathroom
                    </p>

                  </div>

                </div>

                <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">

                  <Home
                    className="text-blue-700"
                  />

                  <div>

                    <h3 className="font-semibold">
                      Distance
                    </h3>

                    <p>
                      300m from Campus
                    </p>

                  </div>

                </div>

                <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">

                  <BookOpen
                    className="text-blue-700"
                  />

                  <div>

                    <h3 className="font-semibold">
                      Room Type
                    </h3>

                    <p>
                      Single / Shared
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* AMENITIES */}

            <div>

              <h2 className="text-2xl font-bold mb-6">
                Amenities
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

                <div className="bg-white rounded-xl shadow p-5 flex items-center gap-3">

                  <Wifi className="text-green-600"/>

                  Free WiFi

                </div>

                <div className="bg-white rounded-xl shadow p-5 flex items-center gap-3">

                  <ShieldCheck className="text-green-600"/>

                  24/7 Security

                </div>

                <div className="bg-white rounded-xl shadow p-5 flex items-center gap-3">

                  <Car className="text-green-600"/>

                  Parking

                </div>

                <div className="bg-white rounded-xl shadow p-5 flex items-center gap-3">

                  <Droplets className="text-green-600"/>

                  Water Available

                </div>

                <div className="bg-white rounded-xl shadow p-5 flex items-center gap-3">

                  <BookOpen className="text-green-600"/>

                  Study Room

                </div>

                <div className="bg-white rounded-xl shadow p-5 flex items-center gap-3">

                  <Home className="text-green-600"/>

                  Furnished

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT COLUMN */}

          <div>

            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">

              <h2 className="text-3xl font-bold text-orange-600">

                KSh {hostel.price}

                <span className="text-lg text-gray-500">
                  /month
                </span>

              </h2>

              <p className="text-gray-500 mt-2">

                Available immediately

              </p>

              <button className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl text-lg font-semibold transition">

                Book Inspection

              </button>

              <button className="mt-4 w-full border py-4 rounded-xl font-semibold hover:bg-gray-100">

                Contact Owner

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HostelDetails;