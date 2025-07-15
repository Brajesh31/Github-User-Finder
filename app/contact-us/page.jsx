"use client";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const ContactUs = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    country: "",
    state: "",
  });

  const countries = {
    India: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Dadra and Nagar Haveli and Daman and Diu",
      "Delhi",
      "Jammu and Kashmir",
      "Ladakh",
      "Lakshadweep",
      "Puducherry",
    ],
    Bangladesh: [
      "Barisal",
      "Chittagong",
      "Dhaka",
      "Khulna",
      "Mymensingh",
      "Rajshahi",
      "Rangpur",
      "Sylhet",
    ],
    Thailand: [
      "Amnat Charoen",
      "Ang Thong",
      "Ayutthaya",
      "Bangkok",
      "Bueng Kan",
      "Buri Ram",
      "Chachoengsao",
      "Chai Nat",
      "Chaiyaphum",
      "Chanthaburi",
      "Chiang Mai",
      "Chiang Rai",
      "Chonburi",
      "Chumphon",
      "Kalasin",
      "Kamphaeng Phet",
      "Kanchanaburi",
      "Khon Kaen",
      "Krabi",
      "Lampang",
      "Lamphun",
      "Loei",
      "Lopburi",
      "Mae Hong Son",
      "Maha Sarakham",
      "Mukdahan",
      "Nakhon Nayok",
      "Nakhon Pathom",
      "Nakhon Phanom",
      "Nakhon Ratchasima",
      "Nakhon Sawan",
      "Nakhon Si Thammarat",
      "Nan",
      "Narathiwat",
      "Nong Bua Lamphu",
      "Nong Khai",
      "Nonthaburi",
      "Pathum Thani",
      "Pattani",
      "Phang Nga",
      "Phatthalung",
      "Phayao",
      "Phetchabun",
      "Phetchaburi",
      "Phichit",
      "Phitsanulok",
      "Phra Nakhon Si Ayutthaya",
      "Phrae",
      "Phuket",
      "Prachinburi",
      "Prachuap Khiri Khan",
      "Ranong",
      "Ratchaburi",
      "Rayong",
      "Roi Et",
      "Sa Kaeo",
      "Sakon Nakhon",
      "Samut Prakan",
      "Samut Sakhon",
      "Samut Songkhram",
      "Saraburi",
      "Satun",
      "Sing Buri",
      "Sisaket",
      "Songkhla",
      "Sukhothai",
      "Suphan Buri",
      "Surat Thani",
      "Surin",
      "Tak",
      "Trang",
      "Trat",
      "Ubon Ratchathani",
      "Udon Thani",
      "Uthai Thani",
      "Uttaradit",
      "Yala",
      "Yasothon",
    ],
    Denmark: [
      "Capital Region of Denmark",
      "Central Denmark Region",
      "North Denmark Region",
      "Region Zealand",
      "Region of Southern Denmark",
    ],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // If country changes, reset the state
    if (name === "country") {
      setUserData((prevData) => ({
        ...prevData,
        country: value,
        state: "",
      }));
    } else {
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const submitData = async (e) => {
    e.preventDefault();
    const { name, email, subject, message, country, state } = userData;

    if (name && email && country && state && subject && message) {
      try {
        const res = await fetch(
          "https://github-user-search-megh-default-rtdb.asia-southeast1.firebasedatabase.app/contact-us.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              country,
              state,
              subject,
              message,
            }),
          }
        );

        if (res.ok) {
          setUserData({
            name: "",
            email: "",
            subject: "",
            message: "",
            country: "",
            state: "",
          });
          toast.success("Enquiry Submitted Successfully!");
        } else {
          toast.error("Failed to submit Enquiry. Please try again later.");
        }
      } catch (error) {
        console.error("Error submitting data:", error);
        toast.error("An error occurred while submitting your enquiry.");
      }
    } else {
      toast.error("All fields are mandatory.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      {/* Toaster Component */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          // Customize your toast styles here
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />

      <div className="w-full max-w-lg p-8 rounded-lg shadow-lg bg-gradient-to-br from-teal-500 to-cyan-600">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={submitData} id="form">
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={userData.name}
              onChange={handleInputChange}
              name="name"
              className="w-full p-2 mt-1 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              id="email"
              className="w-full p-2 mt-1 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="your.email@example.com"
              required
            />
          </div>

          {/* Country Field */}
          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-semibold">
              Country
            </label>
            <select
              id="country"
              value={userData.country}
              onChange={handleInputChange}
              name="country"
              className="w-full p-2 mt-1 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            >
              <option value="">Select a country</option>
              {Object.keys(countries).map((countryName) => (
                <option key={countryName} value={countryName}>
                  {countryName}
                </option>
              ))}
            </select>
          </div>

          {/* State Field */}
          {userData.country && (
            <div className="mb-4">
              <label htmlFor="state" className="block text-sm font-semibold">
                {userData.country === "Bangladesh"
                  ? "Division"
                  : userData.country === "Thailand"
                  ? "Province"
                  : userData.country === "Denmark"
                  ? "Region"
                  : "State"}
              </label>
              <select
                id="state"
                value={userData.state}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
                name="state"
              >
                <option value="">
                  {userData.country === "Bangladesh"
                    ? "Select a division"
                    : userData.country === "Thailand"
                    ? "Select a province"
                    : userData.country === "Denmark"
                    ? "Select a region"
                    : "Select a state"}
                </option>
                {countries[userData.country].map((stateName) => (
                  <option key={stateName} value={stateName}>
                    {stateName}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Subject Field */}
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-semibold">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={userData.subject}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Subject"
              required
            />
          </div>

          {/* Description Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold">
              Description
            </label>
            <textarea
              id="message"
              value={userData.message}
              onChange={handleInputChange}
              rows="4"
              name="message"
              className="w-full p-2 mt-1 text-gray-900 bg-white resize-none rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Your message..."
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full px-6 py-2 font-bold text-gray-900 bg-white rounded-full hover:bg-cyan-300 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
