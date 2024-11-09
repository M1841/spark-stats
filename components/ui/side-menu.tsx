import { Sheet, SheetContent, SheetTrigger } from "@/components/shadcn/sheet";
import { NavigationMenuItem } from "../shadcn/navigation-menu";
import {
  Menu,
  Music2,
  Mic2,
  Shuffle,
  CopyMinus,
  Info,
  Code2,
  Settings,
} from "lucide-react";
import Link from "next/link";
import SignoutButton from "../scenes/signout-button";
import { ThemeToggle } from "../theme/toggle";

export default function SideMenu(props: { className?: string }) {
  const { className } = props;
  return (
    <NavigationMenuItem className={className}>
      <Sheet>
        <SheetTrigger className="p-[0.66rem] text-neutral-600 dark:text-neutral-400 rounded-full sm:hover:bg-neutral-200 sm:dark:hover:bg-neutral-800">
          <Menu size={20} />
          <span className="sr-only">Open menu</span>
        </SheetTrigger>
        <SheetContent className="p-0 text-[0.93rem]  border-zinc-500/25 bg-[#fdfdfd] dark:bg-[#0d0d0d]">
          <div className="flex flex-col p-2 border-b border-zinc-500/25 gap-2">
            <Link
              href="/top-tracks"
              className="flex justify-start items-center p-2 rounded-sm sm:hover:bg-neutral-200/75 sm:dark:hover:bg-neutral-900/75 cursor-pointer gap-2"
            >
              <Music2 size={16} />
              Top Tracks
            </Link>
            <Link
              href="/top-artists"
              className="flex justify-start items-center p-2 rounded-sm sm:hover:bg-neutral-200/75 sm:dark:hover:bg-neutral-900/75 cursor-pointer gap-2"
            >
              <Mic2 size={16} />
              Top Artists
            </Link>
            <Link
              href="/shuffle"
              className="flex justify-start items-center p-2 rounded-sm sm:hover:bg-neutral-200/75 sm:dark:hover:bg-neutral-900/75 cursor-pointer gap-2"
            >
              <Shuffle size={16} />
              Playlist Shuffler
              <span className="text-emerald-500 dark:text-emerald-300 bg-emerald-500/10 dark:bg-emerald-400/10 px-2 py-1 font-medium text-xs inline-flex items-center rounded-full h-fit">
                New
              </span>
            </Link>
          </div>
          <div className="flex flex-col p-2 border-b border-zinc-500/25 gap-1">
            <ThemeToggle />
            <Link
              href="https://github.com/M1841/spark-stats"
              className="flex justify-start items-center p-2 rounded-sm sm:hover:bg-neutral-200/75 sm:dark:hover:bg-neutral-900/75 cursor-pointer gap-2"
            >
              <Code2 size={16} />
              Source Code
            </Link>
          </div>
          <div className="flex flex-col p-2 border-b border-zinc-500/25 gap-1">
            <SignoutButton />
          </div>
        </SheetContent>
      </Sheet>
    </NavigationMenuItem>
  );
}
