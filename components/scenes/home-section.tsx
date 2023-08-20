import UserHeader from "./user-header";
import CurrentlyPlaying from "../ui/currently-playing";
import FeaturesSection from "./features-section";
import RecentlyPlayed from "../ui/recently-played";
import Recommendations from "./recommendations";
import SpotifyWebApi from "spotify-web-api-node";

export default async function HomeSection(props: {
    spotifyApi: SpotifyWebApi;
}) {
    const { spotifyApi } = props;
    return (
        <main className='w-full mt-[3.25rem] pt-6 px-4 sm:px-[3.5rem] lg:px-[5.5rem] 2xl:px-[8.5rem] flex flex-col md:flex-row gap-8'>
            <section className='flex w-full justify-between flex-col'>
                {/* <UserHeader spotifyApi={spotifyApi} />
                <FeaturesSection />
                <Recommendations /> */}
            </section>
            <aside className='flex justify-between flex-col w-full md:w-1/2 md:min-w-[50%] lg:w-1/3 lg:min-w-[33.333333%] gap-6'>
                <CurrentlyPlaying spotifyApi={spotifyApi} />
                <RecentlyPlayed spotifyApi={spotifyApi} />
            </aside>
        </main>
    );
}
