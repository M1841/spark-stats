import { Profile, Session, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import SpotifyProvider from "next-auth/providers/spotify";

const scopes = [
    "user-read-currently-playing",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-private",
    "playlist-modify-public",
    "user-top-read",
    "user-read-recently-played",
    "user-read-email",
    "user-read-private",
];

const authOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID || "",
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET || "",
            authorization: `https://accounts.spotify.com/authorize?scope=${scopes.join(
                ","
            )}`,
        }),
    ],
    callbacks: {
        async jwt(params: {
            token: JWT;
            account: User | AdapterUser;
            profile?: Profile | undefined;
        }) {
            if (params.account) {
                params.token.accessToken = params.account.access_token;
                params.token.id = params.profile.id;
            }
            return params.token;
        },
        async session(params: {
            session: Session;
            token: JWT;
            user: AdapterUser;
        }) {
            params.session.accessToken = params.token.accessToken;
            params.session.user.id = params.token.id;
            return params.session;
        },
    },
};

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    ...authOptions,
});

export { handler as GET, handler as POST, authOptions };
