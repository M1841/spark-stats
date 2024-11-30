"use client";

import Playlist from "@/components/ui/playlist";
import { fetchPlaylists } from "@/lib/actions";
import { useState } from "react";

export default function Playlists(props: {
  playlists: SpotifyApi.PlaylistObjectSimplified[];
}) {
  const { playlists: initialPlaylists } = props;
  const [playlists, setPlaylists] = useState(initialPlaylists);

  return (
    <ul className="flex flex-col gap-2">
      {playlists
        .filter((playlist) => playlist !== null)
        .map((playlist) => {
          return (
            <li key={playlist.id}>
              <Playlist
                playlist={playlist}
                onShuffle={async () => {
                  setPlaylists(await fetchPlaylists());
                }}
              />
            </li>
          );
        })}
    </ul>
  );
}
