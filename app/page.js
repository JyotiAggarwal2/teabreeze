"use client"
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex flex-col gap-2 items-center justify-center text-white h-[40vh] px-5 md:px-0 text-xs md:text-base">
      <div className="flex items-center gap-1 font-bold text-2xl md:text-5xl">
        Buy Me a Tea
        <span><img width={70} className="invert" src="./tea.png" alt="tea" /></span>        
      </div>
      
      <p className="text-center md:text-left">A crowdfunding platform for creators. Get funded by your fans and followers!</p>
      <p className="text-center md:text-left">A place where your fans can get a tea. Unleash the power of your fans and get your projects funded!</p>
      
      <div className="buttons mt-2">
        <Link href={"./login"}>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 
          hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
          font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
        </Link>

        <Link href={"./about"}>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 
            hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
            font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </Link>
      </div>
    </div>
    
    <div className="bg-white h-1 opacity-5"></div>

    <div className="text-white py-10 md:py-20 px-10 md:px-0 text-xs md:text-base">
      <h2 className="text-lg md:text-2xl mb-6 md:mb-12 text-center font-bold">Your Fans can buy you a Tea</h2>

      <div className="flex gap-5 justify-evenly">
        <div className="flex flex-col items-center gap-1">
          <img className="item bg-slate-400 rounded-full p-2" width={70} src="./man.png" alt="man" />
          <p className="text-center font-bold">Fans want to support!</p>
          <p className="text-center">Your Fans are available for you to help</p>
        </div>
        
        <div className="flex flex-col items-center gap-1">
          <img className="item bg-slate-400 rounded-full p-2" width={70} src="./coin.png" alt="man" />
          <p className="text-center font-bold">Fans want to fund!</p>
          <p className="text-center">Your Fans are available for you to help</p>
        </div>
        
        <div className="flex flex-col items-center gap-1">
          <img className="item bg-slate-400 rounded-full p-2" width={70} src="./group.png" alt="man" />
          <p className="text-center font-bold">Fans want to help!</p>
          <p className="text-center">Your Fans are available for you to help</p>
        </div>
      </div>
    </div>

    <div className="bg-white h-1 opacity-5"></div>

    <div className="text-white py-10 md:py-20 px-6 md:px-0 flex flex-col items-center">
      <h2 className="text-lg md:text-2xl mb-6 md:mb-12 text-center font-bold">Learn more about us</h2>
      <iframe width="560" height="315" className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] 
        xl:w-[50%] xl:h-[40vh]" src="https://www.youtube.com/embed/voF1plqqZJA?si=MBe5yKf93ySMLiEh" 
        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen></iframe>

    </div>
      
    </>
  );
}
