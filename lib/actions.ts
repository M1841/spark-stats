"use server";

import SpotifyWebApi from "spotify-web-api-node";
import { shuffle } from "fast-shuffle";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export async function shufflePlaylist(
  playlist: SpotifyApi.PlaylistObjectSimplified
) {
  const session = await auth();
  if (session?.user && session?.accessToken) {
    const spotifyApi = new SpotifyWebApi({ accessToken: session.accessToken });

    // Fetch tracks, 100 at a time
    const { items, total, limit } = (
      await spotifyApi.getPlaylistTracks(playlist.id)
    ).body;
    const tracks = items.concat(
      ...(await Promise.all(
        [...Array(Math.ceil(total / limit))].map(async (_, i) => {
          return (
            await spotifyApi.getPlaylistTracks(playlist.id, {
              offset: limit * (i + 1),
            })
          ).body.items;
        })
      ))
    );

    // Shuffle tracks and split them into chunks of 100
    const shuffledTracks = shuffle(tracks.filter((track) => !track.is_local));
    const chunks = await Promise.all(
      [...Array(Math.ceil(tracks.length / 100))].map((_, i) =>
        shuffledTracks.slice(
          i * 100,
          Math.min((i + 1) * 100, shuffledTracks.length)
        )
      )
    );

    const newPlaylistId = (
      await spotifyApi.createPlaylist(playlist.name + " (Shuffled)", {
        public: false,
        description: "",
      })
    ).body.id;
    await Promise.all(
      chunks.map(async (chunk) => {
        await spotifyApi.addTracksToPlaylist(
          newPlaylistId,
          chunk
            .map(({ track }) => track?.uri)
            .filter((uri): uri is string => uri !== undefined)
        );
      })
    );
  } else redirect("/");
}

export async function fetchPlaylists() {
  const session = await auth();
  if (session?.user && session?.accessToken) {
    const spotifyApi = new SpotifyWebApi({ accessToken: session.accessToken });
    return (await spotifyApi.getUserPlaylists()).body.items;
  } else redirect("/");
}
