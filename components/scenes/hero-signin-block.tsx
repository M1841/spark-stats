import Image from "next/image";
import Link from "next/link";
import SignIn from "@/components/scenes/signin-button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn/tooltip";

export default function HeroSigninBlock() {
  return (
    <main className="px-6 max-w-3xl mt-4 flex flex-col justify-center items-center gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Image
              src="/welcome-graphic.svg"
              alt=""
              width={512}
              height={512}
              priority
              className="max-w-xl"
            />
          </TooltipTrigger>
          <TooltipContent className="bg-neutral-100/95 dark:bg-neutral-900/95 absolute w-max -left-24 top-[30rem]">
            <p className="text-neutral-500 dark:text-neutral-400">
              Graphic from{" "}
              <Link
                href="https://storyset.com"
                target="_blank"
                className="hover:underline"
              >
                StorySet
              </Link>
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <section className="flex flex-col justify-center gap-4 items-center">
        <header>
          <h2 className="text-2xl font-bold text-center mb-1">
            The Ultimate{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Spotify
            </span>{" "}
            Companion
          </h2>
          <p className="text-sm text-neutral-700 dark:text-neutral-400 text-center">
            Unlock the full potential of your music library
          </p>
        </header>
        <SignIn />
      </section>
    </main>
  );
}
