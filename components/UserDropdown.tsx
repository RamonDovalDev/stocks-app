"use client";

import { useRouter } from "next/navigation";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";

const UserDropdown = ({ user }: UserDropdownProps) => {
  const router = useRouter();
  const handleSignOut = () => {
    router.push("/sign-in");
  };

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Button variant="ghost" onClick={() => router.push("/sign-in")}>
          Sign In
        </Button>

        <Button variant="ghost" onClick={() => router.push("/sign-up")}>
          Sign Up
        </Button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-3 text-gray-400 hover:text-yellow-500"
        >
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://accounts.google.com/SignOutOptions?hl=es&continue=https://www.google.com/search%3Fq%3Dque%2Bes%2Bclase%2B%2522flex-col%2522%2Ben%2BTailwind%26sca_esv%3D2dfa73c1edabb0ca%26rlz%3D1C1GCEA_enES1133ES1133%26sxsrf%3DAPpeQnuE5qMkvzuSLfM4cmGrIQn-x5CkNQ%253A1783844313586%26ei%3D2U1TavqqI_eS9u8P_uX7iAU%26biw%3D1280%26bih%3D551%26ved%3D0ahUKEwi6-5T12cyVAxV3if0HHf7yHlEQ4dUDCBA%26uact%3D5%26oq%3Dque%2Bes%2Bclase%2B%2522flex-col%2522%2Ben%2BTailwind%26gs_lp%3DEgxnd3Mtd2l6LXNlcnAiI3F1ZSBlcyBjbGFzZSAiZmxleC1jb2wiIGVuIFRhaWx3aW5kMgUQIRigAUj7UVDWBliSUHADeACQAQCYAakDoAGULKoBCzI4LjE4LjIuMS4xuAEDyAEA-AEBmAIkoALiIMICCBAAGO8FGLADwgILEAAYgAQYogQYsAPCAgcQIxiuAhgnwgIIEAAYgAQYogTCAgUQABjvBcICBBAjGCfCAgUQABiABMICCBAAGIAEGLEDwgIJEAAYgAQYChgLwgIHEAAYgAQYCsICBhAAGBYYHsICCBAAGBYYHhgKwgIIEAAYiQUYogSYAwCIBgGQBgSSBwsxOC4xMy4zLjEuMaAH6s8BsgcLMTUuMTMuMy4xLjG4B8UgwgcKMC4xMC4xNi4xMMgH1gGACAE%26sclient%3Dgws-wiz-serp&ec=futura_srp_og_si_72236_p" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400">
        <DropdownMenuLabel>
          <div className="relative flex items-center gap-3 py-2">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://accounts.google.com/SignOutOptions?hl=es&continue=https://www.google.com/search%3Fq%3Dque%2Bes%2Bclase%2B%2522flex-col%2522%2Ben%2BTailwind%26sca_esv%3D2dfa73c1edabb0ca%26rlz%3D1C1GCEA_enES1133ES1133%26sxsrf%3DAPpeQnuE5qMkvzuSLfM4cmGrIQn-x5CkNQ%253A1783844313586%26ei%3D2U1TavqqI_eS9u8P_uX7iAU%26biw%3D1280%26bih%3D551%26ved%3D0ahUKEwi6-5T12cyVAxV3if0HHf7yHlEQ4dUDCBA%26uact%3D5%26oq%3Dque%2Bes%2Bclase%2B%2522flex-col%2522%2Ben%2BTailwind%26gs_lp%3DEgxnd3Mtd2l6LXNlcnAiI3F1ZSBlcyBjbGFzZSAiZmxleC1jb2wiIGVuIFRhaWx3aW5kMgUQIRigAUj7UVDWBliSUHADeACQAQCYAakDoAGULKoBCzI4LjE4LjIuMS4xuAEDyAEA-AEBmAIkoALiIMICCBAAGO8FGLADwgILEAAYgAQYogQYsAPCAgcQIxiuAhgnwgIIEAAYgAQYogTCAgUQABjvBcICBBAjGCfCAgUQABiABMICCBAAGIAEGLEDwgIJEAAYgAQYChgLwgIHEAAYgAQYCsICBhAAGBYYHsICCBAAGBYYHhgKwgIIEAAYiQUYogSYAwCIBgGQBgSSBwsxOC4xMy4zLjEuMaAH6s8BsgcLMTUuMTMuMy4xLjG4B8UgwgcKMC4xMC4xNi4xMMgH1gGACAE%26sclient%3Dgws-wiz-serp&ec=futura_srp_og_si_72236_p" />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-400">
                {user.name}
              </span>
              <span className="text-sm text-gray-500">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer"
        >
          <LogOut className="w-4 h-4 mr-2 hidden sm:block" />
          Logout
        </DropdownMenuItem>
        <DropdownMenuSeparator className="hidden sm:block bg-gray-600" />
        <nav className="sm:hidden">
          <NavItems />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
