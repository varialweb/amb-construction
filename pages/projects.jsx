import StandardPageLayout from "../components/layouts/standard-page";

export default function ProjectsPage() {
  return (
    <StandardPageLayout>
      <section className="grid justify-center p-5 py-8 lg:p-[72px] gap-5 bg-gradient-to-b lg:bg-gradient-to-r from-[#2786CD] to-[#72AEE0] text-white">
        <h1 className="text-center">Builds That Last a Lifetime</h1>
        <p>
          AMB construction is built to last. Your new build for residential, commercial, and rural development is a top priority from the moment AMB sees your blueprint. Explore our portfolio of projects to see how your new build will stand out and stand the test of time with our team.
        </p>
      </section>
      <section className="grid justify-center p-5 py-8 gap-5 lg:p-[72px] ">
        <h2 className="text-center text-[#BA0500]">Our Projects</h2>
        <p className="text-center">
          Check back soon!
        </p>
      </section>
    </StandardPageLayout>
  )
}
