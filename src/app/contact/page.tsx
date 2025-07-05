// app/contact/page.tsx
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      alert("Server error.");
    }
  };

  return (
    <section className="relative overflow-hidden py-20 px-6 bg-gradient-to-br from-[#94C973] to-[#76B947]">
      {/* Decorative circles */}
      <div className="absolute top-4 left-4 w-20 h-20 bg-white/20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full"></div>

      {/* Form container */}
      <div className="relative max-w-2xl mx-auto bg-white/90 rounded-3xl shadow-[0_10px_40px_0_rgba(44,87,57,0.12)] border border-[#B1D8B7] p-10 md:p-14 mt-4 overflow-hidden backdrop-blur">
        {/* Decorative blobs inside card */}
        <div className="absolute top-6 left-6 w-24 h-24 bg-[#B1D8B7]/40 rounded-full blur-2xl pointer-events-none z-0" />
        <div className="absolute bottom-4 right-10 w-20 h-20 bg-[#94C973]/40 rounded-full blur-xl pointer-events-none z-0" />

        {/* Form Content */}
        <div className="relative z-10">
          <div className="flex flex-col items-center mb-6">
            <span className="text-4xl mb-1">💬</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#2F5233] text-center mb-2 tracking-tight drop-shadow-sm">
              Your Turn... Say Hi
            </h1>
          </div>
          <p className="text-base text-[#2F5233]/70 mb-10 text-center font-medium">
            Got a hot take, feedback, or meme to share? We’re all ears—hit us up
            and join the convo!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-[#2F5233] font-semibold mb-1"
              >
                Name
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#76B947] text-lg">
                  👤
                </span>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#F0F9F4] border border-[#B1D8B7] rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-[#8BCD50] text-[#2F5233] font-medium shadow-sm placeholder-gray-400 transition"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-[#2F5233] font-semibold mb-1"
              >
                Email
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#76B947] text-lg">
                  ✉️
                </span>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#F0F9F4] border border-[#B1D8B7] rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-[#8BCD50] text-[#2F5233] font-medium shadow-sm placeholder-gray-400 transition"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-[#2F5233] font-semibold mb-1"
              >
                Message
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-[#76B947] text-lg">
                  📝
                </span>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="wassup"
                  rows={5}
                  className="w-full bg-[#F0F9F4] border border-[#B1D8B7] rounded-xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-[#8BCD50] text-[#2F5233] font-medium shadow-sm placeholder-gray-400 transition"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#76B947] text-white cursor-pointer font-semibold py-4 rounded-xl shadow-lg hover:bg-[#2F5233] hover:shadow-xl transition duration-200 text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
