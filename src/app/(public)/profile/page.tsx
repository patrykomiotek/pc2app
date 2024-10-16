import { getUser } from "../login/actions";
import { LogoutButton } from "./LogOutButton";

export default async function ProfilePage() {
  const user = await getUser();

  return (
    <div>
      <h1>Profile success!</h1>
      <p>{user}</p>
      <LogoutButton />
    </div>
  );
}
