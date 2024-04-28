
import Link from "next/link";


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
        <li key={index} className="m-1">
          <Link href={el.path} className="font-bold text-blue-900 hover:underline p-3 bg-transparent">{el.title}</Link>
        </li >
      ))}

    </>

  )
}

export default NavLinks