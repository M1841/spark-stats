"use client";

import Link from "next/link";
import Image from "./image";
import { ListMusic, Shuffle, Loader2 } from "lucide-react";
import { shufflePlaylist } from "@/lib/actions";
import { useState } from "react";
import { Button } from "../shadcn/button";

export default function Playlist(props: {
  playlist: SpotifyApi.PlaylistObjectSimplified;
  onShuffle: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const { playlist, onShuffle } = props;
  const image = playlist?.images?.at(-1) ? playlist.images.at(-1)!.url : "";
  return (
    <section className="rounded-lg bg-neutral-100/25 dark:bg-neutral-900/25 w-full border-[1px] border-zinc-300 dark:border-zinc-800 flex justify-between items-center p-2 sm:hover:bg-neutral-100/75 sm:dark:hover:bg-neutral-900/75">
      <div className="flex justify-start items-center gap-2">
        {image !== "" ? (
          <Link
            className="rounded-sm w-12 h-12 flex-none bg-neutral-300/75 dark:bg-neutral-800/75"
            href={playlist.external_urls.spotify}
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
          <ListMusic
            className="flex-none w-12 h-12 p-3 text-neutral-400 dark:text-neutral-500 bg-neutral-200/75 dark:bg-neutral-800/75 rounded-sm"
            size="32"
          />
        )}
        <div className="flex flex-1 flex-col gap-[0.1rem]">
          {playlist?.external_urls?.spotify ? (
            <Link
              className="hover:underline text-sm w-fit"
              href={playlist?.external_urls.spotify}
              target="_blank"
            >
              {playlist?.name}
            </Link>
          ) : (
            <p className="text-sm">{playlist?.name}</p>
          )}
          <div className="text-[0.8rem] text-neutral-600 dark:text-neutral-400 w-fit">
            {playlist.tracks.total + " track"}
            {!(playlist.tracks.total === 1) && "s"}
          </div>
        </div>
      </div>
      <Button
        onClick={async () => {
          setLoading(true);
          await shufflePlaylist(playlist);
          onShuffle();
          setLoading(false);
        }}
        className="rounded-full text-emerald-500 dark:text-emerald-300 bg-emerald-400/10 dark:bg-emerald-400/10  sm:hover:bg-emerald-400/25  sm:dark:hover:bg-emerald-400/25 p-3 flex-none"
        disabled={loading}
      >
        {loading ? (
          <Loader2 size={18} strokeWidth={2} className="animate-spin" />
        ) : (
          <Shuffle size={18} strokeWidth={2} />
        )}
      </Button>
    </section>
  );
}
