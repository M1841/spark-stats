import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Session } from "next-auth";
import SpotifyWebApi from "spotify-web-api-node";
import { redirect } from "next/navigation";
import TimeRangeSelection from "@/components/ui/time-range-selection";
import TopTracks, { LoadingTopTracks } from "@/components/scenes/top-tracks/top-tracks";
import { Suspense } from "react";

export default async function Page() {
  const session = (await getServerSession(authOptions)) as Session;
  if (session?.user && session?.accessToken) {
    const spotifyApi = new SpotifyWebApi({
      accessToken: session.accessToken,
    });
    return (
      <main className='w-full pt-6 px-[0.9rem] md:px-[3.4rem] xl:px-[5.4rem] flex flex-col main-height'>
        <TimeRangeSelection />
        <Suspense fallback={<LoadingTopTracks />}>
          <TopTracks spotifyApi={spotifyApi} />
        </Suspense>
      </main>
    )
  }
  else redirect('/');
}
