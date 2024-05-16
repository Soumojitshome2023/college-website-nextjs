"use client"
// ========================= Imports =========================
import React, { useState } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { useAuth } from '@/context/auth';
import ColorRingLoader from '@/components/Common/Others/ColorRingLoader';


// ========================= Three Dot =========================
export default function ThreeDot({ id }) {
  const [Visi, setVisi] = useState(false);
  const { authUser, IsLoading, setAuthUser } = useAuth();
  const [LoadingStatus, setLoadingStatus] = useState(false);

  const HandelVisiChange = () => {
    // setIsCopied(false);
    setVisi(prev => !prev);
  }


  // ========================= Return =========================
  return (<>
    {(authUser && authUser?.isAdmin) &&
      <div className='z-40 relative ml-auto'>

        {/* ========================= Three Dot Icon Btn ========================= */}
        {LoadingStatus ? <ColorRingLoader /> :
          <button className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900  rounded-lg  focus:outline-none dark:text-white " type="button"
            onClick={HandelVisiChange}>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
              <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
          </button>
        }

        {Visi &&
          <div className="z-40 absolute right-1 -top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-800 dark:divide-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">

              {/* ========================= Edit Btn ========================= */}
              <li>
                <Link href={`/admin/editevent/${id}`} className="block font-medium px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Edit Event</Link>
              </li>
            </ul>
          </div>
        }
      </div>
    }
  </>)
}

// ===========================================================================