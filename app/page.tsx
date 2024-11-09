import HeroSigninBlock from "@/components/scenes/hero-signin-block";
import HomeSection from "@/components/scenes/home-section";
import { Session } from "next-auth";
import SpotifyWebApi from "spotify-web-api-node";
import { signIn } from "next-auth/react";
import { auth } from "@/auth";

export default async function Home() {
  const session = (await auth()) as Session;
  if (session?.user && session?.accessToken) {
    const spotifyApi = new SpotifyWebApi({
      accessToken: session.accessToken,
    });
    if (session?.error) {
      signIn("spotify");
    }
    return <HomeSection spotifyApi={spotifyApi} />;
  }
  return <HeroSigninBlock />;
}
