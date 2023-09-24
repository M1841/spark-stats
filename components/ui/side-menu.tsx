import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
} from "@/components/shadcn/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/shadcn/accordion"
import { NavigationMenuItem } from "../shadcn/navigation-menu";
import {
    Menu,
    Music2,
    Mic2,
    Shuffle,
    CopyMinus,
    Info,
    Code2,
    Settings
} from "lucide-react";
import Link from "next/link";
import SignoutButton from "../scenes/signout-button";

export default function SideMenu(props: {
    className?: string
}) {
    const { className } = props;
    return (
        <NavigationMenuItem className={className}>
            <Sheet>
                <SheetTrigger className='p-[0.66rem] text-neutral-600 dark:text-neutral-400 rounded-full sm:hover:bg-neutral-200 sm:dark:hover:bg-neutral-800'>
                    <Menu size={20} />
                    <span className="sr-only">Open menu</span>
                </SheetTrigger>
                <SheetContent className='p-0 text-[0.93rem]  border-zinc-500/25 bg-[#fdfdfd] dark:bg-[#0d0d0d]'>
                    <div className='flex flex-col p-2 border-b border-zinc-500/25 gap-2'>
                        <Link
                            href='/top-tracks'
                            className='flex justify-start items-center p-2 rounded-sm sm:hover:bg-neutral-200/75 sm:dark:hover:bg-neutral-900/75 cursor-pointer gap-2'
                        >
                            <Music2 size={16} />Top Tracks
                        </Link>
                        <Link
                            href='/top-artists'
                            className='flex justify-start items-center p-2 rounded-sm sm:hover:bg-neutral-200/75 sm:dark:hover:bg-neutral-900/75 cursor-pointer gap-2'
                        >
                            <Mic2 size={16} />Top Artists
                        </Link>
                        <div
                            className='text-neutral-400 dark:text-neutral-600 flex justify-start items-center p-2 rounded-sm sm:hover:bg-neutral-200/75 sm:dark:hover:bg-neutral-900/75 cursor-default gap-2'
                        >
                            <Shuffle size={16} />Playlist Shuffler
                        </div>
                        <div
                            className='text-neutral-400 dark:text-neutral-600 flex justify-start items-center p-2 rounded-sm sm:hover:bg-neutral-200/75 sm:dark:hover:bg-neutral-900/75 cursor-default gap-2'
                        >
                            <CopyMinus size={16} />Duplicate Remover
                        </div>
                    </div>
                    <div className='flex flex-col p-2 border-b border-zinc-500/25 gap-1'>
                        <div
                            className='text-neutral-400 dark:text-neutral-600 flex justify-start items-center p-2 rounded-sm sm:hover:bg-neutral-200/75 sm:dark:hover:bg-neutral-900/75 cursor-default gap-2'
                        >
                            <Settings size={16} />Settings
                        </div>
                        <div
                            className='text-neutral-400 dark:text-neutral-600 flex justify-start items-center p-2 rounded-sm sm:hover:bg-neutral-200/75 sm:dark:hover:bg-neutral-900/75 cursor-default gap-2'
                        >
                            <Info size={16} />About
                        </div>
                        <Link
                            href='https://github.com/M1841/spark-stats'
                            className='flex justify-start items-center p-2 rounded-sm sm:hover:bg-neutral-200/75 sm:dark:hover:bg-neutral-900/75 cursor-pointer gap-2'
                        >
                            <Code2 size={16} />Source Code
                        </Link>
                    </div>
                    <div className='flex flex-col p-2 border-b border-zinc-500/25 gap-1'>
                        <SignoutButton />
                    </div>
                </SheetContent>
            </Sheet>
        </NavigationMenuItem >
    )
}
