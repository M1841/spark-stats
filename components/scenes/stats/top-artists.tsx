import { Mic2 } from "lucide-react";
import { ScrollArea } from "@/components/shadcn/scroll-area";
import Artist from "@/components/ui/artist";

export default function TopArtists(props: { artists: SpotifyApi.ArtistObjectFull[] }) {
    const { artists } = props;
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
                            <Artist
                                key={item.id}
                                artist={item}
                            />
                            <div key={item.id} className='h-2'></div>
                        </>
                    );
                })}
            </ScrollArea>
        </section>
    )
}
