import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const SignInPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">Welcome to Your App</h1>
            <SignedOut>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => window.location.href = "/"}>
                    Sign In
                </button>
            </SignedOut>
            <SignedIn>
                <div className="text-lg mb-4">Hello, <UserButton className="text-blue-500" />!</div>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={() => window.location.href = "/sign-out"}>
                    Sign Out
                </button>
            </SignedIn>
        </div>
    );
};

export default SignInPage;
