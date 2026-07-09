import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        console.error("Error fetching hostel:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHostel();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Loading hostel details...</p>
      </div>
    );
  }

  if (!hostel) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-bold text-red-500">
          Hostel not found
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={hostel.images[0]}
          alt={hostel.name}
          className="w-full h-[450px] object-cover rounded-xl shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold text-blue-900">
            {hostel.name}
          </h1>

          <p className="text-gray-600 mt-2">
            📍 {hostel.location}
          </p>

          <p className="text-orange-500 text-2xl font-bold mt-4">
            KSh {hostel.price}/month
          </p>

          <p className="mt-4 text-gray-700">
            {hostel.description}
          </p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">
              Amenities
            </h2>

            <ul className="grid grid-cols-2 gap-2">
              {hostel.amenities.map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-100 p-2 rounded-lg"
                >
                  ✓ {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <span className="text-yellow-500 text-lg">
              ⭐ {hostel.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelDetails;