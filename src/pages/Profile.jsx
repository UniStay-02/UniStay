import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import StudentForm from "../components/StudentForm";
import StudentInfo from "../components/StudentInfo";
import HostelBooked from "../components/HostelBooked";
import PaymentCard from "../components/PaymentCard";
import AnnouncementCard from "../components/AnnouncementCard";

const Profile = () => {
  const { user } = useAuth();

  const [student, setStudent] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    if (!user) return;

    const savedProfile = localStorage.getItem(`studentProfile_${user.email}`);

    if (savedProfile) {
      setStudent(JSON.parse(savedProfile));
    }
  }, [user]);

  const handleSave = (studentData) => {
    if (!user) return;

    localStorage.setItem(
      `studentProfile_${user.email}`,
      JSON.stringify(studentData),
    );

    setStudent(studentData);
    setShowSuccess(true);
    setIsEditing(false);

    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0E1733] text-white">
        <h2>Please login to access your profile.</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0E1733] py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {showSuccess && (
          <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
            ✅ Profile saved successfully!
          </div>
        )}

        {!student || isEditing ? (
          <StudentForm 
          student={student}
          onSave={handleSave} />
        ) : (
          <div className="space-y-6">
            {/* Dashboard Header */}
            <div className="bg-[#15254D] rounded-2xl shadow-lg p-8 text-white">
              <h1 className="text-3xl font-bold">Student Dashboard</h1>

              <div className="flex justify-end">
                <button 
                onClick={() => setIsEditing(true)}
                className="bg-[#F98603] hover:bg-orange-500 text-white px-g py-2 rounded-lg font-medium">
                    Edit Profile

                </button>

              </div>

              <p className="mt-2 text-lg">
                Welcome back,
                <span className="text-[#F98603] font-semibold">
                  {" "}
                  {student.fullName}
                </span>
              </p>

              <p className="mt-2 text-gray-300">
                Manage your profile, hostel bookings, payments and stay updated
                with the latest announcements.
              </p>
            </div>

            {/* Student Information */}
            <StudentInfo student={student} />

            {/* Hostel Booking */}
            <HostelBooked hostel={null} />

            {/* Payment Information */}
            <PaymentCard payment={null} />

            {/* Admin Announcements */}
            <AnnouncementCard announcements={[]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;