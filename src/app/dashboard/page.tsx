import { auth } from "~/server/auth";

export default async function DashboardPage() {
    const session = await auth()
    if (!session) return (<h1>Dashboard</h1>)
    return (<h1>Signed In Dashboard</h1>);
}
