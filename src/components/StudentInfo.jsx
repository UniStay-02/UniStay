import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaUniversity,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCalendarAlt,
} from "react-icons/fa";

const StudentInfo = ({ student }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-4 mb-6">
        <FaUserCircle className="text-6xl text-[#F98603]" />
        <div>
          <h2 className="text-2xl font-bold text-[#0E1733]">
            Student Information
          </h2>
          <p className="text-gray-500">Your profile details</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex items-center gap-3">
          <FaUserCircle className="text-[#F98603]" />
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-semibold">{student.fullName}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaEnvelope className="text-[#F98603]" />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold">{student.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaPhone className="text-[#F98603]" />
          <div>
            <p className="text-sm text-gray-500">Phone Number</p>
            <p className="font-semibold">{student.phone}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaUniversity className="text-[#F98603]" />
          <div>
            <p className="text-sm text-gray-500">University</p>
            <p className="font-semibold">{student.university}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-[#F98603]" />
          <div>
            <p className="text-sm text-gray-500">Campus</p>
            <p className="font-semibold">{student.campus}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaGraduationCap className="text-[#F98603]" />
          <div>
            <p className="text-sm text-gray-500">Course</p>
            <p className="font-semibold">{student.course}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 md:col-span-2">
          <FaCalendarAlt className="text-[#F98603]" />
          <div>
            <p className="text-sm text-gray-500">Year of Study</p>
            <p className="font-semibold">{student.yearOfStudy}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
