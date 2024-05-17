"use client";
import axios from "axios";
import { CreateEvent } from "@/Helper/CreateEvent";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/auth";
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import ColorRingLoader from "@/components/Common/Others/ColorRingLoader";

const Page = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [file, setFile] = useState();
  const [RingLoader, setRingLoader] = useState(false);

  const nav = useRouter();
  const { authUser, IsLoading, setAuthUser } = useAuth();

  useEffect(() => {
    if (!IsLoading && !(authUser && authUser?.isAdmin)) {
      nav.push("/login");
    }
  }, [authUser, IsLoading])


  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [])

  const handleSubmit = async (e) => {
    setRingLoader(true);
    try {
      e.preventDefault();
      const imageData = new FormData();

      const folder = process.env.NEXT_PUBLIC_CLOUD_FOLDER;
      const cloud_name = process.env.NEXT_PUBLIC_CLOUDNAME;
      const upload_preset = process.env.NEXT_PUBLIC_UPLOAD_PRESET;

      imageData.append("file", file);
      imageData.append('folder', folder);
      imageData.append("cloud_name", cloud_name);
      imageData.append("upload_preset", upload_preset);

      const { data } = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, imageData)

      const resp = await CreateEvent(title, details, data?.url);
      setTitle("");
      setDetails("");
      setFile();
      // alert(resp?.message);
      Swal.fire(
        'Done!',
        'Your event create successfully.',
        'success'
      )
      console.log(resp);
    } catch (error) {
      alert(error);
      console.log(error);
    }
    setRingLoader(false);
  };


  return (<>
    {(authUser && authUser?.isAdmin) &&
      <div className="my-10 m-2">
        <h2 className="text-center text-4xl font-bold pb-10">Create Event</h2>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              for="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Event Title
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              for="details"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Event Details
            </label>
            <textarea
              id="details"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter event details..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-5">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="user_avatar"
            >
              Upload Event Poster
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              name="event"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <div
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="user_avatar_help"
            >
              A poster image is required for uploading an event
            </div>
          </div>
          {RingLoader ? <ColorRingLoader /> :
            <button
              type="submit"
              className="w-full bg-blue-700 py-4 rounded-lg text-white"
            >
              Create Event
            </button>
          }
        </form>
      </div>
    }
  </>);
};


export default Page;
