import React from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";


function NavLinks() {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Events",
      path: "/events",
    },
    {
      isDropdown: true,
      title: "Academics",
      links: [
        {
          title: "Departments",
          path: "/academics/departments",
        },
        {
          title: "Login",
          path: "/login",
        },
      ]
    },
    {
      title: "Alumni",
      path: "/alumni",
    },
    {
      title: "Administration",
      path: "/administration",
    },
    {
      title: "Login",
      path: "/login",
    },

  ];

  return (
    <>
      {links.map((el, index) => (
        <React.Fragment key={index}>
          {(el.isDropdown) ?
            <Dropdown data={el} />
            :
            <li className="m-1 transition duration-300 ease-in-out transform hover:scale-110">
              <Link href={el.path} className="font-bold text-blue-900 hover:underline px-2 bg-transparent">{el.title}</Link>
            </li >
          }
        </React.Fragment>
      ))}
    </>

  )
}

export default NavLinks