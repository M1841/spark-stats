import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Session } from "next-auth";
import SpotifyWebApi from "spotify-web-api-node";
import { redirect } from "next/navigation";
import TimeRangeSelection from "@/components/scenes/stats/time-range-selection";
import TopTracks from "@/components/scenes/stats/top-tracks";
import TopArtists from "@/components/scenes/stats/top-artists";

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
        if (timeRange !== 'short_term' && timeRange !== 'medium_term' && timeRange !== 'long_term') redirect('/stats/short_term');
        else {
            const trackData = await spotifyApi.getMyTopTracks({ time_range: timeRange, limit: 50 });
            const tracks = trackData.body.items;
            const artistData = await spotifyApi.getMyTopArtists({ time_range: timeRange, limit: 50 });
            const artists = artistData.body.items;
            return (
                <main className='w-full mt-[3.25rem] pt-6 px-[0.9rem] sm:px-[3.4rem] lg:px-[5.4rem] 2xl:px-[8.4rem] flex flex-col gap-6 main-height'>
                    <TimeRangeSelection range={timeRange} />
                    <div className=" flex flex-col lg:flex-row gap-6 ">
                        <section className='flex w-full justify-start flex-col gap-6 top-tracks-height'>
                            <TopTracks tracks={tracks} />
                        </section>
                        <aside className='flex flex-col justify-start w-full lg:w-1/2 lg:min-w-[50%] gap-6 section-height'>
                            <TopArtists artists={artists} />
                        </aside>

                    </div>
                </main>
            )

        }
    }
    else redirect('/');
}
