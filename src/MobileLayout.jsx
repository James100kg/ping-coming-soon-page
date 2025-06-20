import React from "react";
import logo from "./images/logo.svg"
import graph from "./images/illustration-dashboard.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export function MobileLayout({ email, setEmail, emailError, handleSubmit }) {
    return (
      <div className="font-poppins font-light max-w-lg mx-auto content-wrapper p-6 flex flex-col justify-center items-center">
          <img src={logo} className="pt-20 mb-6" />  
          <h1 className="pt-10 mb-8 text-[35px] text-gray-400">We are launching <span className="text-black font-bold">soon!</span></h1>
          <h2 className="text-[18px] mb-10">Subscribe and get notified</h2>
          <input type="email" value={email} placeholder="Your email address..." onChange={(e) => setEmail(e.target.value)} className={`h-14 w-full mb-2 px-8 py-4 border rounded-full border-solid border-blue-200 placeholder:text-lg placeholder:text-blue-200 placeholder-opacity-60 ${emailError ? 'border border-red-500 focus:border-red-500 focus:ring-red-500' : 'border border-gray-300 focus:border-green-500 focus:ring-green-500'}`}></input>
          {emailError && <p className="text-red-500 text-xs text-left italic">{emailError}</p>}
          <button onClick={handleSubmit} className="h-14 mb-20 w-full rounded-full bg-blue-500 text-white font-semibold shadow-xl shadow-blue-200/50 mt-4">Notify Me</button>
          <img src={graph} className="mb-20"/>
          <div className="icons flex gap-6 mt-20 mb-6">
            <div className="p-3 border rounded-full border-gray-300 text-blue-500">
            <FaFacebookF className="text-xl" />
            </div>
            <div className="p-3 border rounded-full border-gray-300 text-blue-500">
            <FaTwitter className="text-blue-500 text-xl" />
            </div>
            <div className="p-3 border rounded-full border-gray-300 text-blue-500">
            <FaInstagram className="text-blue-500 text-xl" />
            </div>
          </div>
          <p className="text-gray-400 text-sm">© Copyright Ping. All rights reserved.</p>
      </div>
    )
}