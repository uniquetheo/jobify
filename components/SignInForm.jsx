"use client";

import { Button } from "./ui/button";

const SignInForm = () => {
  const signIn = (event) => {
    event.preventDefault();
  };
  return (
    <div className="min-w-[375px] bg-transparent">
      <form
        className="w-full max-w-[400px] rounded-lg shadow bg-white p-6 flex flex-col gap-4"
        onSubmit={signIn}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="text-sm border py-2 px-4 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="text-sm border py-2 px-4 rounded"
        />
        <Button
          type="submit"
          className="px-4 py-2 border rounded bg-primary-blue hover:blue-500/80 text-white cursor-pointer"
        >
          Sign in
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
          <span className="cursor-pointer hover:text-blue-500/80">Forgot Password?</span>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
