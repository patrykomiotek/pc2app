import { NavLink } from "./NavLink";

// 1) key -> path
// 2)
// const nextConfig = {
//   experimental: {
//     typedRoutes: true,
//   },
// }

export const NavMenu = () => {
  return (
    <nav className="container mb-4">
      <ul className="flex">
        <li className="mr-4">
          <NavLink href="/">Home</NavLink>
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
      </ul>
    </nav>
  );
};
