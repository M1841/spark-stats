import LoadingCard from "@/components/ui/loading-card";
import { Shuffle } from "lucide-react";
import SpotifyWebApi from "spotify-web-api-node";
import Playlists from "@/components/scenes/shuffle/playlists";

export default async function PlaylistShuffler(props: {
  spotifyApi: SpotifyWebApi;
}) {
  try {
    const { spotifyApi } = props;
    const playlists = (await spotifyApi.getUserPlaylists()).body.items;
    console.log(playlists);
    return (
      <>
        <header className="p-0 pl-2 mb-2 text-neutral-600 dark:text-neutral-400">
          <h2 className="text-sm flex gap-1 items-center font-normal">
            <span className="text-neutral-600 dark:text-neutral-400">
              <Shuffle size={16} strokeWidth={2} />
            </span>
            Playlist Shuffler
          </h2>
        </header>
        <Playlists playlists={playlists} />
      </>
    );
  } catch (err: unknown) {
    console.error(err);
    return <LoadingPlaylistShuffler />;
  }
}

export function LoadingPlaylistShuffler() {
  return (
    <section className="flex flex-col">
      <header className="p-0 pl-2 mb-2 text-neutral-600 dark:text-neutral-400">
        <h2 className="text-sm flex gap-1 items-center font-normal">
          <span className="text-neutral-600 dark:text-neutral-400">
            <Shuffle size={16} strokeWidth={2} />
          </span>
          Shuffle Playlists
        </h2>
      </header>
      <ul className="flex flex-col gap-2">
        {[...Array(19)].map((_, i) => {
          return <LoadingCard key={i} />;
        })}
      </ul>
    </section>
  );
}
