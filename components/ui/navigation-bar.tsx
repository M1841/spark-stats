import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/shadcn/navigation-menu";
import SideMenu from "./side-menu";
import { auth } from "@/auth";

export default async function NavigationBar() {
  const session = await auth();
  return (
    <NavigationMenu className="fixed w-full left-0 top-0 flex justify-center items-center border-b border-zinc-500/25 bg-zinc-100/75 py-2 backdrop-blur-sm dark:bg-neutral-900/75">
      <NavigationMenuList className="w-full">
        <div
          className={
            "w-full px-8 max-w-3xl flex items-center justify-" +
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
          </NavigationMenuItem>
          {session?.user && session?.accessToken && <SideMenu />}
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
