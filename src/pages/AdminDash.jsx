import { useEffect, useState } from "react";
import AdminNavbar from "@/components/AdminNavbar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Building2,
  CalendarCheck,
  Clock,
} from "lucide-react";

const NAVY = "#0E1733";
const ORANGE = "#F98603";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    hostels: 0,
    bookings: 0,
    pending: 0,
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
      pending: pendingListings.length,
    });
  }, []);

  const cards = [
    {
      title: "Total Users",
      value: stats.users,
      icon: Users,
    },
    {
      title: "Total Hostels",
      value: stats.hostels,
      icon: Building2,
    },
    {
      title: "Bookings",
      value: stats.bookings,
      icon: CalendarCheck,
    },
    {
      title: "Pending Listings",
      value: stats.pending,
      icon: Clock,
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
                <CardContent className="p-6 flex justify-between items-center">

                  <div>

                    <p className="text-gray-500 text-sm">
                      {card.title}
                    </p>

                    <h2
                      className="text-4xl font-bold mt-2"
                      style={{ color: NAVY }}
                    >
                      {card.value}
                    </h2>

                  </div>

                  <div className="bg-orange-100 rounded-full p-4">

                    <Icon
                      size={28}
                      color={ORANGE}
                    />

                  </div>

                </CardContent>
              </Card>
            );

          })}

        </div>

      </div>
    </div>
  );
}