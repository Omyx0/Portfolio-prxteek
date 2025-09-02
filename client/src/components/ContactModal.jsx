import React, { useState } from "react";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Server error. Please try later.");
    }
  };

  if (!isOpen) return null; // don't render when closed

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white p-6 rounded-lg w-96 relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
        >
          ✖
        </button>

        <h2 className="text-2xl font-semibold text-purple-400 mb-4">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-purple-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-purple-500 outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-purple-500 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition rounded py-2 font-semibold"
          >
            Send
          </button>
        </form>

        {status && <p className="mt-3 text-sm text-gray-400">{status}</p>}
      </div>
    </div>
  );
};

export default ContactModal;