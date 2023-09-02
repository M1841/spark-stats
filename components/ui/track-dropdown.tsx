"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger
} from "@/components/shadcn/dropdown-menu"
import { MoreVertical, Music2, Mic2, Disc3 } from "lucide-react"
import Link from "next/link"

export default function TrackDropdown(props: {
    track: SpotifyApi.TrackObjectFull
}) {
    const { track } = props;
    return (
        <DropdownMenu>

            <DropdownMenuTrigger className='text-neutral-600 dark:text-neutral-400 p-3 rounded-full sm:hover:bg-neutral-200 sm:dark:hover:bg-neutral-800'>
                <MoreVertical size={18} />
                <span className="sr-only">Spotify Links</span>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='mr-[0.88rem] rounded-md text-sm bg-[#fdfdfd] dark:bg-[#0d0d0d] border-zinc-300 dark:border-zinc-800'>

                <DropdownMenuLabel>Spotify Links</DropdownMenuLabel>
                <DropdownMenuSeparator className='bg-zinc-300 dark:bg-zinc-800' />

                <Link href={track.external_urls.spotify} target="_blank">
                    <DropdownMenuItem className='p-2 rounded-sm sm:hover:bg-neutral-200/75 sm:dark:hover:bg-neutral-900/75 cursor-pointer gap-2'>
                        <Music2 size={14} />View Track
                    </DropdownMenuItem>
                </Link>

                {
                    track.artists.length <= 1
                        ?
                        <Link href={track.artists[0].external_urls.spotify} target="_blank">
                            <DropdownMenuItem className='p-2 rounded-sm sm:hover:bg-neutral-200/75 sm:dark:hover:bg-neutral-900/75 cursor-pointer gap-2'>
                                <Mic2 size={14} />View Artist
                            </DropdownMenuItem>
                        </Link>
                        :
                        <DropdownMenuSub>

                            <DropdownMenuSubTrigger className='p-2 rounded-sm sm:hover:bg-[#f7f7f7] sm:dark:hover:bg-[#141414] focus:bg-neutral-200 data-[state=open]:bg-neutral-200 focus:dark:bg-[#141414] data-[state=open]:dark:bg-[#141414] gap-2'>
                                <Mic2 size={14} /> View Artists
                            </DropdownMenuSubTrigger>

                            <DropdownMenuSubContent className='rounded-md text-sm bg-[#fdfdfd] dark:bg-[#0d0d0d] border-zinc-300 dark:border-zinc-800'>

                                <DropdownMenuLabel>Artists</DropdownMenuLabel>
                                <DropdownMenuSeparator className='bg-zinc-300 dark:bg-zinc-800' />

                                {track.artists.map((artist) => {
                                    return (
                                        <Link key={artist.id} href={artist.external_urls.spotify} target="_blank">
                                            <DropdownMenuItem className='p-2 rounded-sm sm:hover:bg-neutral-200/75 sm:dark:hover:bg-neutral-900/75 cursor-pointer'>
                                                {artist.name}
                                            </DropdownMenuItem>
                                        </Link>
                                    )
                                })}
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                }
                <Link href={track.album.external_urls.spotify} target="_blank">
                    <DropdownMenuItem className='p-2 rounded-sm sm:hover:bg-neutral-200/75 sm:dark:hover:bg-neutral-900/75 cursor-pointer gap-2'>
                        <Disc3 size={14} />View Album
                    </DropdownMenuItem>
                </Link>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}
