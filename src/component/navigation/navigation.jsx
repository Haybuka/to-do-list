import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Navigation = () => {
  const navigation = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Todo",
      route: "todo",
    },
    {
      name: "Contact us",
      route: "contact",
    },
  ];

  return (
    <>
      <header className="md:flex justify-between items-center md:px-[10px] md:py-[20px] shadow-md bg-slate-100">
        <h1 className="flex justify-between items-center">
          <span className="uppercase font-bold text-2xl">TAP</span>
          <div className="block md:hidden">
            <span className="h-2 w-10 block bg-black my-1"></span>
            <span className="h-2 w-10 block bg-black my-1"></span>
            <span className="h-2 w-10 block bg-black my-1"></span>
          </div>
        </h1>

        <nav className="md:flex ">
          {navigation.map((navItem,id) => (
            <li key={id} className="mx-4 text-xl">
              <NavLink
                to={navItem.route}
                className={({ isActive }) =>
                  isActive ? "underline" : ""
                }
              >
                {navItem.name}
              </NavLink>
            </li>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navigation;
