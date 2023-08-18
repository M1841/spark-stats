"use client";

import Image from "next/image";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/shadcn/navigation-menu";
import { Badge } from "@/components/shadcn/badge";
import { ThemeToggle } from "@/components/theme/toggle";

export default function MainNavbar() {
    return (
        <NavigationMenu className='fixed w-full left-0 top-0 flex justify-center border-b border-neutral-500/25 bg-zinc-100/75 px-6 py-2 backdrop-blur-md dark:bg-zinc-900/75 xl:px-12'>
            <NavigationMenuList className='w-full flex justify-between'>
                <NavigationMenuItem className='flex gap-2'>
                    <Link
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
                    </Link>
                    <Link href='https://github.com/m1841/sparkstats'>
                        <Badge
                            variant='default'
                            className='text-emerald-500 dark:text-emerald-300 bg-emerald-500/10 dark:bg-emerald-400/10 hover:bg-emerald-400/25 dark:hover:bg-emerald-400/25 pl-[-6px] px-2 py-1'
                        >
                            v0.2.0
                        </Badge>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <ThemeToggle />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
