import { useEffect, useState } from "react";
import AdminNavbar from "@/components/AdminNavbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    const storedUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    setUsers(storedUsers);
  };

  const updateRole = (id, role) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, role } : user
    );

    setUsers(updatedUsers);

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );
  };

  const deleteUser = (id) => {
    if (!window.confirm("Delete this user?")) return;

    const updatedUsers = users.filter(
      (user) => user.id !== id
    );

    setUsers(updatedUsers);

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <AdminNavbar />

      <div className="max-w-7xl mx-auto p-8">
        <Card>
          <CardHeader>
            <CardTitle>
              Manage Users ({users.length})
            </CardTitle>
          </CardHeader>

          <CardContent className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F98603] text-white">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-center">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center py-8 text-gray-500"
                    >
                      No users found.
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-3">
                        {user.fullName || user.name}
                      </td>

                      <td className="p-3">
                        {user.email}
                      </td>

                      <td className="p-3">
                        {user.phone || "-"}
                      </td>

                      <td className="p-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            user.role === "Admin"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {user.role || "Student"}
                        </span>
                      </td>

                      <td className="p-3">
                        <div className="flex gap-2 justify-center">
                          <Button
                            size="sm"
                            onClick={() =>
                              updateRole(
                                user.id,
                                "Admin"
                              )
                            }
                          >
                            Make Admin
                          </Button>

                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              updateRole(
                                user.id,
                                "Student"
                              )
                            }
                          >
                            Make Student
                          </Button>

                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() =>
                              deleteUser(user.id)
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