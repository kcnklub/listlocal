import SignOut from "~/components/signout";
import GoogleSignin from "~/components/google-signin";
import { auth } from "~/server/auth";

export default async function HomePage() {
    const session = await auth();
    const email = session?.user.name

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                    List <span className="text-[hsl(280,100%,70%)]">Local</span>
                </h1>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
                    {email && <p>{email}</p>}
                    <GoogleSignin></GoogleSignin>
                    <SignOut></SignOut>
                </div>
            </div>
        </main>
    );
}
