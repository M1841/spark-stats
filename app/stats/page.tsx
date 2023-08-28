import { redirect } from "next/navigation";

export default async function StatsRedirect() {
  redirect('/stats/short_term');
}
