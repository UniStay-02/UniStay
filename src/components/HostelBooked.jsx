import {
  FaBed,
  FaMapMarkerAlt,
  FaDoorOpen,
  FaCalendarCheck,
} from "react-icons/fa";

const HostelBooked = ({ hostel, onCancel }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <FaBed className="text-4xl text-[#F98603]" />
        <div>
          <h2 className="text-2xl font-bold text-[#0E1733]">Hostel Booking</h2>
          <p className="text-gray-500">Your current hostel booking</p>
        </div>
      </div>

      {!hostel ? (
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
          <FaBed className="text-5xl text-gray-400 mx-auto mb-4" />

          <h3 className="text-xl font-semibold text-gray-600">
            No Hostel Booked Yet
          </h3>

          <p className="text-gray-500 mt-2">
            Browse available hostels and make your first booking.
          </p>
        </div>
      ) : (
        <>
          <img
            src={hostel.image}
            alt={hostel.name}
            className="w-full h-56 object-cover rounded-xl mb-6"
          />
          <div className="mb-6">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Booking Status: Pending Approval
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500">Hostel Name</p>
              <p className="font-semibold">{hostel.name}</p>
            </div>
            <button
              onClick={onCancel}
              className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Cancel Booking
            </button>

            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-semibold flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#F98603]" />
                {hostel.location}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Room Number</p>
              <p className="font-semibold flex items-center gap-2">
                <FaDoorOpen className="text-[#F98603]" />
                {hostel.room}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Check-in Date</p>
              <p className="font-semibold flex items-center gap-2">
                <FaCalendarCheck className="text-[#F98603]" />
                {hostel.checkIn}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Monthly Rent</p>
              <p className="font-semibold text-[#F98603]">{hostel.price}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HostelBooked;
