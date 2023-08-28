import { LayoutGrid, PieChart, Shuffle, Sparkles } from "lucide-react";
import Link from "next/link";

export default function FeaturesSection() {
    return (
        <section className='flex flex-col justify-center flex-none'>
            <header className='p-0 pl-2 mb-2 text-neutral-600 dark:text-neutral-400'>
                <h2 className='text-sm flex gap-1 items-center font-normal'>
                    <span className='text-neutral-600 dark:text-neutral-400'>
                        <LayoutGrid
                            size={16}
                            strokeWidth={2}
                        />
                    </span>
                    Features
                </h2>
            </header>
            <Link href='/stats/short_term' className='w-full rounded-lg bg-neutral-100/25 dark:bg-neutral-900/25 border-[1px] border-zinc-300 dark:border-zinc-800 flex justify-start items-center p-2 sm:hover:bg-neutral-100/75  sm:dark:hover:bg-neutral-900/75 gap-2 text-sm'>
                <PieChart
                    className='rounded-sm text-emerald-500 dark:text-emerald-300 bg-emerald-400/10 dark:bg-emerald-400/10 p-3 flex-none w-12 h-12'
                    size={24}
                />
                Listening Statistics
            </Link>
        </section>
    );
}
