"use client"
import { DashboardCard } from "@/components/admin/dashboard/DashboardCard";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useAuth } from "@/context/auth";
import { AdminLogOutFunc } from "@/Helper/AdminLogOutFunc";

//============== Admin Dashborad ===============
const Page = () => {
  const nav = useRouter();
  const { authUser, IsLoading, setAuthUser } = useAuth();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [])

  useEffect(() => {
    if (!IsLoading && !(authUser && authUser?.isAdmin)) {
      nav.push("/login");
    }
  }, [authUser, IsLoading])

  const LogOut = async () => {
    AdminLogOutFunc();
    setAuthUser(null);
  }

  return (<>
    {(authUser && authUser?.isAdmin) &&
      <div>
        <div className="w-full bg-blue-500 py-4 px-2 flex justify-between">
          <span className="w-full text-white text-lg font-medium">
            Welcome: <span> Admin ({authUser?.name})</span>
          </span>
          <button className="font-bold text-white hover:underline px-1 bg-transparent" onClick={LogOut}>
            LogOut
          </button>
        </div>
        <div className="mx-auto mt-5 p-5 w-[90%] min-h-[65vh] flex flex-wrap flex-row justify-center items-center border border-blue-500 rounded">
          <Link className="md:w-1/2 w-full h-auto flex justify-center items-center" href={"createevent"}>
            <DashboardCard itemName="create event" />
          </Link>
          {/* <Link className="md:w-1/2 w-full h-auto flex justify-center items-center" href={"editevent"}>
            <DashboardCard itemName="edit event" />
          </Link> */}
          <Link className="md:w-1/2 w-full h-auto flex justify-center items-center" href={"#"}>
            <DashboardCard itemName="create notice" />
          </Link>
          <Link className="md:w-1/2 w-full h-auto flex justify-center items-center" href={"#"}>
            <DashboardCard itemName="edit notice" />
          </Link>
        </div>
      </div>
    }
  </>);
};

export default Page;
