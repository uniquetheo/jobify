import { ArrowDown } from "lucide-react";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import SignInForm from "./SignInForm";

const SigninDrop = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="">
          <span className="flex gap-2">
            Sign in
            <ArrowDown />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <SignInForm />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SigninDrop;


