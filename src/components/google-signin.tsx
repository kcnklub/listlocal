
import { auth, signIn } from "~/server/auth"

export default async function GoogleSignin() {
    const session = await auth()
    if (session?.user) return null
    return (
        <form
            action={async () => {
                "use server"
                await signIn("google")
            }}
        >
            <button type="submit">Signin with Google</button>
        </form>
    )
} 
