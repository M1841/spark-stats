import { Mic2 } from "lucide-react";
import SpotifyWebApi from "spotify-web-api-node";
import Artist from "@/components/ui/artist";
import LoadingCard from "@/components/ui/loading-card";

export default async function TopArtists(props: { spotifyApi: SpotifyWebApi }) {
  try {
    const { spotifyApi } = props;
    const [
      shortTerm1,
      shortTerm2,
      mediumTerm1,
      mediumTerm2,
      longTerm1,
      longTerm2,
    ] = await Promise.all([
      spotifyApi.getMyTopArtists({ time_range: "short_term", limit: 49 }),
      spotifyApi.getMyTopArtists({
        time_range: "short_term",
        limit: 50,
        offset: 49,
      }),
      spotifyApi.getMyTopArtists({ time_range: "medium_term", limit: 49 }),
      spotifyApi.getMyTopArtists({
        time_range: "medium_term",
        limit: 50,
        offset: 49,
      }),
      spotifyApi.getMyTopArtists({ time_range: "long_term", limit: 49 }),
      spotifyApi.getMyTopArtists({
        time_range: "long_term",
        limit: 50,
        offset: 49,
      }),
    ]);
    const artists: {
      short_term: SpotifyApi.ArtistObjectFull[];
      medium_term: SpotifyApi.ArtistObjectFull[];
      long_term: SpotifyApi.ArtistObjectFull[];
    } = {
      short_term: [...shortTerm1.body.items, ...shortTerm2.body.items],
      medium_term: [...mediumTerm1.body.items, ...mediumTerm2.body.items],
      long_term: [...longTerm1.body.items, ...longTerm2.body.items],
    };

    return (
      <>
        <header className="p-0 pl-2 mb-2 text-neutral-600 dark:text-neutral-400">
          <h2 className="text-sm flex gap-1 items-center font-normal">
            <span className="text-neutral-600 dark:text-neutral-400">
              <Mic2 size={16} strokeWidth={2} />
            </span>
            Top Artists
          </h2>
        </header>
        {Object.entries(artists).map(([range, artists]) => {
          return (
            <ul
              className="hidden flex-col gap-2"
              id={range + "_list"}
              key={range + "_list"}
            >
              {artists.map((artist, index) => {
                return (
                  <li key={range + "_list_" + artist.id}>
                    <Artist artist={artist} index={index + 1} />
                  </li>
                );
              })}
            </ul>
          );
        })}
      </>
    );
  } catch (err: unknown) {
    console.error(err);
    return <LoadingTopArtists />;
  }
}

export function LoadingTopArtists() {
  return (
    <section className="flex flex-col">
      <header className="p-0 pl-2 mb-2 text-neutral-600 dark:text-neutral-400">
        <h2 className="text-sm flex gap-1 items-center font-normal">
          <span className="text-neutral-600 dark:text-neutral-400">
            <Mic2 size={16} strokeWidth={2} />
          </span>
          Top Artists
        </h2>
      </header>
      <ul className="flex flex-col gap-2">
        {[...Array(19)].map((_, i) => {
          return <LoadingCard key={i} index={i + 1} />;
        })}
      </ul>
    </section>
  );
}
