"use client";

import { useState } from "react";
import { Button } from "./ui/button";

const SignUpForm = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signUp = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    console.log("new email:::", email);
    // try {
    //   const res = await fetch("api/sign-up", {
    //     method: "POST",
    //     body: JSON.stringify(userData),
    //   }).then((res)=>console.log(res));

    // } catch (error) {
    //   console.error(error.message);
    // }
  };

  return (
    <div className="min-w-[375px] bg-transparent">
      <form
        className="w-full max-w-[400px] rounded-lg shadow bg-white p-6 flex flex-col gap-4"
        onSubmit={signUp}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={(e) =>
            setUserData((prev) => {
              return { ...prev, email: e.target.value };
            })
          }
          className="text-sm border py-2 px-4 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={(e) =>
            setUserData((prev) => {
              return { ...prev, password: e.target.value };
            })
          }
          className="text-sm border py-2 px-4 rounded"
        />
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm Password"
          value={userData.confirmPassword}
          onChange={(e) =>
            setUserData((prev) => {
              return { ...prev, confirmPassword: e.target.value };
            })
          }
          className="text-sm border py-2 px-4 rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 border rounded bg-primary-blue hover:blue-500/80 text-white cursor-pointer"
        >
          Sign up
        </button>
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
