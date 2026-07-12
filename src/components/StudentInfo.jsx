import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaUniversity,
  FaIdCard,
  FaGraduationCap,
  FaCalendarAlt,
  FaEdit,
} from "react-icons/fa";


const StudentInfo = ({ student, onEdit }) => {
  if (!student) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <p className="text-lg text-gray-600">
            Loading student information...
          </p>
        </div>
      </>
    );
  }

  return (
    <>
     

      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
              <div className="flex items-center gap-5">
                <FaUserCircle className="text-7xl text-[#F98603]" />

                <div>
                  <h1 className="text-3xl font-bold text-[#0E1733]">
                    Student Profile
                  </h1>

                  <p className="text-gray-500 mt-2">
                    View and manage your personal information.
                  </p>
                </div>
              </div>

              <button
                onClick={onEdit}
                className="mt-6 md:mt-0 flex items-center gap-2 bg-[#F98603] text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                <FaEdit />
                Edit Profile
              </button>
            </div>

            {/* Information Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <p className="text-xs uppercase tracking-wide text-gray-500 flex items-center gap-2">
                  <FaUserCircle className="text-[#F98603]" />
                  Full Name
                </p>

                <p className="font-semibold text-lg text-[#0E1733] mt-3">
                  {student.fullName}
                </p>
              </div>

              {/* Email */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <p className="text-xs uppercase tracking-wide text-gray-500 flex items-center gap-2">
                  <FaEnvelope className="text-[#F98603]" />
                  Email
                </p>

                <p className="font-semibold text-lg text-[#0E1733] mt-3 break-all">
                  {student.email}
                </p>
              </div>

              {/* Phone */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <p className="text-xs uppercase tracking-wide text-gray-500 flex items-center gap-2">
                  <FaPhone className="text-[#F98603]" />
                  Phone Number
                </p>

                <p className="font-semibold text-lg text-[#0E1733] mt-3">
                  {student.phone}
                </p>
              </div>

              {/* University */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <p className="text-xs uppercase tracking-wide text-gray-500 flex items-center gap-2">
                  <FaUniversity className="text-[#F98603]" />
                  University
                </p>

                <p className="font-semibold text-lg text-[#0E1733] mt-3">
                  {student.university}
                </p>
              </div>

              {/* Registration Number */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <p className="text-xs uppercase tracking-wide text-gray-500 flex items-center gap-2">
                  <FaIdCard className="text-[#F98603]" />
                  Registration Number
                </p>

                <p className="font-semibold text-lg text-[#0E1733] mt-3">
                  {student.registrationNumber}
                </p>
              </div>

              {/* Course */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <p className="text-xs uppercase tracking-wide text-gray-500 flex items-center gap-2">
                  <FaGraduationCap className="text-[#F98603]" />
                  Course
                </p>

                <p className="font-semibold text-lg text-[#0E1733] mt-3">
                  {student.course}
                </p>
              </div>

              {/* Year of Study */}
              <div className="md:col-span-2 bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <p className="text-xs uppercase tracking-wide text-gray-500 flex items-center gap-2">
                  <FaCalendarAlt className="text-[#F98603]" />
                  Year of Study
                </p>

                <p className="font-semibold text-lg text-[#0E1733] mt-3">
                  {student.yearOfStudy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentInfo;