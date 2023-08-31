import { Mic2 } from "lucide-react";
import { ScrollArea } from "@/components/shadcn/scroll-area";
import IndexedArtist from "@/components/scenes/top-artists/indexed-artist";
import SpotifyWebApi from "spotify-web-api-node";
import IndexedLoadingCard from "../../ui/indexed-loading-card";

export default async function TopArtists(props: {
    spotifyApi: SpotifyWebApi;
    timeRange: "short_term" | "medium_term" | "long_term" | undefined
}) {
    const { spotifyApi, timeRange } = props;
    const artistDataOne = await spotifyApi.getMyTopArtists({ time_range: timeRange, limit: 49 });
    const artistDataTwo = await spotifyApi.getMyTopArtists({ time_range: timeRange, limit: 50, offset: 49 });
    const artists = [...artistDataOne.body.items, ...artistDataTwo.body.items];
    return (
        <section className='flex flex-col top-tracks-height'>
            <header className='p-0 pl-2 mb-2 text-neutral-600 dark:text-neutral-400'>
                <h2 className='text-sm flex gap-1 items-center font-normal'>
                    <span className='text-neutral-600 dark:text-neutral-400'>
                        <Mic2
                            size={16}
                            strokeWidth={2}
                        />
                    </span>
                    Top Artists
                </h2>
            </header>
            <ScrollArea className='flex flex-col gap-2 -mr-[0.786rem] pr-[0.786rem]'>
                {artists.map((item, index) => {
                    return (
                        <>
                            <IndexedArtist
                                key={item.id}
                                artist={item}
                                index={index + 1}
                            />
                            <div key={item.id} className='h-2'></div>
                        </>
                    );
                })}
            </ScrollArea>
        </section>
    )
}

export function LoadingTopArtists() {
    let fiftyLoadingCards: JSX.Element[] = [];
    for (let i = 1; i <= 99; i++) fiftyLoadingCards.push(<><IndexedLoadingCard index={i} /><div className='h-2'></div></>);
    return (
        <section className='flex flex-col top-tracks-height'>
            <header className='p-0 pl-2 mb-2 text-neutral-600 dark:text-neutral-400'>
                <h2 className='text-sm flex gap-1 items-center font-normal'>
                    <span className='text-neutral-600 dark:text-neutral-400'>
                        <Mic2
                            size={16}
                            strokeWidth={2}
                        />
                    </span>
                    Top Artists
                </h2>
            </header>
            <ScrollArea className='flex flex-col gap-2 -mr-[0.786rem] pr-[0.786rem]'>
                {fiftyLoadingCards}
            </ScrollArea>
        </section>
    )
}