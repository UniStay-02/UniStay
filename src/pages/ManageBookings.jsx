import { useEffect, useState } from "react";
/* import {
  collection,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase"; */

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import AdminNavbar from "@/components/AdminNavbar";

export default function ManageBookings() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const snapshot = await getDocs(collection(db, "bookings"));

      const bookingList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBookings(bookingList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const approveBooking = async (id) => {
    try {
      await updateDoc(doc(db, "bookings", id), {
        status: "Approved",
      });

      fetchBookings();
    } catch (error) {
      console.log(error);
    }
  };

  const rejectBooking = async (id) => {
    try {
      await updateDoc(doc(db, "bookings", id), {
        status: "Rejected",
      });

      fetchBookings();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <AdminNavbar/>
    <div className="min-h-screen bg-slate-100 p-8">

      <Card>

        <CardHeader>
          <CardTitle>Manage Bookings</CardTitle>
        </CardHeader>

        <CardContent className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#F98603] text-white">

              <tr>
                <th className="p-3 text-left">Student</th>
                <th className="p-3 text-left">Hostel</th>
                <th className="p-3 text-left">Room Type</th>
                <th className="p-3 text-left">Check-In</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-center">Actions</th>
              </tr>

            </thead>

            <tbody>

              {bookings.map((booking) => (

                <tr
                  key={booking.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-3">
                    {booking.studentName}
                  </td>

                  <td className="p-3">
                    {booking.hostelName}
                  </td>

                  <td className="p-3">
                    {booking.roomType}
                  </td>

                  <td className="p-3">
                    {booking.checkIn}
                  </td>

                  <td className="p-3">
                    KES {booking.amount}
                  </td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        booking.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : booking.status === "Rejected"
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
                        onClick={() => approveBooking(booking.id)}
                      >
                        Approve
                      </Button>

                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => rejectBooking(booking.id)}
                      >
                        Reject
                      </Button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </CardContent>

      </Card>

    </div>
    </div>
  );
}