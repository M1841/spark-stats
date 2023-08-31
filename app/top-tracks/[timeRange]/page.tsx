import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Session } from "next-auth";
import SpotifyWebApi from "spotify-web-api-node";
import { redirect } from "next/navigation";
import TimeRangeSelection from "@/components/ui/time-range-selection";
import TopTracks, { LoadingTopTracks } from "@/components/scenes/top-tracks/top-tracks";
import { Suspense } from "react";

export async function generateStaticParams() {
    return [{ timeRange: 'short_term' }, { timeRange: 'medium_term' }, { timeRange: 'long_term' }]
}

export default async function Stats({ params }: { params: { timeRange: "short_term" | "medium_term" | "long_term" | undefined } }) {
    const session = (await getServerSession(authOptions)) as Session;
    if (session?.user && session?.accessToken) {
        const spotifyApi = new SpotifyWebApi({
            accessToken: session.accessToken,
        });
        const { timeRange } = params;
        if (timeRange !== 'short_term' && timeRange !== 'medium_term' && timeRange !== 'long_term') redirect('/top-tracks/short_term');
        else {
            return (
                <main className='w-full mt-[3.25rem] pt-6 px-[0.9rem] md:px-[3.4rem] xl:px-[5.4rem] flex flex-col gap-6 main-height'>
                    <TimeRangeSelection range={timeRange} page='tracks' />
                    <section className='top-tracks-height'>
                        <Suspense fallback={<LoadingTopTracks />}>
                            <TopTracks spotifyApi={spotifyApi} timeRange={timeRange} />
                        </Suspense>
                    </section>
                </main>
            )

        }
    }
    else redirect('/');
}
