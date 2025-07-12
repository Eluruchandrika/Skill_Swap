import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn, user } = useUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      {isSignedIn ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold">Welcome, {user.fullName}</h1>
          <UserButton />
        </div>
      ) : (
        <div className="space-x-4">
          <SignInButton mode="modal">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign In</button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="bg-green-600 text-white px-4 py-2 rounded">Sign Up</button>
          </SignUpButton>
        </div>
      )}
    </main>
  );
}
