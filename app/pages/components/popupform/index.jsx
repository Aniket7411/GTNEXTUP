import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { emailjsConfig } from "../../utils/emailjsConfig";

// ---------------- Context ----------------
const FormContext = createContext();
export const useFormContext = () => useContext(FormContext);

// ---------------- Provider + Modal + Form ----------------
const IronformProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  // Detect scroll to middle of page (only once per visit)
  useEffect(() => {
    const alreadyShown = localStorage.getItem("formShown");
    if (alreadyShown) return; // Agar pehle hi dikh chuka hai, dobara mat dikhao

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      const pageMiddle = document.body.scrollHeight / 2;
      if (scrollPos >= pageMiddle) {
        setIsOpen(true);
        localStorage.setItem("formShown", "true"); // Mark as shown
        window.removeEventListener("scroll", handleScroll); // listener hatao
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeForm = () => setIsOpen(false);

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
    if (!formData.project.trim()) newErrors.project = "Project name is required";
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
          setFormData({ name: "", email: "", project: "", phone: "" });
          setErrors({});
          closeForm();
        })
        .catch(() => {
          toast.error("There was an error sending your message.");
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <FormContext.Provider value={{ isOpen, closeForm }}>
      {children}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative bg-white rounded-lg shadow-lg w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%] max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeForm}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl font-bold"
            >
              &times;
            </button>

            {/* Form Section */}
            <div className="flex justify-center items-center p-6">
              <div className="relative rounded-md flex items-center justify-center w-full overflow-hidden">
                {/* Background */}
                <img
                  src="./ironbg.png"
                  alt="ironbg"
                  className="absolute bottom-0 left-0 w-full h-auto object-cover z-0"
                />

                <div className="relative z-10 flex flex-col md:flex-row items-center w-full gap-8 px-6">
                  {/* Left side */}
                  <div className="flex flex-col justify-between items-center md:items-start w-full md:w-1/2 h-full text-center md:text-left">
                    <h1 className="text-lg text-[#565656] mt-10 md:text-xl lg:text-3xl font-semibold ">
                      <span className="italic">Talk</span>{" "}
                      <span className="font-bold text-[#000]">
                        To Our <br /> Expert Strategist <br /> Team
                      </span>{" "}
                      <span>For Free Consultation</span>
                    </h1>

                    <img
                      src="./iron.png"
                      alt="iron"
                      className="w-[180px] md:w-[240px] lg:w-[280px] mt-10 h-auto self-center md:self-start"
                    />
                  </div>

                  {/* Right side (Form) */}
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="rounded-xl p-6 md:p-8 flex flex-col gap-2 w-full md:w-1/2 max-w-sm"
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
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                    <input
                      type="text"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      placeholder="Project Name"
                      className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    {errors.project && <p className="text-red-500 text-sm">{errors.project}</p>}

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 (IN) Phone Number"
                      className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

                    <button
                      type="submit"
                      className="mt-2 bg-black text-white font-medium px-5 py-1 rounded-md hover:bg-gray-800 transition"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </FormContext.Provider>
  );
};

export default IronformProvider;
