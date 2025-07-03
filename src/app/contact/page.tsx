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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission...
  };

  return (
    <section className="relative overflow-hidden py-20 px-6 bg-gradient-to-br from-[#94C973] to-[#76B947]">
      {/* Decorative circles */}
      <div className="absolute top-4 left-4 w-20 h-20 bg-white/20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full"></div>

      {/* Form container */}
      <div className="relative max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-[#2F5233] mb-6 text-center">
          Your Turn... Say Hi
        </h1>
        <p className="text-sm text-[#4a584c] mb-12 text-center">
          Got a hot take, feedback, or meme to share? We’re all ears—hit us up
          and join the convo!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-[#2F5233] font-medium mb-1"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8BCD50]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-[#2F5233] font-medium mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8BCD50]"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-[#2F5233] font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="wassup..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8BCD50]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#8BCD50] text-white font-semibold py-3 rounded-lg hover:bg-[#518850] hover:cursor-pointer duration-200 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
