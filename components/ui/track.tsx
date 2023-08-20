import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const displayArtistsOrShow = (
    item: SpotifyApi.TrackObjectFull | SpotifyApi.EpisodeObject
) => {
    if (item.type === "track") {
        const artistCount = item.artists.length;
        if (artistCount === 1)
            return (
                <Link
                    className='hover:underline'
                    href={item.artists[0].external_urls.spotify}
                    target='_blank'
                >
                    {item.artists[0].name}
                </Link>
            );

        let index = 0;
        const result = item.artists.map((artist) => {
            index++;
            return (
                <>
                    <Link
                        className='hover:underline'
                        href={artist.external_urls.spotify}
                        target='_blank'
                    >
                        {artist.name}
                    </Link>
                    {index < artistCount - 1
                        ? ", "
                        : index < artistCount
                        ? " & "
                        : ""}
                </>
            );
        });
        return result;
    } else {
        return (
            <Link href={item.show.external_urls.spotify}>{item.show.name}</Link>
        );
    }
};

export default function Track(props: {
    track: SpotifyApi.TrackObjectFull | SpotifyApi.EpisodeObject;
}) {
    const { track } = props;
    const image =
        track?.type === "track"
            ? track.album?.images[2]
                ? track.album.images[2].url
                : "/blank-cover.png"
            : track?.images[0]
            ? track.images[0].url
            : "/blank-cover.png";
    return (
        <section className='rounded-lg bg-neutral-100/25 dark:bg-neutral-900/25 w-full border-[1px] border-zinc-300 dark:border-zinc-800 flex justify-between items-center p-2 hover:bg-neutral-100/75 dark:hover:bg-neutral-900/75'>
            <div className='flex justify-start items-center gap-2'>
                <Image
                    className='rounded-sm w-12 lg:w-14'
                    src={image}
                    width={80}
                    height={80}
                    alt=''
                />
                <div className='flex flex-col gap-[0.1rem]'>
                    <Link
                        className='hover:underline text-sm lg:text-base'
                        href={track?.external_urls.spotify || ""}
                        target='_blank'
                    >
                        {track?.name}
                    </Link>
                    <div className='text-[0.8rem] lg:text-sm text-neutral-600 dark:text-neutral-400'>
                        {displayArtistsOrShow(track)}
                    </div>
                </div>
            </div>
            <Link
                href={track?.external_urls.spotify || ""}
                className='rounded-full text-emerald-500 dark:text-emerald-300 bg-emerald-400/10 dark:bg-emerald-400/10 hover:bg-emerald-400/25 dark:hover:bg-emerald-400/25 p-3'
                target='_blank'
            >
                <ExternalLink
                    size={18}
                    strokeWidth={2}
                />
            </Link>
        </section>
    );
}
