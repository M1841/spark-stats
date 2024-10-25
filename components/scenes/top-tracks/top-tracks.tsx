import { Music2 } from "lucide-react";
import SpotifyWebApi from "spotify-web-api-node";
import Track from "@/components/ui/track";
import LoadingCard from "@/components/ui/loading-card";

export default async function TopTracks(props: { spotifyApi: SpotifyWebApi }) {
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
      spotifyApi.getMyTopTracks({ time_range: "short_term", limit: 49 }),
      spotifyApi.getMyTopTracks({
        time_range: "short_term",
        limit: 50,
        offset: 49,
      }),
      spotifyApi.getMyTopTracks({ time_range: "medium_term", limit: 49 }),
      spotifyApi.getMyTopTracks({
        time_range: "medium_term",
        limit: 50,
        offset: 49,
      }),
      spotifyApi.getMyTopTracks({ time_range: "long_term", limit: 49 }),
      spotifyApi.getMyTopTracks({
        time_range: "long_term",
        limit: 50,
        offset: 49,
      }),
    ]);
    const tracks: {
      short_term: SpotifyApi.TrackObjectFull[];
      medium_term: SpotifyApi.TrackObjectFull[];
      long_term: SpotifyApi.TrackObjectFull[];
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
              <Music2 size={16} strokeWidth={2} />
            </span>
            Top Tracks
          </h2>
        </header>
        {Object.entries(tracks).map(([range, tracks]) => {
          return (
            <ul
              className="hidden flex-col gap-2"
              id={range + "_list"}
              key={range + "_list"}
            >
              {tracks.map((track, index) => {
                return (
                  <li key={range + "_list_" + track.id}>
                    <Track item={track} index={index + 1} />
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
    return <LoadingTopTracks />;
  }
}

export function LoadingTopTracks() {
  let skeletonCards: JSX.Element[] = [];
  for (let i = 1; i <= 19; i++)
    skeletonCards.push(
      <li>
        <LoadingCard index={i} />
      </li>
    );
  return (
    <section className="flex flex-col">
      <header className="p-0 pl-2 mb-2 text-neutral-600 dark:text-neutral-400">
        <h2 className="text-sm flex gap-1 items-center font-normal">
          <span className="text-neutral-600 dark:text-neutral-400">
            <Music2 size={16} strokeWidth={2} />
          </span>
          Top Tracks
        </h2>
      </header>
      <ul className="flex flex-col gap-2">{skeletonCards}</ul>
    </section>
  );
}
