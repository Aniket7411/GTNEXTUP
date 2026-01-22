'use client';

import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { emailjsConfig } from "../../utils/emailjsConfig";
import "react-toastify/dist/ReactToastify.css";

const Ironform = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.project.trim())
      newErrors.project = "Project name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          formData,
          emailjsConfig.publicKey
        )
        .then(() => {
          toast.success("Form submitted successfully!");
          setFormData({
            name: "",
            email: "",
            project: "",
            phone: "",
          });
          setErrors({});
        })
        .catch(() => {
          toast.error("There was an error sending your message.");
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex justify-center w-2/3 items-center">
      <div
        className="relative rounded-md flex items-center justify-center bg-white shadow-lg w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] overflow-hidden"
        style={{ outline: "1px solid #d1d5db" }}
      >
        {/* Background image at the bottom */}
        <img
          src="/assets/ironbg.png"
          alt="ironbg"
          className="absolute bottom-0 left-0  w-full h-auto object-cover z-0"
        />

        {/* Content wrapper */}
        <div className="relative z-10  flex flex-col md:flex-row items-center w-full gap-8 px-6 ">
          {/* Left side (50%) */}
          <div className="flex flex-col justify-between items-center md:items-start w-full md:w-1/2 h-full text-center md:text-left">
            <h1 className="text-lg text-[#565656] mt-10 md:text-xl lg:text-3xl font-semibold ">
              <span className="italic">Talk</span>{" "}
              <span className="font-bold text-[#000]">
                To Our <br /> Design Strategy  <br />  Team
              </span>{" "}
              <span >
                For Free Consultation
              </span>
            </h1>

            <img
              src="/assets/iron.png"
              alt="iron"
              className="w-[180px] md:w-[240px] lg:w-[280px] mt-10 h-auto self-center md:self-start"
            />
          </div>

          {/* Right side (form, 50%) */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="   rounded-xl p-6 md:p-8 flex flex-col gap-2 w-full md:w-1/2 max-w-sm"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <input
              type="text"
              name="project"
              value={formData.project}
              onChange={handleChange}
              placeholder="Project Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.project && (
              <p className="text-red-500 text-sm">{errors.project}</p>
            )}

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 (IN) Phone Number"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
            <div>
              <button
                type="submit"
                className="mt-2 bg-black text-white font-medium  px-5 py-1 rounded-md hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Ironform;
