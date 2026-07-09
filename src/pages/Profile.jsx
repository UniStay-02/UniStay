import { FaUserCircle, FaEnvelope, FaPhone, FaUniversity, FaMapMarkerAlt, FaSignOutAlt, FaEdit } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#1D3A7A] py-10 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="bg-[#153062] rounded-2xl shadow-lg p-8 flex flex-col md:flex-row justify-between items-center mb-8">

          <div className="flex items-center gap-6">
            <FaUserCircle className="text-[120px] text-[#FF7A00]" />

            <div>
              <h1 className="text-4xl font-bold text-white">
                Hello, Derrick 👋
              </h1>

              <p className="text-gray-300 mt-2">
                Manage your profile information and bookings.
              </p>
            </div>
          </div>

          <button className="mt-6 md:mt-0 bg-[#FF7A00] hover:bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition">
            <FaEdit />
            Edit Profile
          </button>

        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-[#1D3A7A] mb-6 border-b-2 border-[#FF7A00] inline-block">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-6">

            <div className="flex items-center gap-4">
              <FaUserCircle className="text-[#FF7A00] text-3xl" />
              <div>
                <p className="text-gray-500">Full Name</p>
                <h3 className="font-semibold">Derrick Weru</h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#FF7A00] text-2xl" />
              <div>
                <p className="text-gray-500">Email</p>
                <h3 className="font-semibold">derrickweru@gmail.com</h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-[#FF7A00] text-2xl" />
              <div>
                <p className="text-gray-500">Phone</p>
                <h3 className="font-semibold">+254 712 345 678</h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaUniversity className="text-[#FF7A00] text-2xl" />
              <div>
                <p className="text-gray-500">University</p>
                <h3 className="font-semibold">University of Nairobi</h3>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#FF7A00] text-2xl" />
              <div>
                <p className="text-gray-500">Campus</p>
                <h3 className="font-semibold">Main Campus</h3>
              </div>
            </div>

          </div>

          <button className="mt-10 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition">
            <FaSignOutAlt />
            Logout
          </button>

        </div>

      </div>
    </div>
  );
};

export default Profile;