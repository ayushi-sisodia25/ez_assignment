import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Contact() {
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSending(true);
      try {
        const response = await axios.post(
          "https://vernanbackend.ezlab.in/api/contact-us/",
          formData
        );
     
        if (response) {
          setSending(false);
          toast.success("Form Submitted Successfully!!!!");
        }
        console.log(response.data);
      } catch (error) {
        toast.warn("Error in submitting the form!");
        console.error("Error submitting form:", error);
      }
  };
  
  return (
    <section
      id="contact"
      className="p-2.5 snap-start min-w-screen min-h-screen py-15 laptop:py-0 laptop:px-0 flex flex-col laptop:flex-row relative items-center"
    >
      {sending && (
        <div className=" absolute min-w-screen min-h-screen p-0 tablet:-m-8 -my-20  bg-white/70 z-99 grid">
          <p className="font-sub-heading text-6xl  self-center text-center">
            {" "}
            Sending ...
          </p>
        </div>
      )}
      {/* left part */}
      <div className="tablet:w-6/12 ">
        <h3 className="font-text tablet:text-[24px] max-w-[500px] place-self-center">
          Whether you have an idea, a question, or simply want to explore how V
          can work together, V're just a message away. <br /> catch up over
          coffee. <br /> Great stories always begin with a good conversation
        </h3>
      </div>
      {/* right part */}
      <div className="tablet:w-6/12 pt-[70px] laptop:pt-[100px] h-full flex flex-col">
        <div className="text-center">
          <h2 className="font-sub-heading text-[40px] text-[#252729]">
            Join the Story
          </h2>
          <p className="font-text">
            Ready to bring your vision to life? Let's talk.
          </p>
        </div>

        <form className="w-full flex flex-col h-full gap-5 tablet:p-20">
          {/* Name Field */}
          <div>
            <input
              type="text"
              id="name"
              required
              onChange={handleChange}
              name="name"
              value={formData.name}
              placeholder="Your name*"
              className={`w-full px-3 py-3 bg-gray-50 border rounded  focus:outline-none   focus:bg-white border-gray-300 ${
                errors.name && "border-red-500 bg-red-50"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          {/* Email Field */}
          <div>
            <input
              type="email"
              required
              id="email"
              onChange={handleChange}
              name="email"
              value={formData.email}
              placeholder="Your email*"
              className={`w-full px-3 py-3 bg-gray-50 border rounded  focus:outline-none   focus:bg-white border-gray-300 ${
                errors.email && "border-red-500 bg-red-50"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          {/* Phone Field */}
          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              maxLength={10}
              onChange={handleChange}
              value={formData.phone}
              placeholder="Phone"
              className="w-full px-3 py-3 bg-gray-50 border focus:outline-none   focus:bg-white border-gray-300 rounded  "
            />
          </div>
          {/* Message Field */}
          <div>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              value={formData.message}
              placeholder="Your message*"
              className={`w-full px-3 py-3 bg-gray-50 border rounded border-gray-300 focus:outline-none focus:bg-white ${
                errors.message && "border-red-500 bg-red-50"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>
          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              onClick={handleSubmit}
              className="bg-orange-500  text-white font-bold py-3.5 px-10 rounded-full hover:scale-110 cursor-pointer"
            >
              Submit
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-row items-center justify-center gap-4 pt-4">
            <p className="font-sub-heading text-[#F15D2B] text-[17px] font-bold!">
              vernita@varnanfilms.co.in
            </p>
            <span className="text-[#F15D2B] text-[17px] font-bold!">|</span>
            <p className="font-sub-heading text-[#F15D2B] text-[17px] font-bold!">
              +91 98736 84567
            </p>
          </div>
        </form>
      </div>

      {/* top circle */}
      <img
        src="Footerircle.svg"
        alt="footercircle"
        className="absolute -z-10 bottom-1/2 left-2/5 translate-x-1/2"
      />
      {/* bottom circle */}
      <img
        src="Footerircle.svg"
        alt="footercircle"
        className="absolute -z-10 top-1/2 right-2/5 -translate-x-1/2"
      />

      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
      />
    </section>
  );
}

export default Contact;
