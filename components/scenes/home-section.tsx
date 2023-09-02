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
        <main className='w-full mt-[3.25rem] pt-6 px-[0.9rem] md:px-[3.4rem] xl:px-[5.4rem] flex flex-col lg:flex-row gap-6 main-height'>
            <section className='flex w-full justify-start flex-col gap-6 section-height'>
                <Suspense fallback={<LoadingUserHeader />}>
                    <UserHeader spotifyApi={spotifyApi} />
                </Suspense>
                <FeaturesSection />
            </section>
            <aside className='flex flex-col justify-start w-full lg:w-1/3 lg:min-w-[33.333333%] gap-6 home-section-height'>
                <Suspense fallback={<LoadingCurrentlyPlaying />}>
                    <CurrentlyPlaying spotifyApi={spotifyApi} />
                </Suspense>
                <Suspense fallback={<LoadingRecentlyPlayed />}>
                    <RecentlyPlayed spotifyApi={spotifyApi} />
                </Suspense>
            </aside>
        </main>
    );
}
