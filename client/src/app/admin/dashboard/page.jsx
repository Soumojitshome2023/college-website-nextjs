import { DashboardCard } from "@/components/admin/dashboard/DashboardCard";
import Link from "next/link";
import React from "react";

//============== Admin Dashborad ===============
const Page = () => {
  return (
    <div>
      <div className="w-full bg-blue-500 py-4 px-5">
        <span className="w-full flex text-white text-lg font-medium uppercase justify-end">
          Welcome: <span>admin</span>
        </span>
      </div>
      <div className="mx-auto mt-5 p-5 w-[90%] min-h-[65vh] flex flex-wrap flex-row justify-center items-center border border-blue-500 rounded">
        <Link className="w-1/2 h-auto flex justify-center items-center" href={"createevent"}>
          <DashboardCard itemName="create event" />
        </Link>
        <Link className="w-1/2 h-auto flex justify-center items-center" href={"#"}>
          <DashboardCard itemName="edit event" />
        </Link>
        <Link className="w-1/2 h-auto flex justify-center items-center" href={"#"}>
          <DashboardCard itemName="create notice" />
        </Link>
        <Link className="w-1/2 h-auto flex justify-center items-center" href={"#"}>
          <DashboardCard itemName="edit notice" />
        </Link>
      </div>
    </div>
  );
};

export default Page;
