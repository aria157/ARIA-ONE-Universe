import React from "react";
import { FaMicrophone } from "react-icons/fa";

export default function AriaOneApp() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-white via-[#F0F9FF] to-[#E6F7FF] text-gray-800 font-sans p-6 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-[#CCFF00] to-cyan-400">
            Claim your voice.
          </span>{" "}
          <span className="text-black">Own your sound.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          ARIA ONE helps singer-songwriters verify their real vocals, protect their creative identity, and build a trusted vocal artist wallet.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-[#CCFF00] text-black font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-[#CCFF00] hover:scale-105 transition-transform flex items-center gap-2 animate-bounce border-2 border-fuchsia-300">
            <FaMicrophone className="text-lg animate-ping" />
            Launch Vocal Studio
          </button>
          <button className="bg-gradient-to-br from-pink-400 to-pink-300 text-white font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-pink-400 transition-transform hover:scale-105 animate-pulse border-2 border-yellow-100">
            Explore Artist Wallet
          </button>
          <button className="bg-white border-2 border-black text-black font-medium px-5 py-2.5 rounded-full hover:shadow-md shadow-lg transition-transform hover:scale-105 animate-glow">
            Record
          </button>
          <button className="bg-white border-2 border-black text-black font-medium px-5 py-2.5 rounded-full hover:shadow-md shadow-lg transition-transform hover:scale-105 animate-glow">
            Wallet
          </button>
          <button className="bg-white border-2 border-black text-black font-medium px-5 py-2.5 rounded-full hover:shadow-md shadow-lg transition-transform hover:scale-105 animate-glow">
            Song Builder
          </button>
        </div>

        <section className="mt-12 bg-white/80 rounded-3xl shadow-2xl p-8 backdrop-blur-md ring-2 ring-[#CCFF00] animate-fade-in border-2 border-pink-200">
          <h2 className="text-3xl font-bold mb-3 text-pink-600">Vocal Studio (Prototype)</h2>
          <p className="text-gray-700 text-base md:text-lg">
            This prototype lets you rehearse the flow of your vocal sessions. The mic button and timer are just UI for now — audio capture will be wired in a later build.
          </p>
          <div className="mt-5 text-2xl font-extrabold text-fuchsia-700 animate-pulse drop-shadow-md border-4 border-[#CCFF00] rounded-xl px-6 py-3 bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-xl transition duration-300 ease-in-out">
            READY TO RECORD
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px #ff00ff;
          }
          50% {
            box-shadow: 0 0 20px #CCFF00;
          }
          100% {
            box-shadow: 0 0 5px #ff00ff;
          }
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
