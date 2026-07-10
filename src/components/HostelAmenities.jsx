import { Link } from "react-router-dom";

const HostelCard = ({ hostel }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

      {/* Hostel Image */}
      <img
        src={hostel.images?.[0] || "/images/hostel-placeholder.jpg"}
        alt={hostel.name}
        className="w-full h-56 object-cover"
      />

      {/* Hostel Information */}
      <div className="p-5">

        <h2 className="text-xl font-bold text-blue-900">
          {hostel.name}
        </h2>

        <p className="text-gray-600 mt-2">
          📍 {hostel.location}
        </p>

        <p className="text-orange-500 font-bold text-lg mt-3">
          KSh {hostel.price}/month
        </p>

        <p className="text-gray-700 mt-3 line-clamp-2">
          {hostel.description}
        </p>


        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mt-4">
          {hostel.amenities?.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm"
            >
              {amenity}
            </span>
          ))}
        </div>


        {/* Rating */}
        <div className="mt-4 text-yellow-500">
          ⭐ {hostel.rating}
        </div>


        {/* Details Button */}
        <Link
          to={`/hostels/${hostel.id}`}
          className="block text-center mt-5 bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800"
        >
          View Details
        </Link>

      </div>

    </div>
  );
};

export default HostelCard;