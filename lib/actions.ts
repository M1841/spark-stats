"use server";

import SpotifyWebApi from "spotify-web-api-node";
import { shuffle } from "fast-shuffle";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export async function shufflePlaylist(
  playlist: SpotifyApi.PlaylistObjectSimplified
) {
  const session = (await auth()) as Session;
  if (session?.user && session?.accessToken) {
    const spotifyApi = new SpotifyWebApi({ accessToken: session.accessToken });

    // Fetch tracks, 100 at a time
    const tracks = [];
    let offset = 0;
    while (tracks.length < playlist.tracks.total) {
      tracks.push(
        ...(
          await spotifyApi.getPlaylistTracks(playlist.id, {
            offset: offset,
            limit: 100,
          })
        ).body.items
      );
      offset += 100;
    }

    // Shuffle tracks and split them into chunks of 100
    const shuffledTracks = shuffle(tracks).filter((track) => !track.is_local);
    const chunks = shuffledTracks.reduce(
      (acc: SpotifyApi.PlaylistTrackObject[][], _, i) => {
        if (i % 100 === 0) {
          acc.push(
            shuffledTracks.slice(i, Math.min(i + 100, shuffledTracks.length))
          );
        }
        return acc;
      },
      []
    );

    // Create a new playlist and add tracks to it, 100 at a time
    const newPlaylist = (
      await spotifyApi.createPlaylist(playlist.name + " (Shuffled)", {
        public: false,
        description: "",
      })
    ).body;
    chunks.map(async (chunk) => {
      await spotifyApi.addTracksToPlaylist(
        newPlaylist.id,
        chunk
          .map((track) => track.track?.uri)
          .filter((uri): uri is string => uri !== undefined)
      );
    });
  } else redirect("/");
}

export async function fetchPlaylists() {
  const session = (await auth()) as Session;
  if (session?.user && session?.accessToken) {
    const spotifyApi = new SpotifyWebApi({ accessToken: session.accessToken });
    return (await spotifyApi.getUserPlaylists()).body.items;
  } else redirect("/");
}
