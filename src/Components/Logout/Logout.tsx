"use client";

import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <>
      <button
        onClick={() =>
          signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/`,
          })
        }
        className="block px-4 py-2 text-red-600"
      >
        Sign out
      </button>
    </>
  );
};

export default Logout;
