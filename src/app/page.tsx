'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [counter,setCounter ] = useState(0)
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">

      { counter }

      <button onClick={() => setCounter( prev => prev + 1)}>Increase</button>
      <button onClick={() => setCounter( prev => prev - 1)}>Decrease</button>
      <button onClick={() => setCounter(0)}>Reset</button>
     
    </div>
  );
}
