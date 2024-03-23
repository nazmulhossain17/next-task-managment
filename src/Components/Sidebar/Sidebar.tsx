import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { authOptions } from "~/server/auth";
import Logout from "../Logout/Logout";

const Sidebar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <aside className="w-64 overflow-y-auto bg-gray-800 text-white md:w-48 lg:w-64">
        <div className="p-4">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <ul className="mt-4">
            <li>
              <Link href="/dashboard">
                <p className="block px-4 py-2">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/complete">
                <p className="block px-4 py-2">Completed task</p>
              </Link>
            </li>

            <li>
              <Link href="/dashboard/settings">
                <p className="block px-4 py-2">Settings</p>
              </Link>
            </li>
            <li>
              <Logout />
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
