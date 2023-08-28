import UserHeader from "./user-header";
import CurrentlyPlaying from "./currently-playing";
import FeaturesSection from "./features-section";
import RecentlyPlayed from "./recently-played";
import SpotifyWebApi from "spotify-web-api-node";

export default async function HomeSection(props: {
    spotifyApi: SpotifyWebApi;
}) {
    const { spotifyApi } = props;
    return (
        <main className='w-full mt-[3.25rem] pt-6 px-[0.9rem] sm:px-[3.4rem] lg:px-[5.4rem] 2xl:px-[8.4rem] flex flex-col lg:flex-row gap-6 main-height'>
            <section className='flex w-full justify-start flex-col gap-6 section-height'>
                <UserHeader spotifyApi={spotifyApi} />
                <FeaturesSection />
            </section>
            <aside className='flex flex-col justify-start w-full lg:w-1/3 lg:min-w-[33.333333%] gap-6 home-section-height'>
                <CurrentlyPlaying spotifyApi={spotifyApi} />
                <RecentlyPlayed spotifyApi={spotifyApi} />
            </aside>
        </main>
    );
}
