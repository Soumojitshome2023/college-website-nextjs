
import Link from "next/link";


function Links() {
  const links = [
    {
      title: "Homepage",
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
  ];

  return (
    <div>

      {links.map((el => (
        <Link href={el.path} key={el.title} className=" p-4">{el.title}</Link>
      )))}


    </div >
  )
}

export default Links