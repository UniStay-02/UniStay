import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import StudentForm from "../components/StudentForm";
import StudentInfo from "../components/StudentInfo";
import HostelBooked from "../components/HostelBooked";
import PaymentCard from "../components/PaymentCard";
import AnnouncementCard from "../components/AnnouncementCard";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaSignOutAlt } from "react-icons/fa";
 
const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [hostel, setHostel,] = useState(null);
  const [payment] = useState(null);
  const [announcements] = useState([]);

  useEffect(() => {
    if (!user) return;

    const savedProfile = localStorage.getItem(`studentProfile_${user.email}`);

    if (savedProfile) {
      setStudent(JSON.parse(savedProfile));
    }
    const savedBooking = localStorage.getItem("bookedHostel");

    if (savedBooking) {
      setHostel(JSON.parse(savedBooking));
    }
    const savedHostel = localStorage.getItem("bookedHostel");

    if (savedHostel) {
      setHostel(JSON.parse(savedHostel));
    }
  }, [user]);


  const handleSave = (studentData) => {
    if (!user) return;

    localStorage.setItem(
      `studentProfile_${user.email}`,
      JSON.stringify(studentData),
    );

    setStudent(studentData);
    setIsEditing(false);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

 const handleLogout = () => {
  logout();
  navigate("/");
};
  const handleCancelBooking = () => {
    localStorage.removeItem("bookedHostel");
    setHostel(null);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-[#0E1733] flex items-center justify-center">
        <h2 className="text-white text-2xl font-semibold">
          Please login to access your profile.
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0E1733] py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {showSuccess && (
          <div className="mb-6 rounded-lg bg-green-100 border border-green-400 text-green-700 px-4 py-3">
            Profile saved successfully!
          </div>
        )}

        {!student || isEditing ? (
          <StudentForm student={student} onSave={handleSave} />
        ) : (
          <div className="space-y-6">
            {/* Dashboard Header */}
            <div className="bg-[#15254D] rounded-2xl shadow-lg p-8 text-white">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h1 className="text-3xl font-bold">Student Dashboard</h1>

                  <p className="mt-2 text-lg">
                    Welcome back,
                    <span className="text-[#F98603] font-semibold">
                      {" "}
                      {student.fullName}
                    </span>
                  </p>

                  <p className="text-gray-300 mt-2">
                    Manage your hostel profile, bookings, payments and keep
                    track of announcements from the hostel administration.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-[#F98603] hover:bg-orange-500 text-white px-5 py-3 rounded-lg flex items-center gap-2"
                  >
                    <FaEdit />
                    Edit Profile
                  </button>

                  <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg flex items-center gap-2"
                  >
                    <FaSignOutAlt />
                    Logout
                  </button>
                </div>
              </div>
            </div>

            {/* Student Information */}
            <StudentInfo student={student} />

            {/* Hostel Booking */}
            <HostelBooked hostel={hostel}
             onCancel={handleCancelBooking} />

            {/* Payment Information */}
            <PaymentCard payment={payment} />

            {/* Admin Announcements */}
            <AnnouncementCard announcements={announcements} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
