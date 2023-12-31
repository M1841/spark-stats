"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/shadcn/button";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant={null}
            size='icon'
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className='rounded-full text-emerald-500 dark:text-emerald-300 bg-emerald-400/10 dark:bg-emerald-400/10  sm:hover:bg-emerald-400/25  sm:dark:hover:bg-emerald-400/25'
        >
            <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0 transition-all duration-300' />
            <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all duration-300' />
            <span className='sr-only'>Toggle theme</span>
        </Button>
    );
}
