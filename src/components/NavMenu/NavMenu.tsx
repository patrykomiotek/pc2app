import { getUser } from "@/app/(public)/login/actions";
import { NavLink } from "./NavLink";

// 1) key -> path
// 2)
// const nextConfig = {
//   experimental: {
//     typedRoutes: true,
//   },
// }

export const NavMenu = async () => {
  const user = await getUser();

  return (
    <nav className="container mb-4">
      <ul className="flex">
        <li className="mr-4">
          <NavLink href="/">Home</NavLink>
        </li>
        <li className="mr-4">
          <NavLink href="/dashboard">Dashboard</NavLink>
        </li>
        <li className="mr-4">
          <NavLink href="/products">Products</NavLink>
        </li>
        <li className="mr-4">
          <NavLink href="/products-server">Products (Server)</NavLink>
        </li>
        <li className="mr-4">
          <NavLink href="/about">About</NavLink>
        </li>
        <li className="mr-4">
          <NavLink href="/contact">Contact</NavLink>
        </li>
        {user && (
          <li className="mr-4">
            <NavLink href="/profile">Profile</NavLink>
          </li>
        )}
        {!user && (
          <li className="mr-4">
            <NavLink href="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
