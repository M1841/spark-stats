"use client";

import { Button } from "@/components/shadcn/button";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import SpotifyIcon from "@/components/ui/spotify-icon";

export default function SignIn() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const handleSignIn = async () => {
    setLoading(true);
    signIn("spotify");
  };
  return (
    <Button
      onClick={handleSignIn}
      className="gap-2 text-neutral-50 bg-neutral-900 dark:bg-[#0e0e0e] border-[1px] w-full border-transparent dark:border-neutral-500/25 sm:dark:hover:bg-neutral-900"
      variant={theme === "dark" ? "outline" : "default"}
      disabled={loading}
    >
      {loading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <SpotifyIcon color="#1DB954" size={21} />
      )}
      Sign in with Spotify
    </Button>
  );
}
