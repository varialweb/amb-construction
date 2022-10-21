import Link from "next/link";

export default function StandardFooter() {
  return (
    <footer className="bg-[#272727] p-5 lg:py-12 lg:pb-[72px] text-white grid gap-4 lg:gap-12 font-light justify-center">
      <address className="not-italic font-normal text-center">
        <p>AMB General Contractor</p>
        <p>(503) 476-6947</p>
        <p>hsmith.amb@gmail.com</p>
        <p>Lacey, WA 98503</p>
      </address>
      <p className="text-center">©2022 AMB General Contractor LLC <span className="hidden lg:inline">|</span> Created by <Link href="https://www.varial.dev"><a className="text-[#7EB9EE]">Varial Web Development</a></Link></p>
    </footer>
  )
}
