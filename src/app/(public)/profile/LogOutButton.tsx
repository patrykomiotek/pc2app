"use client";

import { logout } from "../login/actions";

export const LogoutButton = () => {
  // const handleSubmit = () => {
  //   "use server";

  //   console.log("hello v2");
  // };

  return <button onClick={() => logout()}>Logout</button>;
  // return (
  //   <button
  //     onClick={async () => {
  //       "use server";

  //       console.log("hello!");
  //       // server side 😅
  //       // sql.query('DROP DATABASE')
  //     }}
  //   >
  //     Logout
  //   </button>
  // );
};
