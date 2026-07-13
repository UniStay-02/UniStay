import { useEffect, useState } from "react";
import AdminNavbar from "@/components/AdminNavbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function ManageBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = () => {
    const allBookings = [];

    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("bookedHostel")) {
        try {
          const booking = JSON.parse(localStorage.getItem(key));

          if (booking) {
            allBookings.push({
              id: key,
              ...booking,
            });
          }
        } catch (error) {
          console.error("Invalid booking:", key);
        }
      }
    });

    // newest first
    allBookings.sort(
      (a, b) =>
        new Date(b.createdAt || 0) -
        new Date(a.createdAt || 0)
    );

    setBookings(allBookings);
  };

  const updateStatus = (id, status) => {
    const booking = bookings.find((item) => item.id === id);

    if (!booking) return;

    const updatedBooking = {
      ...booking,
      status,
    };

    localStorage.setItem(
      id,
      JSON.stringify(updatedBooking)
    );

    fetchBookings();
  };

  const deleteBooking = (id) => {
    if (!window.confirm("Delete this booking?")) return;

    localStorage.removeItem(id);

    fetchBookings();
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <AdminNavbar />

      <div className="max-w-7xl mx-auto p-8">
        <Card>
          <CardHeader>
            <CardTitle>Manage Bookings</CardTitle>
          </CardHeader>

          <CardContent className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F98603] text-white">
                <tr>
                  <th className="p-3 text-left">
                    Hostel
                  </th>

                  <th className="p-3 text-left">
                    Name
                  </th>

                  <th className="p-3 text-left">
                    Email
                  </th>

                  <th className="p-3 text-left">
                    Phone
                  </th>

                  <th className="p-3 text-left">
                    Date
                  </th>

                  <th className="p-3 text-left">
                    Time
                  </th>

                  <th className="p-3 text-left">
                    Status
                  </th>

                  <th className="p-3 text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {bookings.length === 0 ? (
                  <tr>
                    <td
                      colSpan="8"
                      className="text-center py-8 text-gray-500"
                    >
                      No bookings found.
                    </td>
                  </tr>
                ) : (
                  bookings.map((booking) => (
                    <tr
                      key={booking.id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-3 font-medium">
                        {booking.hostelAddress
                          ? booking.hostelAddress
                          : booking.hostelId?.replace(
                              /-/g,
                              " "
                            )}
                      </td>

                      <td className="p-3">
                        {booking.fullName}
                      </td>

                      <td className="p-3">
                        {booking.email}
                      </td>

                      <td className="p-3">
                        {booking.phone}
                      </td>

                      <td className="p-3">
                        {booking.viewingDate}
                      </td>

                      <td className="p-3">
                        {booking.viewingTime}
                      </td>

                      <td className="p-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            booking.status === "Approved"
                              ? "bg-green-100 text-green-700"
                              : booking.status ===
                                "Rejected"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>

                      <td className="p-3">
                        <div className="flex gap-2 justify-center">
                          <Button
                            size="sm"
                            onClick={() =>
                              updateStatus(
                                booking.id,
                                "Approved"
                              )
                            }
                          >
                            Approve
                          </Button>

                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              updateStatus(
                                booking.id,
                                "Rejected"
                              )
                            }
                          >
                            Reject
                          </Button>

                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() =>
                              deleteBooking(
                                booking.id
                              )
                            }
                          >
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}