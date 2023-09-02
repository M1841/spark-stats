import React from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { History, Music } from "lucide-react";
import Track from "../ui/track";
import { ScrollArea } from "@/components/shadcn/scroll-area";
import LoadingCard from "../ui/loading-card";

export default async function RecentlyPlayed(props: {
    spotifyApi: SpotifyWebApi;
}) {
    try {
        const { spotifyApi } = props;
        const { body } = await spotifyApi.getMyRecentlyPlayedTracks({ limit: 50 });
        const { items } = body;
        return (
            <section className='flex flex-col recently-played-height'>
                <header className='p-0 pl-2 mb-2 text-neutral-600 dark:text-neutral-400 flex-none'>
                    <h2 className='text-sm flex gap-1 items-center font-normal'>
                        <span className='text-neutral-600 dark:text-neutral-400'>
                            <History
                                size={16}
                                strokeWidth={2}
                            />
                        </span>
                        Recently Played
                    </h2>
                </header>
                <ScrollArea className='flex flex-col gap-2 -mr-[0.786rem] pr-[0.786rem]'>
                    {items.map((item) => {
                        return (
                            <>
                                <Track
                                    key={item.played_at}
                                    track={item.track}
                                />
                                <div key={item.played_at} className='h-2'></div>
                            </>
                        );
                    })}
                    {items.length < 1 && (
                        <section className='rounded-lg bg-neutral-100/25 dark:bg-neutral-900/25 w-full border-[1px] border-zinc-300 dark:border-zinc-800 flex justify-between items-center p-2'>
                            <div className='flex justify-start items-center gap-2'>
                                <Music
                                    className='flex-none w-12 h-12 p-3 text-neutral-400 dark:text-neutral-500 bg-neutral-200/75 dark:bg-neutral-800/75 rounded-sm'
                                    size={32}
                                />
                                <span className='text-sm text-neutral-600 dark:text-neutral-400'>
                                    No tracks were played recently
                                </span>
                            </div>
                        </section>
                    )
                    }
                </ScrollArea>
            </section>
        );
    } catch (err: unknown) {
        console.error(err);
        return <LoadingRecentlyPlayed />
    }
}

export function LoadingRecentlyPlayed() {
    let fiftyLoadingCards: JSX.Element[] = [];
    for (let i = 0; i < 50; i++) fiftyLoadingCards.push(<><LoadingCard /><div className='h-2'></div></>);
    return (
        <section className='flex flex-col recently-played-height'>
            <header className='p-0 pl-2 mb-2 text-neutral-600 dark:text-neutral-400 flex-none'>
                <h2 className='text-sm flex gap-1 items-center font-normal'>
                    <span className='text-neutral-600 dark:text-neutral-400'>
                        <History
                            size={16}
                            strokeWidth={2}
                        />
                    </span>
                    Recently Played
                </h2>
            </header>
            <ScrollArea className='flex flex-col gap-2 -mr-[0.786rem] pr-[0.786rem]'>
                {fiftyLoadingCards}
            </ScrollArea>
        </section>
    )
}