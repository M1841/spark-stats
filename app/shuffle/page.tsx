import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SpotifyWebApi from "spotify-web-api-node";
import { Suspense } from "react";
import PlaylistShuffler, {
  LoadingPlaylistShuffler,
} from "@/components/scenes/shuffle/playlist-shuffler";

export default async function Page() {
  const session = await auth();
  if (session?.user && session?.accessToken) {
    const spotifyApi = new SpotifyWebApi({
      accessToken: session.accessToken,
    });
    return (
      <main className="w-full max-w-3xl p-6 pb-2 flex flex-col">
        <Suspense fallback={<LoadingPlaylistShuffler />}>
          <PlaylistShuffler spotifyApi={spotifyApi} />
        </Suspense>
      </main>
    );
  } else redirect("/");
}
