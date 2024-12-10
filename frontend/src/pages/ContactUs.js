import React from "react";
import Navbar from "../components/Navbar"; // Adjust the path based on your directory structure

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="mt-20 flex flex-col items-center">
        {/* Hero Section */}
        <div className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Have questions, feedback, or need assistance? We're here to help. Reach out to us using the form below or find us at our location.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="py-16 px-6 bg-white w-full">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
              Get in Touch
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Subject */}
              <div className="md:col-span-2">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter the subject"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder="Write your message here"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-sky-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Location Section */}
        <div className="py-16 px-6 bg-gray-100 w-full">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Visit Us
            </h2>
            <p className="text-gray-600 mb-8">
              Find us at our office or drop by for a chat. We’d love to hear from you!
            </p>
            <div className="w-full h-96 bg-gray-300 rounded-lg shadow-md">
              {/* Replace this with a Google Maps Embed */}
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092847!2d144.9537353155046!3d-37.81627974202153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f0b1dfb7%3A0x5045675218ce7e0!2zTWFyY2ggQm91cnJuZSwgVmljdG9yaWE!5e0!3m2!1sen!2sau!4v1619398991568!5m2!1sen!2sau"
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-800 text-white py-6 w-full">
          <p className="text-center">
            © {new Date().getFullYear()} Car Management Platform. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
