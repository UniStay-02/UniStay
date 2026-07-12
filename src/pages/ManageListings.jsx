import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "@/components/AdminNavbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const NAVY = "#0E1733";
const ORANGE = "#F98603";

export default function ManageListings() {
  const [hostels, setHostels] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("hostels")) || [];

    setHostels(stored);
  }, []);

  const deleteListing = (id) => {
    if (!window.confirm("Delete this listing?")) return;

    const updated = hostels.filter(
      (hostel) => hostel.id !== id
    );

    setHostels(updated);

    localStorage.setItem(
      "hostels",
      JSON.stringify(updated)
    );
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <AdminNavbar />

      <div className="max-w-7xl mx-auto p-8">

        <Card>

          <CardHeader className="flex flex-row justify-between items-center">

            <CardTitle className="text-2xl">
              Manage Listings
            </CardTitle>

            <Link to="/addhostel">
              <Button
                style={{ backgroundColor: ORANGE }}
              >
                + Add Hostel
              </Button>
            </Link>

          </CardHeader>

          <CardContent>

            {hostels.length === 0 ? (

              <div className="text-center py-12">

                <h2 className="text-2xl font-bold">
                  No Listings Yet
                </h2>

                <p className="text-gray-500 mt-2">
                  Start by adding your first hostel.
                </p>

              </div>

            ) : (

              <table className="w-full">

                <thead
                  className="text-white"
                  style={{ backgroundColor: NAVY }}
                >
                  <tr>
                    <th className="p-4 text-left">Hostel</th>
                    <th className="p-4 text-left">Location</th>
                    <th className="p-4 text-left">Rent</th>
                    <th className="p-4 text-left">Status</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>

                  {hostels.map((hostel) => (

                    <tr
                      key={hostel.id}
                      className="border-b"
                    >

                      <td className="p-4 font-semibold">
                        {hostel.hostelName}
                      </td>

                      <td className="p-4">
                        {hostel.area}, {hostel.county}
                      </td>

                      <td className="p-4">
                        KES {hostel.rent}
                      </td>

                      <td className="p-4">
                        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">
                          Available
                        </span>
                      </td>

                      <td className="p-4">

                        <div className="flex gap-2 justify-center">

                          <Link
                            to={`/hostels/${hostel.id}`}
                          >
                            <Button size="sm">
                              View
                            </Button>
                          </Link>

                          <Button
                            size="sm"
                            variant="outline"
                          >
                            Edit
                          </Button>

                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() =>
                              deleteListing(hostel.id)
                            }
                          >
                            Delete
                          </Button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            )}

          </CardContent>

        </Card>

      </div>
    </div>
  );
}