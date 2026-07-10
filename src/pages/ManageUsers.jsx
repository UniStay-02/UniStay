import { useEffect, useState } from "react";
/* import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase"; */

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AdminNavbar from "@/components/AdminNavbar";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const snapshot = await getDocs(collection(db, "users"));

      const userList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setUsers(userList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const suspendUser = async (id) => {
    try {
      await updateDoc(doc(db, "users", id), {
        status: "Suspended",
      });

      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const activateUser = async (id) => {
    try {
      await updateDoc(doc(db, "users", id), {
        status: "Active",
      });

      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      await deleteDoc(doc(db, "users", id));
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
    <AdminNavbar/>
    <div className="p-8 mt-4 bg-slate-100 min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Manage Users</CardTitle>
        </CardHeader>

        <CardContent className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#F98603] text-white">

              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-center">Actions</th>
              </tr>

            </thead>

            <tbody>

              {users.map((user) => (

                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-3">{user.name}</td>

                  <td className="p-3">{user.email}</td>

                  <td className="p-3">{user.phone}</td>

                  <td className="p-3">{user.role}</td>

                  <td className="p-3">
                    {user.status}
                  </td>

                  <td className="p-3">

                    <div className="flex gap-2 justify-center">

                      <Button
                        size="sm"
                        onClick={() => activateUser(user.id)}
                      >
                        Activate
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => suspendUser(user.id)}
                      >
                        Suspend
                      </Button>

                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
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