import { CalendarDays } from "lucide-react"
import Link from 'next/link'

export default function TimeRangeSelection(
    props: {
        range: 'short_term' | 'medium_term' | 'long_term' | undefined,
        page: 'tracks' | 'artists' | 'albums' | 'genres' | undefined
    }
) {
    const rangeCode = props.range;
    const { page } = props;
    const ranges = [
        {
            code: 'short_term',
            name: '4 Weeks'
        },
        {
            code: 'medium_term',
            name: '6 Months'
        },
        {
            code: 'long_term',
            name: 'All Time'
        },
    ]
    const selectedClass = 'text-center w-1/3 p-2 rounded-md text-sm text-emerald-500 dark:text-emerald-300 bg-emerald-500/10 dark:bg-emerald-400/10  sm:hover:bg-emerald-400/25 sm:dark:hover:bg-emerald-400/25 border-[1px] border-transparent';
    const unselectedClass = 'text-center w-1/3 p-2 rounded-md text-sm cursor-pointer text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-300 bg-neutral-100/25 dark:bg-neutral-900/25 border-[1px] border-zinc-300 dark:border-zinc-800 sm:hover:bg-neutral-100/75 sm:dark:hover:bg-neutral-900/75';
    return (
        <section className='flex flex-col justify-center flex-none'>
            <header className='p-0 pl-2 mb-2 text-neutral-600 dark:text-neutral-400'>
                <h2 className='text-sm flex gap-1 items-center font-normal'>
                    <span className='text-neutral-600 dark:text-neutral-400'>
                        <CalendarDays
                            size={16}
                            strokeWidth={2}
                        />
                    </span>
                    Time Range
                </h2>
            </header>
            <div className="flex w-full gap-2 lg:gap-6">
                {ranges.map((range) => {
                    const className = range.code === rangeCode ? selectedClass : unselectedClass;
                    return <Link href={`/top-${page}/${range.code}`} key={range.code} className={className}>{range.name}</Link>
                })}
            </div>
        </section>
    )
}
