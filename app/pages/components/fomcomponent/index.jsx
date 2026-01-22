// ContactForm.js
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { emailjsConfig } from "../../utils/emailjsConfig";

export default function ContactForm({ isOpen, onClose }) {
    const formRef = useRef();
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

    if (!isOpen) return null; // modal hidden

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
            toast.error("You must accept Terms & Conditions");
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
                .then(
                    () => {
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
                    },
                    () => {
                        toast.error("There was an error sending your message.");
                    }
                );
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-4xl relative">
                {/* Close Button */}
                <button
                    className="absolute top-2 right-2 text-gray-600"
                    onClick={onClose}
                >
                    ✕
                </button>

                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Side */}
                    <div className="md:w-1/2 p-6">
                        <h1 className="text-3xl md:text-4xl font-bold">Get In Touch</h1>
                        <h1 className="text-sm mt-2 font-medium">
                            Let’s Build Something Amazing Together
                        </h1>
                        <p className="text-sm mt-4 text-gray-600">
                            Have a project in mind, need expert advice, or simply want to
                            learn more about our services? We’re ready to connect and help you
                            grow.
                        </p>
                        <img
                            src="/your-image.png"
                            alt="Consultant"
                            className="mt-6 w-40 md:w-56"
                        />
                    </div>

                    {/* Right Form */}
                    <div className="md:w-1/2 p-6">
                        <form ref={formRef} onSubmit={handleSubmit}>
                            {/* Fields */}
                            {["fullName", "email", "company", "title", "message"].map(
                                (field) => (
                                    <div key={field} className="mb-3">
                                        <label className="text-sm font-medium block mb-1">
                                            <span className="text-red-500">*</span>{" "}
                                            {field === "fullName"
                                                ? "Full Name"
                                                : field.charAt(0).toUpperCase() + field.slice(1)}
                                        </label>
                                        {field === "message" ? (
                                            <textarea
                                                placeholder="Please share your requirement..."
                                                name={field}
                                                rows="3"
                                                className="w-full border p-2 rounded"
                                                value={formData[field]}
                                                onChange={handleChange}
                                            />
                                        ) : (
                                            <input
                                                name={field}
                                                type={field === "email" ? "email" : "text"}
                                                className="w-full border p-2 rounded"
                                                value={formData[field]}
                                                onChange={handleChange}
                                            />
                                        )}
                                        {errors[field] && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors[field]}
                                            </p>
                                        )}
                                    </div>
                                )
                            )}

                            {/* Terms */}
                            <div className="flex items-center space-x-2 mt-3">
                                <input
                                    type="checkbox"
                                    name="termsAccepted"
                                    checked={formData.termsAccepted}
                                    onChange={handleChange}
                                    className="w-4 h-4"
                                />
                                <label className="text-sm">
                                    I agree to the{" "}
                                    <span className="cursor-pointer underline hover:text-blue-600">
                                        Terms and Conditions
                                    </span>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={!formData.termsAccepted}
                                className={`w-full mt-4 py-2 rounded text-black transition ${formData.termsAccepted
                                    ? "bg-yellow-300 hover:bg-yellow-400"
                                    : "bg-gray-300 cursor-not-allowed"
                                    }`}
                            >
                                Submit
                            </button>

                            {isSubmitted && (
                                <p className="text-green-500 mt-2 text-sm">
                                    Submitted successfully!
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
