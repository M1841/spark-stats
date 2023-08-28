import SpotifyWebApi from "spotify-web-api-node";
import { BarChart2 } from "lucide-react";
import Track from "../ui/track";
import { Music } from "lucide-react";

export default async function CurrentlyPlaying(props: {
    spotifyApi: SpotifyWebApi;
}) {
    const { spotifyApi } = props;
    const { body } = await spotifyApi.getMyCurrentPlayingTrack();
    const { item } = body;
    return (
        <section className='flex flex-col justify-center flex-none'>
            <header className='p-0 pl-2 mb-2 text-neutral-600 dark:text-neutral-400'>
                <h2 className='text-sm flex gap-1 items-center font-normal'>
                    <span className='text-neutral-600 dark:text-neutral-400'>
                        <BarChart2
                            size={16}
                            strokeWidth={2}
                        />
                    </span>
                    Currently Playing
                </h2>
            </header>
            {item ? (
                <Track track={item} />
            ) : (
                <section className='rounded-lg bg-neutral-100/25 dark:bg-neutral-900/25 w-full border-[1px] border-zinc-300 dark:border-zinc-800 flex justify-between items-center p-2  sm:hover:bg-neutral-100/75  sm:dark:hover:bg-neutral-900/75'>
                    <div className='flex justify-start items-center gap-2'>
                        <Music
                            className='flex-none w-12 h-12 p-3 text-neutral-400 dark:text-neutral-500 bg-neutral-200/75 dark:bg-neutral-800/75 rounded-sm'
                            size={32}
                        />
                        <span className='text-sm text-neutral-600 dark:text-neutral-400'>
                            No track is currently playing
                        </span>
                    </div>
                </section>
            )}
        </section>
    );
}
