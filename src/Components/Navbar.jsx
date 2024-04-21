import { 
  ClerkLoaded, 
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";


const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 bg-black border-slate-200 px-4">
      <div className=" mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center ">
          <h1 className="text-2xl font-extrabold text-green-300 tracking-wide">
          HackNuThon
          </h1>
        </div>
        <ClerkLoading>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
            />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <button className="bg-transparent text-white w-[100px] h-[40px]  border-green-300  border-2 hover:text-sky-400">
                Login
              </button>
             
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
       

      </div>
    </header>
  );
};
export default Header;