// components/CopyButton.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
// import { Copy, Check } from "lucide-react";

export default function CopyButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("contact@hosein.dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative inline-flex flex-col items-center gap-1">
      {/* Floating tooltip */}
      <span
        className={`absolute p-2 -top-8 text-nowrap text-sm backdrop-brightness-50 rounded-full text-white font-bold transition-all duration-300 pointer-events-none ${
          copied ? "opacity-100 translate-y-2" : "opacity-0 translate-y-0"
        }`}
      >
        Copied to clipboard
      </span>
      <button
        onClick={handleCopy}
        className="relative m-2 size-10 flex items-center justify-center hover:scale-105 cursor-pointer duration-300"
      >
        {/* Copy icon – fades out */}
        <Image
          src={"/images/copy.png"}
          alt="Cryptionary"
          width={20}
          height={20}
          onClick={() => navigator.clipboard.writeText("Contact@Hosein.Dev")}
          className={`absolute size-10 bg-gray-300 rounded-full transition-all duration-300 ${
            copied ? "opacity-0 scale-50" : "opacity-100 scale-100"
          }`}
        />
        {/* Check icon – fades in */}
        <Image
          src={"/images/check.svg"}
          alt="Cryptionary"
          width={20}
          height={20}
          onClick={() => navigator.clipboard.writeText("Contact@Hosein.Dev")}
          className={`absolute size-20 transition-all duration-300 ${
            copied ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
      </button>
    </div>
  );
}
