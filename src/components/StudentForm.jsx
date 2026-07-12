import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaUniversity,
  FaGraduationCap,
  FaIdCard,
  FaCalendarAlt,
  FaSave,
} from "react-icons/fa";

const StudentForm = ({ student: initialStudent, onSave }) => {
  const { user } = useAuth();

  const [student, setStudent] = useState({
    fullName: initialStudent?.fullName || "",
    email: user?.email || initialStudent?.email || "",
    phone: initialStudent?.phone || "",
    university: initialStudent?.university || "",
    registrationNumber: initialStudent?.registrationNumber || "",
    course: initialStudent?.course || "",
    yearOfStudy: initialStudent?.yearOfStudy || "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setStudent((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !student.fullName.trim() ||
      !student.phone.trim() ||
      !student.university.trim() ||
      !student.registrationNumber.trim() ||
      !student.course.trim() ||
      !student.yearOfStudy.trim()
    ) {
      setError("Please fill in all the required fields.");
      return;
    }

    setError("");

    if (onSave) {
      onSave(student);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-[#0E1733] mb-2">
        Complete Your Student Profile
      </h2>

      <p className="text-gray-500 mb-8">
        Fill in your details to continue using UniStay.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="flex items-center gap-2 mb-2 font-medium">
              <FaUser className="text-[#F98603]" />
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={student.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F98603]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 mb-2 font-medium">
              <FaEnvelope className="text-[#F98603]" />
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={student.email}
              readOnly
              className="w-full border rounded-lg p-3 bg-gray-100 text-gray-600 cursor-not-allowed"
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
              value={student.phone}
              onChange={handleChange}
              placeholder="07XXXXXXXX"
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
              value={student.university}
              onChange={handleChange}
              placeholder="Enter your university"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F98603]"
            />
          </div>

          {/* Registration Number */}
          <div>
            <label className="flex items-center gap-2 mb-2 font-medium">
              <FaIdCard className="text-[#F98603]" />
              Registration Number
            </label>

            <input
              type="text"
              name="registrationNumber"
              value={student.registrationNumber}
              onChange={handleChange}
              placeholder="e.g. CSC/1234/2024"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F98603]"
            />
          </div>

          {/* Course */}
          <div>
            <label className="flex items-center gap-2 mb-2 font-medium">
              <FaGraduationCap className="text-[#F98603]" />
              Course
            </label>

            <input
              type="text"
              name="course"
              value={student.course}
              onChange={handleChange}
              placeholder="Enter your course"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F98603]"
            />
          </div>

          {/* Year of Study */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 mb-2 font-medium">
              <FaCalendarAlt className="text-[#F98603]" />
              Year of Study
            </label>

            <select
              name="yearOfStudy"
              value={student.yearOfStudy}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F98603]"
            >
              <option value="">Select Year</option>
              <option value="First Year">First Year</option>
              <option value="Second Year">Second Year</option>
              <option value="Third Year">Third Year</option>
              <option value="Fourth Year">Fourth Year</option>
              <option value="Fifth Year">Fifth Year</option>
              <option value="Postgraduate">Postgraduate</option>
            </select>
          </div>
        </div>

        {error && <p className="text-red-600 font-medium mt-6">{error}</p>}

        <button
          type="submit"
          className="mt-8 bg-[#F98603] hover:bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
        >
          <FaSave />
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
