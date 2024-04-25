
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
      title: "Adminstration",
      path: "/adminstration",
    },
    {
      title: "login",
      path: "/login",
    },
  ];

  return (
    <div>

      {links.map((el => (
        <Link href={el.path} key={el.title} className="font-bold text-blue-900 hover:underline p-4">{el.title}</Link>
      )))}


    </div >
  )
}

export default NavLinks