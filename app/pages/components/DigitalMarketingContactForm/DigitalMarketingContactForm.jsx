'use client';

import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { X } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import { emailjsConfig } from "../../utils/emailjsConfig";

export default function DigitalMarketingContactForm() {
    const [isOpen, setIsOpen] = useState(false);
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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef();
    const firstTimerRef = useRef(null);

    useEffect(() => {
        // Check if we're on the digital marketing page
        const isDigitalMarketingPage = window.location.pathname === '/digital-marketing-services-india';
        if (!isDigitalMarketingPage) return;

        // Check if form has already been shown in this session
        const hasFormBeenShown = sessionStorage.getItem('dmFormShown');
        if (hasFormBeenShown === 'true') return;

        // Show form only once after 10 seconds
        firstTimerRef.current = setTimeout(() => {
            const currentShown = sessionStorage.getItem('dmFormShown');
            if (currentShown !== 'true') {
                setIsOpen(true);
                sessionStorage.setItem('dmFormShown', 'true');
                document.body.style.overflow = 'hidden';
            }
        }, 10000); // 10 seconds

        // Cleanup timer on unmount
        return () => {
            if (firstTimerRef.current) clearTimeout(firstTimerRef.current);
        };
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    };

    // Close modal when clicking outside
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
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
            setIsSubmitting(true);
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
                    setIsSubmitting(false);

                    // Close modal after successful submission
                    setTimeout(() => {
                        handleClose();
                    }, 2000);
                })
                .catch(() => {
                    toast.error("There was an error sending your message. Please try again.");
                    setIsSubmitting(false);
                });
        } else {
            setErrors(validationErrors);
        }
    };

    // Reset submitted state when modal closes
    useEffect(() => {
        if (!isOpen && isSubmitted) {
            setIsSubmitted(false);
        }
    }, [isOpen, isSubmitted]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-modal-fadeIn"
            onClick={handleBackdropClick}
        >
            <div
                className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative animate-modal-slideUp"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors touch-manipulation"
                    aria-label="Close modal"
                >
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 hover:text-gray-900" />
                </button>

                <div className="flex flex-col lg:flex-row">
                    {/* Left Side - Content */}
                    <div className="lg:w-2/5 bg-gradient-to-br from-yellow-400 to-orange-500 p-4 sm:p-6 md:p-8 text-white flex flex-col justify-center order-2 lg:order-1">
                        <div className="mb-4 sm:mb-6">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 sm:mb-3">
                                Get In Touch
                            </h1>
                            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">
                                Let's Build Something Amazing Together
                            </h2>
                            <p className="text-xs sm:text-sm md:text-base opacity-95 leading-relaxed">
                                Have a project in mind, need expert advice, or simply want to learn more
                                about our digital marketing services? We're ready to connect and help you grow.
                            </p>
                        </div>
                        <div className="mt-2 sm:mt-4">
                            <p className="text-xs sm:text-sm opacity-90 break-words">
                                Mail us directly at{" "}
                                <a
                                    href="mailto:info@getraisetechnologies.com"
                                    className="underline font-semibold hover:opacity-80 transition-opacity break-all"
                                >
                                    info@getraisetechnologies.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="lg:w-3/5 p-4 sm:p-6 md:p-8 order-1 lg:order-2">
                        {isSubmitted ? (
                            <div className="text-center py-6 sm:py-8">
                                <div className="text-green-500 text-5xl sm:text-6xl mb-3 sm:mb-4">✓</div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                                    Thank You!
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 px-2">
                                    We've received your message and will get back to you soon.
                                </p>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                                {/* Grid for Full Name and Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                    <div className="flex flex-col">
                                        <label className="text-xs sm:text-sm font-semibold text-gray-800 mb-1">
                                            <span className="text-red-500">*</span> Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-gray-300 p-2.5 sm:p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none transition-all text-sm sm:text-base"
                                            placeholder="John Doe"
                                        />
                                        {errors.fullName && (
                                            <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                                        )}
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="text-xs sm:text-sm font-semibold text-gray-800 mb-1">
                                            <span className="text-red-500">*</span> Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-gray-300 p-2.5 sm:p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none transition-all text-sm sm:text-base"
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Grid for Company and Title */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                    <div className="flex flex-col">
                                        <label className="text-xs sm:text-sm font-semibold text-gray-800 mb-1">
                                            <span className="text-red-500">*</span> Company
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-gray-300 p-2.5 sm:p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none transition-all text-sm sm:text-base"
                                            placeholder="Company Name"
                                        />
                                        {errors.company && (
                                            <p className="text-red-500 text-xs mt-1">{errors.company}</p>
                                        )}
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="text-xs sm:text-sm font-semibold text-gray-800 mb-1">
                                            <span className="text-red-500">*</span> Title
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-gray-300 p-2.5 sm:p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none transition-all text-sm sm:text-base"
                                            placeholder="Your Title"
                                        />
                                        {errors.title && (
                                            <p className="text-red-500 text-xs mt-1">{errors.title}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="flex flex-col">
                                    <label className="text-xs sm:text-sm font-semibold text-gray-800 mb-1">
                                        <span className="text-red-500">*</span> Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full bg-white border border-gray-300 p-2.5 sm:p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none transition-all resize-none text-sm sm:text-base"
                                        placeholder="Please share your requirement along with your contact no."
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                                    )}
                                </div>

                                {/* Terms Checkbox */}
                                <div className="flex items-start space-x-2 pt-2">
                                    <input
                                        type="checkbox"
                                        name="termsAccepted"
                                        checked={formData.termsAccepted}
                                        onChange={handleChange}
                                        className="mt-1 w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 border-gray-300 rounded focus:ring-yellow-400 flex-shrink-0"
                                        id="terms-checkbox-dm"
                                    />
                                    <label htmlFor="terms-checkbox-dm" className="text-xs sm:text-sm text-gray-700 cursor-pointer leading-relaxed">
                                        I have rechecked the requirement before submitting.
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={!formData.termsAccepted || isSubmitting}
                                    className={`w-full mt-4 sm:mt-6 h-12 sm:h-[56px] rounded-full font-semibold text-sm sm:text-base text-white transition-all duration-300 shadow-md touch-manipulation ${formData.termsAccepted && !isSubmitting
                                        ? "bg-gradient-to-r from-yellow-400 to-orange-500 hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
                                        : "bg-gray-300 cursor-not-allowed"
                                        }`}
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

