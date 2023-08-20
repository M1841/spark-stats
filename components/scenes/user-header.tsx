import Image from "next/image";
import Link from "next/link";
import SpotifyWebApi from "spotify-web-api-node";

export default async function UserHeader(props: { spotifyApi: SpotifyWebApi }) {
    const { spotifyApi } = props;
    const { body } = await spotifyApi.getMe();
    const { display_name, external_urls, images } = body;
    return (
        <section className='flex flex-col justify-start items-center bg-gradient-to-b from-green-700/25 to-emerald-800/25 w-full'>
            <Image
                className='rounded-md h-12 w-12 sm:h-20 sm:w-20'
                src={images ? images[0].url : ""}
                height={64}
                width={64}
                alt=''
            />
            <Link
                href={external_urls.spotify}
                target='_blank'
                className=''
            >
                {display_name}
            </Link>
        </section>
    );
}
