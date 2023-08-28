import { ListMusic } from "lucide-react";
import { ScrollArea } from "@/components/shadcn/scroll-area";
import Track from "@/components/ui/track";

export default function TopTracks(props: { tracks: SpotifyApi.TrackObjectFull[] }) {
    const { tracks } = props;
    return (
        <section className='flex flex-col top-tracks-height'>
            <header className='p-0 pl-2 mb-2 text-neutral-600 dark:text-neutral-400'>
                <h2 className='text-sm flex gap-1 items-center font-normal'>
                    <span className='text-neutral-600 dark:text-neutral-400'>
                        <ListMusic
                            size={16}
                            strokeWidth={2}
                        />
                    </span>
                    Top Songs
                </h2>
            </header>
            <ScrollArea className='flex flex-col gap-2 -mr-[0.786rem] pr-[0.786rem]'>
                {tracks.map((item, index) => {
                    return (
                        <>
                            <Track
                                key={item.id}
                                track={item}
                            />
                            <div key={item.id} className='h-2'></div>
                        </>
                    );
                })}
            </ScrollArea>
        </section>
    )
}
