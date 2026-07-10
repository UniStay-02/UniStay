import StudentForm from "../components/StudentForm";

const Profile = () => {
  const handleSave = (studentData) => {
    console.log("Student Profile:", studentData);
  };

  return (
    <div className="min-h-screen bg-[#0E1733] py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <StudentForm onSave={handleSave} />
      </div>
    </div>
  );
};

export default Profile;
