import Link from "next/link"
import { useState } from "react"

export default function StandardNav({ text = "black" }) {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="p-5 lg:px-16 lg:py-8 shadow lg:shadow-none flex justify-between lg:relative w-full items-center z-10 top-0"
    >
      <Link href="/">
          <a>
          <img 
            src="/img/amb-logo.svg"
            className="w-[43vw] lg:w-[20vw]"
          />
          </a>
        </Link>
      
      <button onClick={() => setOpen(!open)} className="lg:hidden">
        <img 
          src="/img/icon_hamburger.svg"
          className="w-[8vw]"
        />
      </button>
      {/* mobile menu */}
      {open && (
        <div
          className="absolute top-0 left-0 w-screen h-screen bg-white p-5 flex flex-col gap-8 z-[9999]"
        >
          <div className="flex justify-between">
            <Link href="/">
              <a>
              <img 
                src="/img/amb-logo.svg"
                className="w-[43vw] lg:w-[20vw]"
              />
              </a>
            </Link>
            <button onClick={() => setOpen(!open)} className="lg:hidden">
              <img 
                src="/img/icon_hamburger.svg"
                className="w-[8vw]"
              />
            </button>
          </div>
          <Link href="/">
            <a className="text-lg">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-lg">About</a>
          </Link>
          {/* <Link href="/team">
            <a className="text-lg">Team</a>
          </Link>*/}
          <Link href="/projects">
            <a className="text-lg">Projects</a>
          </Link> 
          <Link href="/contact">
            <a className="text-lg">Contact</a>
          </Link>
        </div>
      )}
      {/* pc menu */}
      <div className="hidden lg:sticky lg:flex gap-24" style={{ color: text === 'black' ? '#595959' : '#ffffff' }}>
        <Link href="/">
            <a className="text-[28px]">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-[28px]">About</a>
          </Link>
          {/* <Link href="/team">
            <a className="text-[28px]">Team</a>
          </Link>*/}
          <Link href="/projects">
            <a className="text-[28px]">Projects</a>
          </Link> 
          <Link href="/contact">
            <a className="text-[28px]">Contact</a>
          </Link>
      </div>
    </nav>
  )
}
