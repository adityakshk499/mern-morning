import React from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setuser } from "../store/userSlice";
const Signin = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  console.log(formData);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    const url = "http://localhost:3001/api/v1/createuser";
    const data = await fetch(url, {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(formData),
    });
    const response = await data.json();
    console.log(response);
    if (response.status === false) {
      console.log("inside toast");
      toast.error(response.message, { duration: 3000 });
    } else if (response.status === true) {
      dispatch(setuser("logged in"));
      navigate("/trending");
    }
  }

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div></div>
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
              <div className="w-full flex-1 mt-8">
                <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Sign up with e-mail
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
                  <input
                    required
                    className="w-full mb-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    value={formData.name}
                    name="name"
                  />
                  <input
                    required
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                  />
                  <input
                    required
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={formData.password}
                    name="password"
                  />
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy={7} r={4} />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign Up</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")',
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
