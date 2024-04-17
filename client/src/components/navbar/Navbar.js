
import Links from "./links/Links"

function Navbar() {
  return (
    <div>
      <div>
        <h1></h1>
      </div>
      <div className=" flex justify-around items-center gap-3 w-full">
        <Links />

      </div>
    </div>
  )
}

export default Navbar