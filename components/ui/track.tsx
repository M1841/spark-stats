import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Music } from "lucide-react";

const displayArtistsOrShow = (
    item: SpotifyApi.TrackObjectFull | SpotifyApi.EpisodeObject
) => {
    if (item.type === "track") {
        const artistCount = item.artists.length;
        if (artistCount === 1)
            if (item.artists[0].external_urls.spotify) {
                return (
                    <Link
                        className='hover:underline'
                        href={item.artists[0].external_urls.spotify}
                        target='_blank'
                    >
                        {item.artists[0].name}
                    </Link>
                );
            } else {
                return <>{item.artists[0].name}</>;
            }

        let index = 0;
        const result = item.artists.map((artist) => {
            index++;
            return (
                <>
                    <Link
                        className='hover:underline'
                        href={artist.external_urls.spotify || ""}
                        target='_blank'
                        key={artist.id}
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
            <Link href={item.show.external_urls.spotify || ""}>
                {item.show.name}
            </Link>
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
                : ""
            : track?.images[2]
                ? track.images[2].url
                : "";
    return (
        <section className='rounded-lg bg-neutral-100/25 dark:bg-neutral-900/25 w-full border-[1px] border-zinc-300 dark:border-zinc-800 flex justify-between items-center p-2 sm:hover:bg-neutral-100/75 sm:dark:hover:bg-neutral-900/75'>
            <div className='flex justify-start items-center gap-2'>
                {image !== "" ? (
                    <Link href={track?.external_urls.spotify}>
                        <Image
                            className='rounded-sm w-12 flex-none'
                            src={image}
                            width={80}
                            height={80}
                            alt=''
                            loading="lazy"
                        />
                    </Link>
                ) : (
                    <Music
                        className='flex-none w-12 h-12 p-3 text-neutral-400 dark:text-neutral-500 bg-neutral-200/75 dark:bg-neutral-800/75 rounded-sm'
                        size='32'
                    />
                )}
                <div className='flex flex-1 flex-col gap-[0.1rem]'>
                    {track?.external_urls.spotify ? (
                        <Link
                            className='hover:underline text-sm w-fit'
                            href={track?.external_urls.spotify}
                            target='_blank'
                        >
                            {track?.name}
                        </Link>
                    ) : (
                        <p className='text-sm'>{track?.name}</p>
                    )}
                    <div className='text-[0.8rem] text-neutral-600 dark:text-neutral-400 w-fit'>
                        {displayArtistsOrShow(track)}
                    </div>
                </div>
            </div>
            {track?.external_urls.spotify && (
                <Link
                    href={track?.external_urls.spotify}
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
