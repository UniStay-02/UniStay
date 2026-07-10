import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaUniversity,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCalendarAlt,
  FaSave,
} from "react-icons/fa";

const StudentForm = ({ onSave }) => {
  const [student, setStudent] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    campus: "",
    course: "",
    yearOfStudy: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = Object.values(student);

    if (values.some((value) => value.trim() === "")) {
      setError("Please fill in all the required fields.");
      return;
    }

    setError("");

    // Save to localStorage
    localStorage.setItem("studentProfile", JSON.stringify(student));

    // Send data to Profile.jsx
    if (onSave) {
      onSave(student);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#0E1733] mb-6 border-b-2 border-[#F98603] inline-block">
        Complete Your Student Profile
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center gap-2 mb-2">
              <FaUser className="text-[#F98603]" />
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={student.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#F98603] outline-none"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 mb-2">
              <FaEnvelope className="text-[#F98603]" />
              Email
            </label>

            <input
              type="email"
              name="email"
              value={student.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#F98603] outline-none"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 mb-2">
              <FaPhone className="text-[#F98603]" />
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={student.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#F98603] outline-none"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 mb-2">
              <FaUniversity className="text-[#F98603]" />
              University
            </label>

            <input
              type="text"
              name="university"
              value={student.university}
              onChange={handleChange}
              placeholder="Enter university"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#F98603] outline-none"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 mb-2">
              <FaMapMarkerAlt className="text-[#F98603]" />
              Campus
            </label>

            <input
              type="text"
              name="campus"
              value={student.campus}
              onChange={handleChange}
              placeholder="Enter campus"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#F98603] outline-none"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 mb-2">
              <FaGraduationCap className="text-[#F98603]" />
              Course
            </label>

            <input
              type="text"
              name="course"
              value={student.course}
              onChange={handleChange}
              placeholder="Enter course"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#F98603] outline-none"
            />
          </div>

          <div className="md:col-span-2">
            <label className="flex items-center gap-2 mb-2">
              <FaCalendarAlt className="text-[#F98603]" />
              Year of Study
            </label>

            <select
              name="yearOfStudy"
              value={student.yearOfStudy}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#F98603] outline-none"
            >
              <option value="">Select Year</option>
              <option>First Year</option>
              <option>Second Year</option>
              <option>Third Year</option>
              <option>Fourth Year</option>
              <option>Fifth Year</option>
              <option>Postgraduate</option>
            </select>
          </div>
        </div>

        {error && <p className="text-red-600 mt-4">{error}</p>}

        <button
          type="submit"
          className="mt-8 bg-[#F98603] hover:bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center gap-2"
        >
          <FaSave />
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
