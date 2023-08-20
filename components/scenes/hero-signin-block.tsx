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
        <main className='p-6 mt-8 flex flex-col xl:flex-row-reverse justify-center items-center gap-4 xl:gap-0 xl:justify-between xl:mt-24 xl:px-24 2xl:px-36'>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Image
                            src='/welcome-graphic.svg'
                            alt=''
                            width={512}
                            height={512}
                            priority
                        />
                    </TooltipTrigger>
                    <TooltipContent className='bg-neutral-100/95 dark:bg-neutral-900/95 absolute w-max -left-24 top-[30rem]'>
                        <p className='text-neutral-500 dark:text-neutral-400'>
                            Graphic from{" "}
                            <Link
                                href='https://storyset.com'
                                target='_blank'
                                className='underline hover:text-neutral-600 dark:hover:text-neutral-300'
                            >
                                StorySet
                            </Link>
                        </p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <section className='flex flex-col justify-center gap-4 xl:gap-6 items-center xl:items-start xl:pt-16'>
                <header>
                    <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-center xl:text-start mb-1 xl:mb-2'>
                        The Ultimate{" "}
                        <span className='text-emerald-600 dark:text-emerald-400'>
                            Spotify
                        </span>{" "}
                        Companion
                    </h2>
                    <p className='text-sm md:text-base text-neutral-700 dark:text-neutral-400 text-center xl:text-start'>
                        Unlock the full potential of your music library
                    </p>
                </header>
                <SignIn />
                <p className='text-[0.75rem] md:text-[0.85rem] text-neutral-500 dark:text-neutral-500 text-center xl:text-start'>
                    By signing in, you agree to the{" "}
                    <Link
                        className='underline hover:text-neutral-700 dark:hover:text-neutral-400'
                        href='/docs/terms-of-service'
                        target='_blank'
                    >
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                        className='underline hover:text-neutral-700 dark:hover:text-neutral-400'
                        href='/docs/privacy-policy'
                        target='_blank'
                    >
                        Privacy Policy
                    </Link>
                    .
                </p>
            </section>
        </main>
    );
}
