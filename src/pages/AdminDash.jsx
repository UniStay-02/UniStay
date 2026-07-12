import { useEffect, useState } from "react";
import AdminNavbar from "@/components/AdminNavbar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Building2,
  CalendarCheck,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom"

const NAVY = "#0E1733";
const ORANGE = "#F98603";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    hostels: 0,
    bookings: 0,
 
  });

  useEffect(() => {
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const hostels =
      JSON.parse(localStorage.getItem("hostels")) || [];

    const bookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const pendingListings = hostels.filter(
      (hostel) => hostel.status === "Pending"
    );

    setStats({
      users: users.length,
      hostels: hostels.length,
      bookings: bookings.length,
    
    });
  }, []);

  const cards = [
    {
      title: "Total Users",
      value: stats.users,
      icon: Users,
      link: "/manageusers",
    },
    {
      title: "Total Hostels",
      value: stats.hostels,
      icon: Building2,
      link: "/managelistings",
    },
    {
      title: "Bookings",
      value: stats.bookings,
      icon: CalendarCheck,
       link: "/managebookings",
    },

  ];

  return (
    <div className="min-h-screen bg-slate-100">
      <AdminNavbar />

      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="mb-10">
          <h1
            className="text-4xl font-bold"
            style={{ color: NAVY }}
          >
            Welcome, Admin!
          </h1>

          <p className="text-gray-500 mt-2">
            Here's what's happening on UniStay today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {cards.map((card) => {

            const Icon = card.icon;

            return (
              <Card
                key={card.title}
                className="shadow hover:shadow-lg transition"
              >
               <CardContent className="p-6">

  <div className="flex items-center gap-3">

    <div className="bg-orange-100 p-3 rounded-full">
      <Icon size={24} color={ORANGE} />
    </div>

    <p
      className="text-lg font-semibold"
      style={{ color: NAVY }}
    >
      {card.title}
    </p>

  </div>

  <h2
    className="text-4xl font-bold mt-6"
    style={{ color: NAVY }}
  >
    {card.value}
  </h2>

  <Link
    to={card.link}
    className="inline-block mt-6 font-semibold hover:underline"
    style={{ color: ORANGE }}
  >
    View More →
  </Link>

</CardContent>
              </Card>
            );

          })}

        </div>

      </div>
    </div>
  );
}