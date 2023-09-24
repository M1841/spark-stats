import { Music2 } from "lucide-react";
import { ScrollArea } from "@/components/shadcn/scroll-area";
import SpotifyWebApi from "spotify-web-api-node";
import Track from "@/components/ui/track";
import LoadingCard from "@/components/ui/loading-card";

export default async function TopTracks(props: {
    spotifyApi: SpotifyWebApi;
}) {
    try {
        const { spotifyApi } = props;
        const tracks: {
            shortTerm: SpotifyApi.TrackObjectFull[],
            mediumTerm: SpotifyApi.TrackObjectFull[],
            longTerm: SpotifyApi.TrackObjectFull[]
        } = {
            shortTerm: [],
            mediumTerm: [],
            longTerm: []
        }
        let trackDataOne = await spotifyApi.getMyTopTracks({ time_range: "short_term", limit: 49 });
        let trackDataTwo = await spotifyApi.getMyTopTracks({ time_range: "short_term", limit: 50, offset: 49 });
        tracks.shortTerm = [...trackDataOne.body.items, ...trackDataTwo.body.items];

        trackDataOne = await spotifyApi.getMyTopTracks({ time_range: "medium_term", limit: 49 });
        trackDataTwo = await spotifyApi.getMyTopTracks({ time_range: "medium_term", limit: 50, offset: 49 });
        tracks.mediumTerm = [...trackDataOne.body.items, ...trackDataTwo.body.items];

        trackDataOne = await spotifyApi.getMyTopTracks({ time_range: "long_term", limit: 49 });
        trackDataTwo = await spotifyApi.getMyTopTracks({ time_range: "long_term", limit: 50, offset: 49 });
        tracks.longTerm = [...trackDataOne.body.items, ...trackDataTwo.body.items];

        return (
            <>
                <header className='p-0 pl-2 mb-2 text-neutral-600 dark:text-neutral-400'>
                    <h2 className='text-sm flex gap-1 items-center font-normal'>
                        <span className='text-neutral-600 dark:text-neutral-400'>
                            <Music2
                                size={16}
                                strokeWidth={2}
                            />
                        </span>
                        Top Tracks
                    </h2>
                </header>
                <ScrollArea className='hidden flex-col gap-2 -mr-[0.786rem] pr-[0.786rem]' id='short-term-list'>
                    {tracks.shortTerm.map((item, index) => {
                        return (
                            <>
                                <Track
                                    key={item.id}
                                    track={item}
                                    index={index + 1}
                                />
                                <div key={item.id} className='h-2'></div>
                            </>
                        );
                    })}
                </ScrollArea>
                <ScrollArea className='hidden flex-col gap-2 -mr-[0.786rem] pr-[0.786rem]' id='medium-term-list'>
                    {tracks.mediumTerm.map((item, index) => {
                        return (
                            <>
                                <Track
                                    key={item.id}
                                    track={item}
                                    index={index + 1}
                                />
                                <div key={item.id} className='h-2'></div>
                            </>
                        );
                    })}
                </ScrollArea>
                <ScrollArea className='hidden flex-col gap-2 -mr-[0.786rem] pr-[0.786rem]' id='long-term-list'>
                    {tracks.longTerm.map((item, index) => {
                        return (
                            <>
                                <Track
                                    key={item.id}
                                    track={item}
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
        return <LoadingTopTracks />
    }
}

export function LoadingTopTracks() {
    let skeletonCards: JSX.Element[] = [];
    for (let i = 1; i <= 99; i++) skeletonCards.push(<><LoadingCard index={i} /><div className='h-2'></div></>);
    return (
        <>
            <header className='p-0 pl-2 mb-2 text-neutral-600 dark:text-neutral-400'>
                <h2 className='text-sm flex gap-1 items-center font-normal'>
                    <span className='text-neutral-600 dark:text-neutral-400'>
                        <Music2
                            size={16}
                            strokeWidth={2}
                        />
                    </span>
                    Top Tracks
                </h2>
            </header>
            <ScrollArea className='flex flex-col gap-2 -mr-[0.786rem] pr-[0.786rem]'>
                {skeletonCards}
            </ScrollArea>
        </>
    )
}