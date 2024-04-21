import React from 'react';
import { 
  ClerkLoaded, 
  ClerkLoading, 
  SignInButton, 
  SignUpButton, 
  SignedIn, 
  SignedOut
} from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import InterviewComponent from './Interview';
export default function Landing() {
  return (
    <div className="bg-[#F7F9F4] py-20 px-10 flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-1/2 flex flex-col items-center justify-center">
        <img src="/try.png" alt="Description of the image"  className=" max-w-md mb-8 lg:mb-0" />
      </div>
      <div className="lg:w-1/2 max-w-lg">
        <h1 className="text-2xl text-center w-[450px] text-black-400 bg-gray-200 rounded-xl h-[40px]  font-bold">
          AI Employee Experience Platform
        </h1>
        <h1 className="text-5xl text-center text-blacck  h-[40px] mt-8 font-bold mb-20">
          HR Solution Powered by AI
        </h1>
        <p className="mt-4 text-gray-500 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non autem ipsam nihil quis nesciunt quo voluptatibus eaque. Accusantium repellendus laborum laudantium sed ratione mollitia facere natus. Doloremque rem voluptatem eveniet.
        </p>
        <div className="flex flex-col items-center gap-y-3 mt-8">
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <button size="lg" variant="primary" className="bg-green-400 w-[100px] h-[40px] rounded-md text-black hover:bg-sky-400/90 border-green-500 border-b-4 active:border-b-0">
                  Get Started
                </button>
              </SignUpButton>
              <SignInButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <button size="lg" variant="ghost" className="bg-transparent text-black w-[200px] h-[50px] rounded-md border-green-300 border-2 hover:text-sky-700">
                  I already have an account
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <button size="lg" variant="primary" className="mb-2 bg-green-400 w-[300px] h-[40px] rounded-md text-black hover:bg-sky-400/90 border-green-500 border-b-4 active:border-b-0" asChild>
                <Link to="/conversion">
                  Get Started with interview
                </Link>
              </button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
