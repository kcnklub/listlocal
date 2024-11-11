import { auth, signIn } from "~/server/auth"

export default async function DiscordSignIn() {
    const session = await auth()
    if (session?.user) return null
    return (
        <form
            action={async () => {
                "use server"
                await signIn("discord")
            }}
        >
            <button type="submit">Signin with Discord</button>
        </form>
    )
} 
