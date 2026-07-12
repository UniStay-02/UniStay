import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const navigate = useNavigate();

  const booking = JSON.parse(localStorage.getItem("bookedHostel"));

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 text-center">
        <CheckCircle size={80} className="mx-auto text-green-500 mb-6" />

        <h1 className="text-3xl font-bold text-[#0E1733]">
          Booking Confirmed!
        </h1>

        <p className="text-gray-600 mt-3">
          Your hostel viewing has been booked successfully.
        </p>

        <div className="mt-8 bg-gray-50 rounded-xl p-6 text-left">
          <h2 className="font-bold text-lg text-[#0E1733] mb-4">
            Booking Details
          </h2>

          <p className="mb-2">
            <strong>Name:</strong> {booking?.fullName}
          </p>

          <p className="mb-2">
            <strong>Email:</strong> {booking?.email}
          </p>

          <p className="mb-2">
            <strong>Phone:</strong> {booking?.phone}
          </p>

          <p className="mb-2">
            <strong>Viewing Date:</strong> {booking?.viewingDate}
          </p>

          <p className="mb-2">
            <strong>Viewing Time:</strong> {booking?.viewingTime}
          </p>

          <p>
            <strong>Status:</strong>
            <span className="text-green-600 font-semibold"> Confirmed</span>
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-8 w-full bg-[#0E1733] hover:bg-[#18254f] text-white py-3 rounded-lg font-semibold transition"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
