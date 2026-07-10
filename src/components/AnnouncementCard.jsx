import { FaBullhorn, FaInfoCircle } from "react-icons/fa";

const AnnouncementCard = ({ announcements = [] }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <FaBullhorn className="text-4xl text-[#F98603]" />

        <div>
          <h2 className="text-2xl font-bold text-[#0E1733]">
            Admin Announcements
          </h2>

          <p className="text-gray-500">
            Latest updates from the hostel management.
          </p>
        </div>
      </div>

      {/* Empty State */}
      {announcements.length === 0 ? (
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
          <FaInfoCircle className="text-5xl text-gray-400 mx-auto mb-4" />

          <h3 className="text-xl font-semibold text-gray-600">
            No Announcements Available
          </h3>

          <p className="text-gray-500 mt-2">
            Any announcements posted by the administrator will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="border-l-4 border-[#F98603] bg-orange-50 p-4 rounded-lg"
            >
              <h3 className="font-semibold text-[#0E1733]">
                {announcement.title}
              </h3>

              <p className="text-gray-600 mt-2">{announcement.message}</p>

              <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
                <span>Posted by: {announcement.postedBy || "Admin"}</span>
                <span>{announcement.date}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnnouncementCard;
