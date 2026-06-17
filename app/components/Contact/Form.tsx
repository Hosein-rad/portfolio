import { useState, FormEvent } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: FormEvent) => {
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
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "400px",
      }}
    >
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: "100%" }}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%" }}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          style={{ width: "100%" }}
        />
      </div>
      <button type="submit" disabled={status === "sending"}>
        {status === "sending"
          ? "Sending..."
          : status === "sent"
          ? "Sent!"
          : "Send Message"}
      </button>
    </form>
  );
}
