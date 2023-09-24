import { Mic2 } from "lucide-react";
import { ScrollArea } from "@/components/shadcn/scroll-area";
import SpotifyWebApi from "spotify-web-api-node";
import Artist from "@/components/ui/artist";
import LoadingCard from "@/components/ui/loading-card";

export default async function TopArtists(props: {
    spotifyApi: SpotifyWebApi;
}) {
    try {
        const { spotifyApi } = props;
        const artists: {
            shortTerm: SpotifyApi.ArtistObjectFull[],
            mediumTerm: SpotifyApi.ArtistObjectFull[],
            longTerm: SpotifyApi.ArtistObjectFull[]
        } = {
            shortTerm: [],
            mediumTerm: [],
            longTerm: []
        }
        let artistDataOne = await spotifyApi.getMyTopArtists({ time_range: "short_term", limit: 49 });
        let artistDataTwo = await spotifyApi.getMyTopArtists({ time_range: "short_term", limit: 50, offset: 49 });
        artists.shortTerm = [...artistDataOne.body.items, ...artistDataTwo.body.items];

        artistDataOne = await spotifyApi.getMyTopArtists({ time_range: "medium_term", limit: 49 });
        artistDataTwo = await spotifyApi.getMyTopArtists({ time_range: "medium_term", limit: 50, offset: 49 });
        artists.mediumTerm = [...artistDataOne.body.items, ...artistDataTwo.body.items];

        artistDataOne = await spotifyApi.getMyTopArtists({ time_range: "long_term", limit: 49 });
        artistDataTwo = await spotifyApi.getMyTopArtists({ time_range: "long_term", limit: 50, offset: 49 });
        artists.longTerm = [...artistDataOne.body.items, ...artistDataTwo.body.items];

        return (
            <>
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
                <ScrollArea className='hidden flex-col gap-2 -mr-[0.786rem] pr-[0.786rem]' id='short-term-list'>
                    {artists.shortTerm.map((item, index) => {
                        return (
                            <>
                                <Artist
                                    key={item.id}
                                    artist={item}
                                    index={index + 1}
                                />
                                <div key={item.id} className='h-2'></div>
                            </>
                        );
                    })}
                </ScrollArea>
                <ScrollArea className='hidden flex-col gap-2 -mr-[0.786rem] pr-[0.786rem]' id='medium-term-list'>
                    {artists.mediumTerm.map((item, index) => {
                        return (
                            <>
                                <Artist
                                    key={item.id}
                                    artist={item}
                                    index={index + 1}
                                />
                                <div key={item.id} className='h-2'></div>
                            </>
                        );
                    })}
                </ScrollArea>
                <ScrollArea className='hidden flex-col gap-2 -mr-[0.786rem] pr-[0.786rem]' id='long-term-list'>
                    {artists.longTerm.map((item, index) => {
                        return (
                            <>
                                <Artist
                                    key={item.id}
                                    artist={item}
                                    index={index + 1}
                                />
                                <div key={item.id} className='h-2'></div>
                            </>
                        );
                    })}
                </ScrollArea>
            </>
        )
    } catch (err: unknown) {
        console.error(err);
        return <LoadingTopArtists />
    }
}

export function LoadingTopArtists() {
    let skeletonCards: JSX.Element[] = [];
    for (let i = 1; i <= 99; i++) skeletonCards.push(<><LoadingCard index={i} /><div className='h-2'></div></>);
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
                {skeletonCards}
            </ScrollArea>
        </section>
    )
}