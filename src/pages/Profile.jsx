import { useState } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaUniversity,
  FaMapMarkerAlt,
  FaSave,
  FaSignOutAlt,
} from "react-icons/fa";

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    campus: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, phone, university, campus } = formData;

    if (
      !fullName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !university.trim() ||
      !campus.trim()
    ) {
      setError("Please fill in all the required fields.");
      return;
    }

    setError("");
    alert("Profile updated successfully!");
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#0E1733] py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-[#15254D] rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-6 mb-10">
          <FaUserCircle className="text-[100px] text-[#F98603]" />

          <div>
            <h1 className="text-4xl font-bold text-white">My Profile</h1>
            <p className="text-gray-300 mt-2">
              Update your personal information.
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold text-[#0E1733] mb-8 border-b-2 border-[#F98603] inline-block">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="flex items-center gap-2 mb-2 font-medium">
                <FaUserCircle className="text-[#F98603]" />
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F98603]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 mb-2 font-medium">
                <FaEnvelope className="text-[#F98603]" />
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F98603]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center gap-2 mb-2 font-medium">
                <FaPhone className="text-[#F98603]" />
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F98603]"
              />
            </div>

            {/* University */}
            <div>
              <label className="flex items-center gap-2 mb-2 font-medium">
                <FaUniversity className="text-[#F98603]" />
                University
              </label>

              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleChange}
                placeholder="Enter your university"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F98603]"
              />
            </div>

            {/* Campus */}
            <div className="md:col-span-2">
              <label className="flex items-center gap-2 mb-2 font-medium">
                <FaMapMarkerAlt className="text-[#F98603]" />
                Campus / Location
              </label>

              <input
                type="text"
                name="campus"
                value={formData.campus}
                onChange={handleChange}
                placeholder="Enter your campus or location"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F98603]"
              />
            </div>
          </div>

          {error && (
            <p className="text-red-600 font-medium mt-6">
              {error}
            </p>
          )}

          <div className="flex gap-4 mt-8">
            <button
              type="submit"
              className="bg-[#F98603] hover:bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <FaSave />
              Save Profile
            </button>

            <button
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;