"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {  
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://server-node-cjss.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit");
      }

      setStatus("success");

      // clear form
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => setStatus("idle"), 3000);
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong");
    }
  };

  return (
    <div className="p-10 border shadow-2xl bg-gradient-to-br from-cyan-500/40 via-blue-500/40 to-purple-600/40 rounded-2xl border-white/10 backdrop-blur-xl">
      <h2 className="mb-3 text-4xl font-bold text-white">
        Ready to Get Started?
      </h2>

      <p className="mb-10 text-neutral-200">
        Your email address will not be published. Required fields are marked *
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 text-sm text-neutral-200">
            Your Name *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 text-white border rounded-lg bg-white/10 border-white/20 placeholder-neutral-300 focus:outline-none focus:border-purple-400"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-neutral-200">
            Your Email *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 text-white border rounded-lg bg-white/10 border-white/20 placeholder-neutral-300 focus:outline-none focus:border-purple-400"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-neutral-200">
            Please tell us about your requirement
          </label>
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message..."
            required
            className="w-full px-4 py-3 text-white border rounded-lg bg-white/10 border-white/20 placeholder-neutral-300 focus:outline-none focus:border-purple-400"
          ></textarea>
        </div>

        {status === "error" && (
          <p className="text-sm text-red-400">{errorMsg}</p>
        )}

        {status === "success" && (
          <p className="text-sm text-green-300 font-semibold">
            ✅ Message sent successfully!
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="px-8 py-3 font-bold text-black transition-all bg-white rounded-lg shadow-md hover:bg-neutral-200 disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "SEND MESSAGE"}
        </button>
      </form>
    </div>
  );
}
