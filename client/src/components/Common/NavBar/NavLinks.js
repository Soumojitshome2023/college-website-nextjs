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
      title: "Academics",
      path: "/academics",
    },
    {
      isDropdown: true,
      links1: [
        {
          title: "Login",
          path: "/login",
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
      {links.map((el, index) => {
        return (
          <React.Fragment key={index}>

            {(el.isDropdown) ?

              <Dropdown data={el.links1} /> :



              <li className="m-1 transition duration-300 ease-in-out transform hover:scale-110">
                <Link href={el.path} className="font-bold text-blue-900 hover:underline p-3 bg-transparent">{el.title}</Link>
              </li >

            }

          </React.Fragment>
        )
      })}

    </>

  )
}

export default NavLinks