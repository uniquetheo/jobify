"use client";

import { Button } from "./ui/button";
import { validateEmail } from "./SignUpForm";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const SignInForm = () => {
  const [error, setError] = useState(null);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  const handleSignIn = async (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/dashboard");
    } else {
      setError(null);
    }
  };

  return (
    <div className="min-w-[375px] bg-transparent">
      <form
        className="w-full max-w-[400px] rounded-lg shadow bg-white p-6 flex flex-col gap-4"
        onSubmit={handleSignIn}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={`"text-sm border py-2 px-4 rounded" ${
            (error && error.includes("email")) ||
            (error && error.includes("fields"))
              ? "border-red-500"
              : ""
          }`}
        />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          className={`"text-sm border py-2 px-4 rounded" ${
            (error && error.includes("Password")) ||
            (error && error.includes("fields"))
              ? "border-red-500"
              : ""
          }`}
        />
        <Button
          type="submit"
          className="px-4 py-2 border rounded bg-primary-blue hover:blue-500/80 text-white cursor-pointer"
        >
          {sessionStatus === "loading" ? "loading..." : "Sign in"}
        </Button>
        <div className="flex gap-4 w-full h-full items-center">
          <span className="border-y w-full "></span>
          <span className="text-muted-foreground">or</span>
          <span className="border-y w-full"></span>
        </div>
        <div className="flex gap-4 justify-between">
          <Button variant="secondary">Li</Button>
          <Button variant="">Ap</Button>
          <Button variant="outline">Go</Button>
        </div>
        <div className="text-center text-sm text-blue-500 ">
          <span className="cursor-pointer hover:text-blue-500/80">
            Forgot Password?
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
