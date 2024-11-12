import Image from "@/components/ui/image";
import Link from "next/link";
import { Music } from "lucide-react";
import TrackDropdown from "./track-dropdown";

const displayArtistsOrShow = (item: SpotifyApi.TrackObjectFull) => {
  const artistCount = item.artists.length;
  if (artistCount === 1)
    if (item.artists[0].external_urls.spotify) {
      return (
        <Link
          className="hover:underline"
          href={item.artists[0].external_urls.spotify}
          target="_blank"
          key={item.artists[0].id}
        >
          {item.artists[0].name}
        </Link>
      );
    } else {
      return item.artists[0].name;
    }

  let index = 0;
  const result = item.artists.map((artist) => {
    index++;
    return (
      <>
        <Link
          className="hover:underline"
          href={artist.external_urls.spotify || ""}
          target="_blank"
          key={artist.id}
        >
          {artist.name}
        </Link>
        {index < artistCount - 1 ? ", " : index < artistCount ? " & " : ""}
      </>
    );
  });
  return result;
};

export default function Track(props: {
  item: SpotifyApi.TrackObjectFull | SpotifyApi.EpisodeObject;
  index?: number;
}) {
  const { item: track, index } = props;
  if (track.type === "track") {
    const image = track.album.images[2] ? track.album.images[2].url : "";
    return (
      <section className="rounded-lg bg-neutral-100/25 dark:bg-neutral-900/25 w-full border-[1px] border-zinc-300 dark:border-zinc-800 flex justify-between items-center p-2 sm:hover:bg-neutral-100/75 sm:dark:hover:bg-neutral-900/75">
        <div className="flex justify-start items-center gap-2">
          {index && (
            <div className="text-center w-5 text-sm text-neutral-600 dark:text-neutral-400">
              {index}
            </div>
          )}
          {image !== "" ? (
            <Link
              className="rounded-sm w-12 h-12 flex-none bg-neutral-300/75 dark:bg-neutral-800/75"
              href={track?.album.external_urls.spotify}
              target="_blank"
            >
              <Image
                className="rounded-sm w-12 h-12 fit-cover"
                src={image}
                width={80}
                height={80}
                alt=""
              />
            </Link>
          ) : (
            <Music
              className="flex-none w-12 h-12 p-3 text-neutral-400 dark:text-neutral-500 bg-neutral-200/75 dark:bg-neutral-800/75 rounded-sm"
              size="32"
            />
          )}
          <div className="flex flex-1 flex-col gap-[0.1rem]">
            {track?.external_urls.spotify ? (
              <Link
                className="hover:underline text-sm w-fit"
                href={track?.external_urls.spotify}
                target="_blank"
              >
                {track?.name}
              </Link>
            ) : (
              <p className="text-sm">{track?.name}</p>
            )}
            <p className="text-[0.8rem] text-neutral-600 dark:text-neutral-400 w-fit">
              {displayArtistsOrShow(track)}
            </p>
          </div>
        </div>
        {track?.external_urls.spotify &&
          track?.album.external_urls &&
          track?.artists && <TrackDropdown track={track} />}
      </section>
    );
  }
}
