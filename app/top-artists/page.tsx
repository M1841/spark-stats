import { redirect } from "next/navigation";

export default async function StatsRedirect() {
    redirect('/top-artists/short_term');
}
