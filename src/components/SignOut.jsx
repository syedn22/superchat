import React from "react";

export default function SignOut({ auth, onClick }) {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={onClick}>
        Sign Out
      </button>
    )
  );
}
