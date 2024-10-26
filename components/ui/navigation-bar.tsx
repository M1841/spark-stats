import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/shadcn/navigation-menu";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Session } from "next-auth";
import SideMenu from "./side-menu";

export default async function NavigationBar() {
  const session = (await getServerSession(authOptions)) as Session;
  return (
    <NavigationMenu className="fixed w-full left-0 top-0 flex justify-center items-center border-b border-zinc-500/25 bg-zinc-100/75 py-2 backdrop-blur-sm dark:bg-neutral-900/75">
      <NavigationMenuList className="w-full">
        <div
          className={
            "w-full px-6 max-w-3xl flex items-center justify-" +
            (session?.user && session?.accessToken ? "between" : "center py-1")
          }
        >
          <NavigationMenuItem className="flex gap-2 items-center">
            <NavigationMenuLink
              href="/"
              className="flex font-bold gap-1 text-lg"
            >
              <Image src="/spark.svg" width={20} height={20} alt="" priority />
              Spark Stats
            </NavigationMenuLink>
            <Link
              href="https://github.com/m1841/spark-stats"
              target="_blank"
              className="text-emerald-500 dark:text-emerald-300 bg-emerald-500/10 dark:bg-emerald-400/10  sm:hover:bg-emerald-400/25  sm:dark:hover:bg-emerald-400/25 pl-[0.35rem] pr-2 py-1 font-medium text-xs inline-flex items-center rounded-full h-fit"
            >
              v0.6.2
            </Link>
          </NavigationMenuItem>
          {session?.user && session?.accessToken && <SideMenu />}
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
