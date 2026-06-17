"use client";

import React from "react";
import emailjs from "@emailjs/browser";
import Button from "../ui/Button";

import { textStyle } from "../ui/styles";
import { useState } from "react";

const inputStyle = "border border-zinc-600 rounded-lg p-2 bg-transparent";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <div className="border border-zinc-500 p-4 rounded-2xl">
      <p className="text-lg md:text-xl lg:text-2xl mb-4 text-center">
        Send me an Email
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            required
            className={inputStyle}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
            className={inputStyle}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
            rows={5}
            className={`${inputStyle} resize-none`}
          />
        </div>
        <Button
          type="submit"
          className={textStyle}
          disabled={status === "sending"}
        >
          {status === "sending" ? "sending..." : "Send Email"}
        </Button>

        {status === "success" && <p>Message sent successfully!</p>}
        {status === "error" && <p>Something went wrong. Try again.</p>}
      </form>
    </div>
  );
}
