"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/shadcn/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant={null}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex justify-start items-center p-2 rounded-sm sm:hover:bg-neutral-200/75 sm:dark:hover:bg-neutral-900/75 cursor-pointer gap-2 transition-all duration-500"
    >
      <Sun
        size={16}
        className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0 transition-all duration-500"
      />
      <Moon
        size={16}
        className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all duration-500"
      />
      Switch Theme
    </Button>
  );
}
