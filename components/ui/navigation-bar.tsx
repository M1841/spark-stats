import Image from "next/image";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/shadcn/navigation-menu"
import { ThemeToggle } from "@/components/theme/toggle";

export default function NavigationBar() {
    return (
        <NavigationMenu className='fixed w-full left-0 top-0 flex justify-center border-b border-zinc-500/25 bg-zinc-100/75 px-6 py-2 backdrop-blur-sm dark:bg-neutral-900/75 md:px-16 xl:px-24'>
            <NavigationMenuList className='w-full flex justify-between items-center'>
                <NavigationMenuItem className='flex gap-2 items-center'>
                    <NavigationMenuLink
                        href='/'
                        className='flex font-bold gap-1 text-lg'
                    >
                        <Image
                            src='/spark.svg'
                            width={20}
                            height={20}
                            alt=''
                            priority
                        />
                        Spark Stats
                    </NavigationMenuLink>
                    <Link
                        href='https://github.com/m1841/spark-stats'
                        target='_blank'
                        className='text-emerald-500 dark:text-emerald-300 bg-emerald-500/10 dark:bg-emerald-400/10  sm:hover:bg-emerald-400/25  sm:dark:hover:bg-emerald-400/25 pl-[0.35rem] pr-2 py-1 font-medium text-xs inline-flex items-center rounded-full h-fit'
                    >
                        v0.5.0
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <ThemeToggle />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
