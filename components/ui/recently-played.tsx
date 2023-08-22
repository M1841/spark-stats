import React from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { History } from "lucide-react";
import Track from "./track";
import { ScrollArea } from "@/components/shadcn/scroll-area";

export default async function RecentlyPlayed(props: {
    spotifyApi: SpotifyWebApi;
}) {
    const { spotifyApi } = props;
    const { body } = await spotifyApi.getMyRecentlyPlayedTracks();
    const { items } = body;
    if (items) {
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
                                <div className='h-2'></div>
                            </>
                        );
                    })}
                </ScrollArea>
            </section>
        );
    }
}
