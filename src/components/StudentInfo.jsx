import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaUniversity,
  FaIdCard,
  FaGraduationCap,
  FaCalendarAlt,
} from "react-icons/fa";

const StudentInfo = ({ student }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <FaUserCircle className="text-6xl text-[#F98603]" />

        <div>
          <h2 className="text-2xl font-bold text-[#0E1733]">
            Student Information
          </h2>

          <p className="text-gray-500">Your personal information.</p>
        </div>
      </div>

      {/* Information */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-xl p-4">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <FaUserCircle className="text-[#F98603]" />
            Full Name
          </p>

          <p className="font-semibold text-[#0E1733] mt-2">
            {student.fullName}
          </p>
        </div>

        <div className="border rounded-xl p-4">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <FaEnvelope className="text-[#F98603]" />
            Email
          </p>

          <p className="font-semibold text-[#0E1733] mt-2">{student.email}</p>
        </div>

        <div className="border rounded-xl p-4">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <FaPhone className="text-[#F98603]" />
            Phone Number
          </p>

          <p className="font-semibold text-[#0E1733] mt-2">{student.phone}</p>
        </div>

        <div className="border rounded-xl p-4">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <FaUniversity className="text-[#F98603]" />
            University
          </p>

          <p className="font-semibold text-[#0E1733] mt-2">
            {student.university}
          </p>
        </div>

        <div className="border rounded-xl p-4">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <FaIdCard className="text-[#F98603]" />
            Registration Number
          </p>

          <p className="font-semibold text-[#0E1733] mt-2">
            {student.registrationNumber}
          </p>
        </div>

        <div className="border rounded-xl p-4">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <FaGraduationCap className="text-[#F98603]" />
            Course
          </p>

          <p className="font-semibold text-[#0E1733] mt-2">{student.course}</p>
        </div>

        <div className="md:col-span-2 border rounded-xl p-4">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <FaCalendarAlt className="text-[#F98603]" />
            Year of Study
          </p>

          <p className="font-semibold text-[#0E1733] mt-2">
            {student.yearOfStudy}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
