"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
  return emailRegex.test(email);
};

const SignUpForm = () => {
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const confirmPassword = event.target[3].value;

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (name.length < 3) {
      setError("Name must be at least 3 characters");
    }

    if (!validateEmail(email)) {
      setError("Invalid email");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.status === 400) {
        setError("This email is already registered!");
      }

      if (response.status === 201 || response.status === 200) {
        // redirect to dashboard
        router.push("/dashboard");
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      setError("An unexpected error occurred");
    }
  };

  return (
    <div className="min-w-[375px] bg-transparent">
      <form
        className="w-full max-w-[400px] rounded-lg shadow bg-white p-6 flex flex-col gap-4"
        onSubmit={handleSignUp}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={`"text-sm border py-2 px-4 rounded" ${
            (error && error === error.toLowerCase().includes("name")) ||
            error === "Please fill in all fields"
              ? "border-red-500"
              : ""
          }`}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={`"text-sm border py-2 px-4 rounded" ${
            error === "Invalid email" || error === "Please fill in all fields"
              ? "border-red-500"
              : ""
          }`}
        />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          className={`"text-sm border py-2 px-4 rounded" ${
            (error && error.toLowerCase().includes("password")) ||
            error === "Please fill in all fields"
              ? "border-red-500"
              : ""
          }`}
        />
        <input
          type={showPassword ? "text" : "password"}
          name="confirm-password"
          placeholder="Confirm Password"
          className={`"text-sm border py-2 px-4 rounded" ${
            (error && error.toLowerCase().includes("password")) ||
            error === "Please fill in all fields"
              ? "border-red-500"
              : ""
          }`}
        />
        <button
          type="submit"
          className="px-4 py-2 border rounded bg-primary-blue hover:blue-500/80 text-white cursor-pointer"
        >
          Sign up
        </button>
        <p className="text-red-500">{error && error}</p>
        <div className="flex gap-4 w-full h-full items-center">
          <span className="border-y w-full "></span>
          <span className="text-muted-foreground">or</span>
          <span className="border-y w-full"></span>
        </div>
        <div className="flex flex-col gap-4 justify-between">
          <Button variant="secondary">Sign up using LinkedIn</Button>
          <Button variant="">Sign up using Apple</Button>
          <Button variant="outline">Sign up using Google</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
