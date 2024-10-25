import UserHeader, { LoadingUserHeader } from "./user-header";
import CurrentlyPlaying, { LoadingCurrentlyPlaying } from "./currently-playing";
import FeaturesSection from "./features-section";
import RecentlyPlayed, { LoadingRecentlyPlayed } from "./recently-played";
import SpotifyWebApi from "spotify-web-api-node";
import { Suspense } from "react";

export default async function HomeSection(props: {
  spotifyApi: SpotifyWebApi;
}) {
  const { spotifyApi } = props;
  return (
    <main className="w-full max-w-3xl p-6 pb-2 flex flex-col gap-6">
      <Suspense fallback={<LoadingUserHeader />}>
        <UserHeader spotifyApi={spotifyApi} />
      </Suspense>
      <FeaturesSection />
      <Suspense fallback={<LoadingCurrentlyPlaying />}>
        <CurrentlyPlaying spotifyApi={spotifyApi} />
      </Suspense>
      <Suspense fallback={<LoadingRecentlyPlayed />}>
        <RecentlyPlayed spotifyApi={spotifyApi} />
      </Suspense>
    </main>
  );
}
