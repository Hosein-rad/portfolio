"use client";

import { useState } from "react";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function Form() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Replace the console.log with your API call
    try {
      console.log({ name, email, message });
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name, email, message }) });
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("idle");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 md:m-10 flex mx-auto w-70 md:w-100 max-w-100 flex-col justify-center items-center text-sm md:text-lg text-black dark:text-white rounded-3xl bg-gray-200 dark:bg-gray-950/80"
    >
      <input
        id="name"
        type="text"
        value={name}
        placeholder={t("contact.form.name")}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full py-3 px-4 mt-1 border-3 border-black/20 dark:border-white/10 rounded-tr-2xl rounded-tl-2xl bg-gray-300/40 dark:bg-gray-900 outline-0 focus:border-sky-600/50 dark:focus:border-sky-200/50 hover:bg-gray-300 dark:hover:bg-gray-800 focus:bg-gray-300 dark:focus:bg-gray-800 duration-300"
      />
      <input
        id="email"
        type="email"
        value={email}
        placeholder={t("contact.form.email")}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full py-3 px-4 mt-1 border-3 border-black/20 dark:border-white/10 bg-gray-300/40 dark:bg-gray-900 outline-0 focus:border-sky-600/50 dark:focus:border-sky-200/50 hover:bg-gray-300 dark:hover:bg-gray-800 focus:bg-gray-300 dark:focus:bg-gray-800 duration-300"
      />
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={5}
        placeholder={t("contact.form.message")}
        className="w-full py-3 px-4 mt-1 resize-none border-3 border-black/20 dark:border-white/10 rounded-br-2xl rounded-bl-2xl bg-gray-300/40 dark:bg-gray-900 outline-0 focus:border-sky-600/50 dark:focus:border-sky-200/50 hover:bg-gray-300 dark:hover:bg-gray-800 focus:bg-gray-300 dark:focus:bg-gray-800 duration-300"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3 px-4 mt-2 border-3 font-bold border-black/20 dark:border-white/10 rounded-2xl bg-gray-300/40 dark:bg-gray-900 outline-0 focus:border-sky-600/50 dark:focus:border-sky-200/50 hover:bg-gray-300 dark:hover:bg-gray-800 focus:bg-gray-300 dark:focus:bg-gray-800 cursor-pointer duration-300"
      >
        {t("contact.form.send")}
      </button>
    </form>
  );
}
