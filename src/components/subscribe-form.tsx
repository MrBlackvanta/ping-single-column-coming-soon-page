"use client";

import { cn } from "@/utils/cn";
import { useId, useState } from "react";

function validateEmail(value: string) {
  const email = value.trim();
  if (!email) return "Whoops! It looks like you forgot to add your email";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Please provide a valid email address";
  }
  return "";
}

export default function SubscribeForm() {
  const id = useId();
  const emailId = `${id}-email`;
  const errorId = `${id}-error`;
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(validateEmail(email));
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    if (error) setError("");
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="mt-8 flex w-full flex-col gap-3 lg:mt-10 lg:flex-row lg:items-start lg:gap-4"
    >
      <div className="w-full lg:flex-1">
        <label htmlFor={emailId} className="sr-only">
          Email address
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Your email address…"
          value={email}
          onChange={handleChange}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "placeholder:text-very-dark-blue/50 w-full rounded-full border px-8 py-4 text-left text-xs lg:text-base",
            error ? "border-light-red" : "border-pale-blue",
          )}
        />
        <p
          id={errorId}
          role="alert"
          className={cn(
            "text-light-red mt-2 min-h-4 text-xs italic lg:pl-8 lg:text-left",
            "motion-safe:transition motion-safe:duration-200",
            error ? "opacity-100" : "translate-y-0.5 opacity-0",
          )}
        >
          {error}
        </p>
      </div>
      <button type="submit" className="btn-primary w-full lg:w-48 lg:text-base">
        Notify Me
      </button>
    </form>
  );
}
