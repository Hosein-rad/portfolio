"use client";

import { useState } from "react";
import { useTranslation } from "@/app/hooks/useTranslation";
import { BorderBeam } from "../ui/border-beam";

export default function Form() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    // "/send-email.php"
    try {
      const response = await fetch("/send-email.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ name, email, message, website: "" }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setErrorMsg(error.message || t("contact.form.sendError"));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative p-2 md:m-10 flex mx-auto w-70 md:w-100 max-w-100 flex-col justify-center items-center text-sm md:text-lg text-black dark:text-white rounded-3xl bg-gray-200 dark:bg-gray-950/80 overflow-clip"
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

      <input
        type="text"
        name="website"
        id="website"
        value=""
        onChange={() => {}}
        style={{ display: "none" }}
        tabIndex={-1}
        aria-hidden="true"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full h-15 py-3 px-4 mt-2 font-bold border-3 border-black/20 dark:border-white/10 rounded-2xl bg-gray-300/40 dark:bg-gray-900 outline-0 focus:border-sky-600/50 dark:focus:border-sky-200/50 hover:bg-gray-300 dark:hover:bg-gray-800 focus:bg-gray-300 dark:focus:bg-gray-800 cursor-pointer overflow-hidden duration-300"
      >
        {status === "sending" ? (
          <svg
            fill="none"
            height="100%"
            width="100%"
            className="scale-300"
            viewBox="0 0 1920 1080"
          >
            <g opacity="0.25" id="i0">
              <animate
                repeatCount="indefinite"
                attributeName="opacity"
                dur="1.35s"
                begin="0s"
                fill="freeze"
                values="0.25; 1; 0.25; 0.25"
                keyTimes="0; 0.17284; 0.37037; 1"
                keySplines="0.333 0 0.667 1; 0.333 0 0.667 1; 0 0 1 1"
                calcMode="spline"
              />
              <g transform="translate(782,540)">
                <animateTransform
                  repeatCount="indefinite"
                  type="translate"
                  attributeName="transform"
                  dur="1.35s"
                  begin="0s"
                  calcMode="spline"
                  values="782 540; 782 500; 782 540; 782 540"
                  keyTimes="0; 0.17284; 0.37037; 1"
                  keySplines="0.333 0 0.667 1; 0.333 0 0.667 1; 0 0 1 1"
                  fill="freeze"
                />
                <g transform="scale(0.5,0.5)">
                  <animateTransform
                    repeatCount="indefinite"
                    type="scale"
                    attributeName="transform"
                    dur="1.35s"
                    begin="0s"
                    calcMode="spline"
                    values="0.5 0.5; 0.75 0.75; 0.5 0.5; 0.5 0.5"
                    keyTimes="0; 0.17284; 0.37037; 1"
                    keySplines="0.333 0 0.667 1; 0.333 0 0.667 1; 0 0 1 1"
                    fill="freeze"
                  />
                  <g transform="translate(284,-92)">
                    <g id="i1" transform="matrix(1,0,0,1,-284,92)">
                      <ellipse ry="60" rx="60" cy="0" cx="0" fill="#0062db" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g opacity="0.25" id="i2">
              <animate
                repeatCount="indefinite"
                attributeName="opacity"
                dur="1.35s"
                begin="0s"
                fill="freeze"
                values="0.25; 0.25; 1; 0.25; 0.25"
                keyTimes="0; 0.111111; 0.283951; 0.481481; 1"
                keySplines="0 0 1 1; 0.333 0 0.667 1; 0.333 0 0.667 1; 0 0 1 1"
                calcMode="spline"
              />
              <g transform="translate(902,540)">
                <animateTransform
                  repeatCount="indefinite"
                  type="translate"
                  attributeName="transform"
                  dur="1.35s"
                  begin="0s"
                  calcMode="spline"
                  values="902 540; 902 540; 902 500; 902 540; 902 540"
                  keyTimes="0; 0.111111; 0.283951; 0.481481; 1"
                  keySplines="0 0 1 1; 0.333 0 0.667 1; 0.333 0 0.667 1; 0 0 1 1"
                  fill="freeze"
                />
                <g transform="scale(0.5,0.5)">
                  <animateTransform
                    repeatCount="indefinite"
                    type="scale"
                    attributeName="transform"
                    dur="1.35s"
                    begin="0s"
                    calcMode="spline"
                    values="0.5 0.5; 0.5 0.5; 0.75 0.75; 0.5 0.5; 0.5 0.5"
                    keyTimes="0; 0.111111; 0.283951; 0.481481; 1"
                    keySplines="0 0 1 1; 0.333 0 0.667 1; 0.333 0 0.667 1; 0 0 1 1"
                    fill="freeze"
                  />
                  <g transform="translate(284,-92)">
                    <g id="i1" transform="matrix(1,0,0,1,-284,92)">
                      <ellipse ry="60" rx="60" cy="0" cx="0" fill="#0062db" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g opacity="0.25" id="i3">
              <animate
                repeatCount="indefinite"
                attributeName="opacity"
                dur="1.35s"
                begin="0s"
                fill="freeze"
                values="0.25; 0.25; 1; 0.25; 0.25"
                keyTimes="0; 0.209877; 0.382716; 0.580247; 1"
                keySplines="0 0 1 1; 0.333 0 0.667 1; 0.333 0 0.667 1; 0 0 1 1"
                calcMode="spline"
              />
              <g transform="translate(1022,540)">
                <animateTransform
                  repeatCount="indefinite"
                  type="translate"
                  attributeName="transform"
                  dur="1.35s"
                  begin="0s"
                  calcMode="spline"
                  values="1022 540; 1022 540; 1022 500; 1022 540; 1022 540"
                  keyTimes="0; 0.209876; 0.382716; 0.580247; 1"
                  keySplines="0 0 1 1; 0.333 0 0.667 1; 0.333 0 0.667 1; 0 0 1 1"
                  fill="freeze"
                />
                <g transform="scale(0.5,0.5)">
                  <animateTransform
                    repeatCount="indefinite"
                    type="scale"
                    attributeName="transform"
                    dur="1.35s"
                    begin="0s"
                    calcMode="spline"
                    values="0.5 0.5; 0.5 0.5; 0.75 0.75; 0.5 0.5; 0.5 0.5"
                    keyTimes="0; 0.209876; 0.382716; 0.580247; 1"
                    keySplines="0 0 1 1; 0.333 0 0.667 1; 0.333 0 0.667 1; 0 0 1 1"
                    fill="freeze"
                  />
                  <g transform="translate(284,-92)">
                    <g id="i1" transform="matrix(1,0,0,1,-284,92)">
                      <ellipse ry="60" rx="60" cy="0" cx="0" fill="#0062db" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g opacity="0.25" id="i4">
              <animate
                repeatCount="indefinite"
                attributeName="opacity"
                dur="1.35s"
                begin="0s"
                fill="freeze"
                values="0.25; 0.25; 1; 0.25; 0.25"
                keyTimes="0; 0.308642; 0.481482; 0.679012; 1"
                keySplines="0 0 1 1; 0.333 0 0.667 1; 0.333 0 0.667 1; 0 0 1 1"
                calcMode="spline"
              />
              <g transform="translate(1142,540)">
                <animateTransform
                  repeatCount="indefinite"
                  type="translate"
                  attributeName="transform"
                  dur="1.35s"
                  begin="0s"
                  calcMode="spline"
                  values="1142 540; 1142 540; 1142 500; 1142 540; 1142 540"
                  keyTimes="0; 0.308642; 0.481482; 0.679013; 1"
                  keySplines="0 0 1 1; 0.333 0 0.667 1; 0.333 0 0.667 1; 0 0 1 1"
                  fill="freeze"
                />
                <g transform="scale(0.5,0.5)">
                  <animateTransform
                    repeatCount="indefinite"
                    type="scale"
                    attributeName="transform"
                    dur="1.35s"
                    begin="0s"
                    calcMode="spline"
                    values="0.5 0.5; 0.5 0.5; 0.75 0.75; 0.5 0.5; 0.5 0.5"
                    keyTimes="0; 0.308642; 0.481482; 0.679013; 1"
                    keySplines="0 0 1 1; 0.333 0 0.667 1; 0.333 0 0.667 1; 0 0 1 1"
                    fill="freeze"
                  />
                  <g transform="translate(284,-92)">
                    <g id="i1" transform="matrix(1,0,0,1,-284,92)">
                      <ellipse ry="60" rx="60" cy="0" cx="0" fill="#0062db" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        ) : status === "sent" ? (
          t("contact.form.sent")
        ) : (
          t("contact.form.send")
        )}
      </button>
      {status === "error" && (
        <p className="text-red-500 text-sm mt-2">{errorMsg}</p>
      )}
      {status === "sent" && (
        <p className="text-green-600 font-bold text-sm mt-2">
          {t("contact.form.sendSuccess")}
        </p>
      )}
      <BorderBeam duration={8} size={200} />
    </form>
  );
}
