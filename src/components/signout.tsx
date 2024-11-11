
import { auth, signOut } from "~/server/auth"

export default async function SignOut() {
    const session = await auth()
    if (!session?.user) return null
    return (
        <form
            action={async () => {
                "use server"
                await signOut()
            }}
        >
            <button type="submit">Sign Out</button>
        </form>
    )
} 
