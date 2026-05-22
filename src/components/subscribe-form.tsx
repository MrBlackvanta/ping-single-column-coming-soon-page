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
      className="mt-8 flex w-full flex-col gap-3 md:mt-10 md:flex-row md:items-start md:gap-4"
    >
      <div className="relative w-full md:flex-1">
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
            "placeholder:text-very-dark-blue/50 w-full rounded-full border px-8 py-4 text-left text-xs md:text-base",
            error ? "border-light-red" : "border-pale-blue",
          )}
        />
        <p
          id={errorId}
          role="alert"
          className={cn(
            "text-light-red absolute inset-x-0 top-full mt-2 text-xs italic md:pl-8 md:text-left",
            "motion-safe:transition motion-safe:duration-200",
            error ? "opacity-100" : "translate-y-0.5 opacity-0",
          )}
        >
          {error}
        </p>
      </div>
      <button
        type="submit"
        className={cn(
          "btn-primary w-full md:w-48 md:text-base",
          error && "translate-y-6 md:translate-y-0",
        )}
      >
        Notify Me
      </button>
    </form>
  );
}
