import Head from "next/head";
import StandardPageLayout from "../components/layouts/standard-page";

export default function AboutPage() {
  return (
    <StandardPageLayout>
      <Head>
        <title>About AMB</title>
        <meta name="description" content="Harrilyn Smith is originally from Mekoryuk, Alaska and has indigenous roots with the Cup'ig of Nunivak Island. She left at the age of 19 and traveled before attending Alaska Technical Center in Kotzebue at the age of 23, and returned home after graduating to begin looking for jobs. She obtained her first apprenticeship with Calista Construction, which was where her career in commercial and residential development first began. After years of living in Alaska, Oregon, and North Carolina, she eventually moved to Washington state in 2017. Harrilyn decided to further her education and attended Northwest Indian College at the Nisqually site in Olympia. She earned her Associate's degree and proudly graduated with Honors." /> 
      </Head>
      <section className="px-5 py-8 lg:py-24 grid gap-5 lg:flex lg:justify-center lg:max-w-[78vw] lg:mx-auto lg:gap-[150px] max-w-screen">
        <div>
          <picture>
            <img src="/img/harrilyn-trees.jpg" className="max-w-[534px] lg:justify-self-center w-full rounded-sm shadow-inner" />
          </picture>
        </div>
        <div className="grid gap-5 lg:flex lg:flex-col items-start lg:gap-[34px]">
          <h1 className="text-[#BA0500] text-center lg:text-[60px] lg:leading-[77px]">Meet Harrilyn</h1>
          <p>
            Harrilyn Smith is originally from Mekoryuk, Alaska and has indigenous roots with the Cup'ig of Nunivak Island. She left at the age of 19 and traveled before attending Alaska Technical Center in Kotzebue at the age of 23, and returned home after graduating to begin looking for jobs. She obtained her first apprenticeship with Calista Construction, which was where her career in commercial and residential development first began. After years of living in Alaska, Oregon, and North Carolina, she eventually moved to Washington state in 2017. Harrilyn decided to further her education and attended Northwest Indian College at the Nisqually site in Olympia. She earned her Associate's degree and proudly graduated with Honors. 
          </p>
          <p>
            All throughout her career, Harrilyn gained essential experience and knowledge in the world of commercial and residential development. Upon settling in Lacey in 2017, Harrilyn knew it was time to break away from established contracting agencies and embark on her own as an entrepreneur. She officially opened her business in 2022 and is eager to bring her passion for construction and development to the local community. 
          </p>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#5A9CD7] to-[#5A9CD7] px-5 py-8 lg:py-24 grid gap-5 lg:gap-12 justify-center text-white">
        <h2 className="text-center ">Breaking Ground for Diverse Women</h2>
        <div className="grid gap-5 lg:gap-[34px]">
          <p>
            Throughout her years of working in the construction industry, Harrilyn saw firsthand some of the inequities that exist even today. Racism, sexism, and underrepresentation of diverse workers were the primary problems she witnessed and encountered during her career. Despite these barriers, Harrilyn has seen great personal and financial growth from her own work as a contractor and is determined to welcome more diverse workers and female contractors into the industry so they can share in this success.
          </p>
          <p>
            The mission of AMB is to bring honesty, integrity, equity, and skilled craftsmanship to build projects that last more than a lifetime. To accomplish this, AMB has set out to recruit women and natives to serve as leaders and team players in the construction and development industry. Harrilyn sees great potential in supporting this sector of the workforce by bringing them into this career path. She plans to provide continuing education and opportunities for career advancement to help newcomers to the industry find success and contribute to a more diverse and equitable industry. Her work is making a difference in the lives of women and minorities in Thurston County and surrounding areas as she strives to break down barriers and open up new opportunities for growth and development beyond construction.
          </p>
          <p>
            By working alongside AMB, you can contribute to a push for equity in a primarily male-dominated industry. Diverse groups can experience an uptick in profitability and personal growth by inviting them into this lucrative sector, which benefits our communities as a whole. Harrilyn is eager to utilize her skills, knowledge, and expertise to inspire more diverse women to join AMB and the construction industry so they too can reap the rising rewards.
          </p>
        </div>
      </section>
      <section className="px-5 py-8 lg:py-24 grid gap-5 lg:gap-12 justify-center">
        <h2 className="text-center text-[#BA0500]">Working with AMB</h2>
        <div className="grid gap-5 lg:gap-[34px]">
        <img src="/img/harrilyn-kids.jpg" className="max-w-[400px] mx-auto rounded-sm shadow-inner" />
          <p>
            Throughout her years of working in the construction industry, Harrilyn saw firsthand some of the inequities that exist even today. Racism, sexism, and underrepresentation of diverse workers were the primary problems she witnessed and encountered during her career. Despite these barriers, Harrilyn has seen great personal and financial growth from her own work as a contractor and is determined to welcome more diverse workers and female contractors into the industry so they can share in this success.
          </p>
          <p>
            The mission of AMB is to bring honesty, integrity, equity, and skilled craftsmanship to build projects that last more than a lifetime. To accomplish this, AMB has set out to recruit women and natives to serve as leaders and team players in the construction and development industry. Harrilyn sees great potential in supporting this sector of the workforce by bringing them into this career path. She plans to provide continuing education and opportunities for career advancement to help newcomers to the industry find success and contribute to a more diverse and equitable industry. Her work is making a difference in the lives of women and minorities in Thurston County and surrounding areas as she strives to break down barriers and open up new opportunities for growth and development beyond construction.
          </p>
          <p>
            By working alongside AMB, you can contribute to a push for equity in a primarily male-dominated industry. Diverse groups can experience an uptick in profitability and personal growth by inviting them into this lucrative sector, which benefits our communities as a whole. Harrilyn is eager to utilize her skills, knowledge, and expertise to inspire more diverse women to join AMB and the construction industry so they too can reap the rising rewards.
          </p>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#5A9CD7] to-[#5A9CD7] px-5 py-8 lg:py-24 grid gap-5 lg:gap-12 justify-center text-white">
        <h2>Our Certifications</h2>
        <div className="bg-white w-full max-w-[800px] rounded-sm shadow-md p-5 flex flex-col lg:flex-row items-center gap-8 lg:p-12">
          <img src="/img/agc.jpeg" width="150" height="150" alt="AGC"  />
          <img src="/img/osha30.jpg" width="150" alt="osha" className="w-auto h-[150px]" />
        </div>
      </section>
    </StandardPageLayout>
  )
}
