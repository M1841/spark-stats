import { Profile, Session, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import SpotifyProvider from "next-auth/providers/spotify";
import SpotifyWebApi from "spotify-web-api-node";

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
            account: User | AdapterUser | any;
            profile?: Profile | any;
        }) {
            const { token, account, profile } = params;
            if (account) {
                token.accessToken = account?.access_token;
                token.refreshToken = account?.refresh_token;
                token.id = profile?.id;
                token.expiresAt = account?.expires_at;
            }
            if (token.expiresAt) {
                let expiresAt = token.expiresAt as number;
                const now = Date.now() / 1000;
                const fiveMinutes = 5 * 60;
                if (expiresAt - now < fiveMinutes) {
                    const accessToken = token.accessToken as string;
                    const refreshToken = token.refreshToken as string;
                    const spotifyApi = new SpotifyWebApi({
                        accessToken,
                        refreshToken,
                        clientId: process.env.SPOTIFY_CLIENT_ID,
                        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
                    });
                    const { body } = await spotifyApi.refreshAccessToken();
                    token.expiresAt = Math.floor(
                        body.expires_in + Date.now() / 1000
                    );
                    token.accessToken = body.access_token;
                }
            }
            return token;
        },
        async session(params: {
            session: Session | any;
            token: JWT;
            user: AdapterUser;
        }) {
            const { session, token } = params;
            session.accessToken = token?.accessToken;
            session.user.id = token?.id;
            session.error = token?.error;
            return session;
        },
    },
};

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    ...authOptions,
});

export { handler as GET, handler as POST, authOptions };
