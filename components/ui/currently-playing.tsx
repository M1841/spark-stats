import SpotifyWebApi from "spotify-web-api-node";
import { BarChart2 } from "lucide-react";
import Track from "./track";

export default async function CurrentlyPlaying(props: {
    spotifyApi: SpotifyWebApi;
}) {
    const { spotifyApi } = props;
    const { body } = await spotifyApi.getMyCurrentPlayingTrack();
    const { item } = body;
    if (item) {
        return (
            <section className='flex flex-col justify-center'>
                <header className='p-0 mb-2 text-neutral-600 dark:text-neutral-400'>
                    <h2 className='text-sm flex gap-1 items-center font-normal'>
                        <span className='text-neutral-600 dark:text-neutral-400'>
                            <BarChart2
                                size={16}
                                strokeWidth={2}
                            />
                        </span>
                        Currently Playing
                    </h2>
                </header>
                <Track track={item} />
            </section>
        );
    }
}
