import Image from "next/image";
import SignIn from "@/components/sign-in";
import Link from "next/link";

export default function Home() {
    return (
        <main className='p-6 mt-8 flex flex-col xl:flex-row-reverse justify-center items-center gap-4 xl:mt-24'>
            <Image
                src='/hero-graphic.svg'
                alt=''
                width={512}
                height={512}
                priority
            />
            <section className='flex flex-col justify-center gap-4 xl:gap-6 items-center xl:items-start xl:pt-16'>
                <header>
                    <h2 className='text-2xl md:text-3xl xl:text-4xl font-bold text-center xl:text-start mb-1 xl:mb-2'>
                        The Ultimate{" "}
                        <span className='text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-emerald-500 dark:from-emerald-300 dark:to-emerald-500'>
                            Spotify
                        </span>{" "}
                        Companion
                    </h2>
                    <p className='text-sm md:text-base text-neutral-700 dark:text-neutral-400 text-center xl:text-start'>
                        Unlock the full potential of your music library
                    </p>
                </header>
                <SignIn />
                <p className='text-[0.75rem] md:text-sm text-neutral-500 dark:text-neutral-500 text-center xl:text-start'>
                    By signing in, you agree to our{" "}
                    <Link
                        className='hover:underline'
                        href='/docs/terms-of-service'
                    >
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                        className='hover:underline'
                        href='/docs/privacy-policy'
                    >
                        Privacy Policy
                    </Link>
                    .
                </p>
            </section>
        </main>
    );
}
