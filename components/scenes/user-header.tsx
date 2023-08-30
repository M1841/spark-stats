import Image from "next/image";
import Link from "next/link";
import SpotifyWebApi from "spotify-web-api-node";
import { ExternalLink, User2 } from "lucide-react";
import SignoutButton from "@/components/scenes/signout-button";

export default async function UserHeader(props: { spotifyApi: SpotifyWebApi }) {
    const { spotifyApi } = props;
    const { body } = await spotifyApi.getMe();
    const { display_name, external_urls, images } = body;
    return (
        <section className='flex flex-col justify-center flex-none'>
            <header className='p-0 pl-2 mb-2 text-neutral-600 dark:text-neutral-400'>
                <h2 className='text-sm flex gap-1 items-center font-normal'>
                    <span className='text-neutral-600 dark:text-neutral-400'>
                        <User2
                            size={16}
                            strokeWidth={2}
                        />
                    </span>
                    Your Profile
                </h2>
            </header>
            <section className='rounded-lg bg-neutral-100/25 dark:bg-neutral-900/25 w-full border-[1px] border-zinc-300 dark:border-zinc-800 flex justify-between items-center p-2 sm:hover:bg-neutral-100/75  sm:dark:hover:bg-neutral-900/75'>
                <div className='flex justify-start items-center gap-2'>
                    <Image
                        className='rounded-md h-12 w-12 fit-cover'
                        src={images ? images[0].url : ""}
                        height={20}
                        width={20}
                        alt=''
                    />
                    <div className='flex flex-1 flex-col gap-[0.1rem]'>
                        <Link
                            href={external_urls.spotify}
                            target='_blank'
                            className='text-sm hover:underline'
                        >
                            {display_name}
                        </Link>
                        <SignoutButton />
                    </div>
                </div>
                <Link
                    href={external_urls.spotify}
                    className='rounded-full text-emerald-500 dark:text-emerald-300 bg-emerald-400/10 dark:bg-emerald-400/10  sm:hover:bg-emerald-400/25  sm:dark:hover:bg-emerald-400/25 p-3 flex-none'
                    target='_blank'
                >
                    <ExternalLink
                        size={18}
                        strokeWidth={2}
                    />
                </Link>
            </section>
        </section>
    );
}
