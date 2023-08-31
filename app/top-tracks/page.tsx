import { redirect } from "next/navigation";

export default async function StatsRedirect() {
  redirect('/top-tracks/short_term');
}
