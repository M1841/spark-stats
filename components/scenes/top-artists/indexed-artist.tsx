import Image from "@/components/ui/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const displayGenres = (
    item: SpotifyApi.ArtistObjectFull
) => {

    const genreCount = item.genres.length;
    let index = 0;
    const result = item.genres.map((genre) => {
        index++;
        if (index <= 3) {
            return (
                <>
                    {genre.split(' ').map((word) => { return word[0].toUpperCase() + word.substring(1) }).join(" ")}
                    {index < Math.min(genreCount - 1, 2)
                        ? ", "
                        : index < Math.min(genreCount, 3)
                            ? " & "
                            : ""}
                </>
            );

        } else {
            return;
        }
    });
    return result;
}

export default function IndexedArtist(props: {
    artist: SpotifyApi.ArtistObjectFull
    index: number
}) {
    const { artist, index } = props;
    const image = artist.images[2] ? artist.images[2].url : '';
    return (
        <section className='rounded-lg bg-neutral-100/25 dark:bg-neutral-900/25 w-full border-[1px] border-zinc-300 dark:border-zinc-800 flex justify-between items-center p-2 sm:hover:bg-neutral-100/75 sm:dark:hover:bg-neutral-900/75'>
            <div className='flex justify-start items-center gap-2'>
                <div className='text-center w-5 text-sm text-neutral-600 dark:text-neutral-400'>{index}</div>
                <Link
                    className='rounded-sm w-12 h-12 flex-none bg-neutral-300/75 dark:bg-neutral-800/75'
                    href={artist?.external_urls.spotify}
                    target="_blank"
                >
                    <Image
                        className='rounded-sm w-12 h-12 fit-cover'
                        src={image}
                        width={80}
                        height={80}
                        alt=''
                    />
                </Link>
                <div className='flex flex-1 flex-col gap-[0.1rem]'>
                    {artist?.external_urls.spotify ? (
                        <Link
                            className='hover:underline text-sm w-fit'
                            href={artist?.external_urls.spotify}
                            target='_blank'
                        >
                            {artist?.name}
                        </Link>
                    ) : (
                        <p className='text-sm'>{artist?.name}</p>
                    )}
                    <div className='text-[0.8rem] text-neutral-600 dark:text-neutral-400 w-fit'>
                        {displayGenres(artist)}
                    </div>
                </div>
            </div>
            {artist?.external_urls.spotify && (
                <Link
                    href={artist?.external_urls.spotify}
                    className='rounded-full text-emerald-500 dark:text-emerald-300 bg-emerald-400/10 dark:bg-emerald-400/10  sm:hover:bg-emerald-400/25  sm:dark:hover:bg-emerald-400/25 p-3 flex-none'
                    target='_blank'
                >
                    <ExternalLink
                        size={18}
                        strokeWidth={2}
                    />
                </Link>
            )}
        </section>
    );
}
