
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
      title: "login",
      path: "/login",
    },
  ];

  return (
    <li>

      {links.map((el => (
        <Link href={el.path} key={el.title} className="font-bold text-blue-900 hover:underline p-4 bg-transparent">{el.title}</Link>
      )))}


    </li >
  )
}

export default NavLinks