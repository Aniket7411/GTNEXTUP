'use client';

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { emailjsConfig } from "../../utils/emailjsConfig";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    title: "",
    message: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (!formData.termsAccepted) {
      toast.error("You must check and confirm your requirements!");
      return;
    }

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
          setIsSubmitted(true);
          setFormData({
            fullName: "",
            email: "",
            company: "",
            title: "",
            message: "",
            termsAccepted: false,
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

    <>

    <section className="bg-[#fff] text-[#000]">
    <div className="mt-[50px] md:mt-[65px]  md:w-[65%] mx-auto p-5 lg:px-12 text-center">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        Get In Touch
      </h1>
      <h2 className="text-base mt-2 font-medium text-gray-700">
        Let's Build Something Amazing Together
      </h2>
      <p className="text-sm mt-2 text-gray-600 max-w-xl mx-auto">
        Have a project in mind, need expert advice, or simply want to learn more
        about our services? We’re ready to connect and help you grow.
      </p>

      <p className="text-sm mt-2 text-gray-700">
        Mail directly at{" "}
        <a
          href="mailto:info@getraisetechnologies.com"
          className="text-yellow-600 underline hover:text-yellow-700"
        >
          info@getraisetechnologies.com
        </a>{" "}
        to apply, or fill out the form below.
      </p>


      {/* Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-4 space-y-2 text-left"
      >
        {/* Left-Right Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["fullName", "email", "company", "title"].map((field) => (
            <div key={field} className="flex flex-col">
              <label className="text-sm font-semibold text-gray-800 mb-1">
                <span className="text-red-500">*</span>{" "}
                {field === "fullName"
                  ? "Full Name"
                  : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                name={field}
                type={field === "email" ? "email" : "text"}
                className="w-full bg-white border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                value={formData[field]}
                onChange={handleChange}
              />
              {errors[field] && (
                <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
              )}
            </div>
          ))}
        </div>

        {/* Message */}
        <div>
          <label className="text-sm font-semibold text-gray-800 mb-1 block">
            <span className="text-red-500">*</span> Message
          </label>
          <textarea
            placeholder="Please share your requirement along with your contact no."
            name="message"
            className="w-full bg-white border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        {/* Terms */}
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-yellow-500 border-gray-300 rounded"
          />
          <label className="text-sm text-gray-700">
            I have rechecked the requirement before submitting.
          </label>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={!formData.termsAccepted}
          className={`w-full md:w-[50%] mx-auto mt-6 h-[56px] rounded-full font-semibold text-white transition-all duration-300 shadow-md ${formData.termsAccepted
            ? "bg-gradient-to-r from-yellow-400 to-orange-500 hover:opacity-90"
            : "bg-gray-300 cursor-not-allowed"
            }`}
        >
          Submit
        </button>
      </form>

      {isSubmitted && (
        <p className="text-green-600 mt-2 font-medium">
          🎉 Submitted successfully!
        </p>
      )}
    </div>
    </section>

    </>
  );
}
