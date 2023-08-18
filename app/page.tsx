import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import HeroSigninBlock from "@/components/scenes/hero-signin-block";
import HomeSection from "@/components/scenes/home-section";

export default async function Home() {
    const session = await getServerSession(authOptions);
    return <>{!session?.user ? <HeroSigninBlock /> : <HomeSection />}</>;
}
