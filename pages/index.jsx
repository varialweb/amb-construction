import Link from "next/link";
import { useState } from "react";
import StandardPageLayout from "../components/layouts/standard-page";
import Polaroid from "../components/polaroid";

export default function HomePage() {

  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  function handleContactForm(event) {
    event.preventDefault()

    setLoading(true)

    const { name, email, phone, projectType, comments } = event.target

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        phone: phone.value,
        projectType: projectType.value,
        comments: comments.value,
      })
    })
    .then(response => response.json())
    .then(response => {
      console.log('response', response)

      if (response.success) setSent(true)

      setLoading(false)
    })
    .catch(error => {console.error(error); setLoading(false)})
  }


  return (
    <StandardPageLayout text="white">
      <section className="text-white">
        <picture>
          <source srcSet="/img/home-hero-background.png" media="(min-width: 1024px)" />
          <img 
            src="/img/home-hero-background-mobile.png"
            className="lg:top-0 z-[-1] lg:w-[72vw] lg:right-0 absolute"
          />
        </picture>
        <div className="px-5 py-10 mb-10 lg:pt-[5vw] text-center grid gap-8 lg:gap-16 lg:py-12">
          <p className="font-['Lora',_'Times_New_Roman',_serif] text-5xl lg:text-6xl leading-[61px] lg:leading-[77px] max-w-[10ch] mx-auto drop-shadow-[0_4px_4px_rgb(0_0_0_/_0.2)] lg:max-w-full">Lifting People Up</p>
          <Link href="/contact">
            <a className="bg-gradient-to-b from-[#EF1F1A] to-[#BA0500] text-2xl lg:text-[28px] p-4 lg:py-[22px] rounded-full mx-auto w-[275px] lg:w-[420px] lg:z-50">
              Start building
            </a>
          </Link>
          <div className="flex mx-auto mt-4 lg:relative lg:w-5/6 lg:-top-[180px] lg:flex lg:justify-between">
          {/* <div className=""> */}
            {/* <Polaroid src={{ mobile: '/img/stock-woman-1.png', pc: '/img/stock-woman-1.png'}} sizes={{ mobile: 150, pc: 300 }} className="rotate-[-14deg] relative left-4 z-[2] lg:w-[300px]" /> */}
            <img src="/img/harrilyn-welder.jpg" width="150" height="150" className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] polaroid -rotate-[14deg] relative left-4 p-1.5 lg:p-2.5 pb-10 lg:pb-20" />
            <img src="/img/stock-woman-2.png" width="150" height="150" className="polaroid w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] rotate-[14deg] relative right-4 p-1.5 lg:p-2.5 pb-10 lg:pb-20" />
            {/* <Polaroid src={{ mobile: '/img/stock-woman-2.png', pc: '/img/stock-woman-2.png'}} sizes={{ mobile: 150, pc: 300 }} className="rotate-[14deg] relative right-4 lg:w-[300px]" /> */}
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: 'url(/img/blueprint.png)',
          backgroundSize: '2500px',
        }}
        className="grid gap-8 lg:grid-cols-2 lg:p-[72px] items-center justify-items-center relative"
      >
        <div className="w-full bg-gradient-to-b lg:bg-gradient-to-r from-[#2786CD] to-[#72AEE0] opacity-80 h-full absolute"></div>
        <div className="relative z-50 grid gap-8 p-5 pt-8 pb-12 text-white">
          <h1 className="text-center">Bring Your Blueprint to Life</h1>
          <p>The blueprint is the first piece that really makes your dream of a custom home, new commercial space, or residential development feel real. From there, things can easily feel overwhelming and become complicated as you navigate permitting, regulations, securing materials, and acquiring qualified labor. Rather than going it alone, AMB General Contractor serves as your one-stop developer for commercial and residential construction and provides full project support every step of the way. With extensive industry experience and a commitment to excellence, AMB is the perfect solution to successfully build your blueprints right before your eyes.</p>
          <p>AMB General Contractor proudly provides custom construction across Washington state for federal, state and local government projects, as well as for private entities and individual developers. From small builds to large-scale projects, our contracting team is determined to provide a seamless construction experience for business owners, homeowners, government agencies, and investors alike. In working with us, you can contribute to increased opportunity and diversity in the construction industry while working with contractors of the highest integrity and craftsmanship.</p>
          <p>Working with AMB is more than just hiring a company to provide a service. It is a partnership with a highly skilled contracting team that is committed to both quality and equity. Choose AMB General Contractor for your next project and experience construction that will last a lifetime.</p>
        </div>
        <div className="hidden lg:grid uppercase font-['Lora',_sans-serif] font-bold text-[96px] leading-[96px] tracking-[0.12em] gap-[58px] text-[#B7B7B7]">
          <span>Integrity</span>
          <span>Honesty</span>
          <span>Teamwork</span>
          <span>Leadership</span>
          <span>Equity</span>
          <span>Opportunity</span>
        </div>
      </section>
      <section className="py-12 px-5 grid gap-8 lg:hidden">
        <h2 className="text-center text-[#BA0500]">
          About AMB
        </h2>
        <div className="flex mx-auto lg:justify-between lg:max-w-[40vw]">
          <img src="/img/harrilyn-young-2.png" width="150" height="150" className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] polaroid -rotate-[3.82deg] relative left-4 p-1.5 lg:p-2.5 pb-10 lg:pb-20" />
          <img src="/img/harrilyn-young.png" width="150" height="150" className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] polaroid rotate-[17.98deg] relative right-8 p-1.5 lg:p-2.5 pb-10 lg:pb-20" />
          {/* <Polaroid src={{ mobile: '/img/harrilyn-young-2.png', pc: '/img/harrilyn-young-2.png' }} sizes={{ mobile: 150, pc: 300 }} className="-rotate-[3.82deg] relative left-4 lg:w-[300px]" />
          <Polaroid src={{ mobile: '/img/harrilyn-young.png', pc: '/img/harrilyn-young.png' }} sizes={{ mobile: 150, pc: 300 }} className="rotate-[17.98deg] relative right-6 w-full lg:w-[150px]" /> */}
        </div>
        <p>
        With over 36 years of development experience, owner and founder Harrilyn Smith understands the unique challenges of the industry to successfully execute your construction project. She has spent countless hours working firsthand on a multitude of construction projects and has gained valuable insight into the best methods for commercial and residential development. As an indigenous woman and independent contractor, she is determined to create opportunities for fellow women and minorities in the community to join this ever-growing industry. By working with AMB, you can help break down barriers and support progress and diversity in the field of development and construction. 
        </p>
      </section>
      <section className="grid-cols-2 py-[128px] items-center hidden lg:grid lg:gap-8">
        <div className="flex lg:max-w-[40vw] justify-self-center">
        <img src="/img/harrilyn-young-2.png" width="150" height="150" className="w-[150px] h-[150px] lg:w-[360px] lg:h-[300px] polaroid -rotate-[3.82deg] relative left-4 p-1.5 lg:p-2.5 pb-10 lg:pb-20" />
          <img src="/img/harrilyn-young.png" width="150" height="150" className="w-[150px] h-[150px] lg:w-[360px] lg:h-[300px] polaroid rotate-[17.98deg] relative right-8 p-1.5 lg:p-2.5 pb-10 lg:pb-20" />
          {/* <Polaroid src={{ mobile: '/img/harrilyn-young-2.png', pc: '/img/harrilyn-young-2.png' }} sizes={{ mobile: 150, pc: 360 }} className="-rotate-[3.82deg] relative left-4" />
          <Polaroid src={{ mobile: '/img/harrilyn-young.png', pc: '/img/harrilyn-young.png' }} sizes={{ mobile: 150, pc: 360 }} className="rotate-[17.98deg] relative right-4" /> */}
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-[#BA0500]">
            About AMB
          </h2>
          <p>
            With over 36 years of development experience, owner and founder Harrilyn Smith understands the unique challenges of the industry to successfully execute your construction project. She has spent countless hours working firsthand on a multitude of construction projects and has gained valuable insight into the best methods for commercial and residential development. As an indigenous woman and independent contractor, she is determined to create opportunities for fellow women and minorities in the community to join this ever-growing industry. By working with AMB, you can help break down barriers and support progress and diversity in the field of development and construction. 
          </p>
        </div>
      </section>
      <section className="relative">
        <img src="/img/expertise-background-mobile.png" width="375" className="absolute top-0 -z-[1] lg:hidden" />
        <img src="/img/expertise-background-mobile.png" width="375" className="absolute bottom-0 rotate-180 -z-[1] lg:hidden" />
        <img src="/img/expertise-background.svg" width="1920" className="absolute top-0 -z-[1] hidden lg:block w-full" />
        <img src="/img/expertise-background.svg" width="1920" className="absolute bottom-0 rotate-180 -z-[1] hidden lg:block w-full" />
        <div className="px-5 py-12 lg:px-[128px] lg:py-16 grid gap-9 lg:gap-[72px]">
          <h2 className="text-center text-white">Areas of Expertise</h2>
          <div className="bg-white p-5 lg:p-12 rounded-sm shadow grid gap-5 lg:gap-24 lg:items-center lg:grid-cols-[1fr_auto] max-w-[1380px]">
            <img src="/img/commercial.svg" />
            <div className="grid gap-5">
              <h3 className="text-[28px] text-center leading-[36px]">Commercial Construction</h3>
              <p className="text-justify [hyphens]:[auto] lg:max-w-[70ch]">
                Government agencies, corporations, and small business owners alike can all find the development support they need with AMB. Commercial construction is an in-depth and involved process, which is why it is essential to have a team that you can trust. Our team works tirelessly to ensure that only the most qualified contractors are brought into your project to provide the highest quality and care along the way. Timelines and deadlines are of critical importance to the AMB team, so consistent communication is upheld to keep the status of your project accessible at all times. With state-of-the-art technology, tools, and resources, the AMB build process can surpass almost any obstacle. AMB General Contractor is ready to support your commercial or government project and break ground in the Pacific Northwest. 
              </p>
            </div>
          </div>
          <div className="bg-white p-5 lg:p-12 rounded-sm shadow grid gap-5 lg:gap-24 lg:items-center lg:grid-cols-[1fr_auto] max-w-[1380px] lg:justify-self-end">
            <img src="/img/residential.svg" />
            <div className="grid gap-5">
              <h3 className="text-[28px] text-center leading-[36px]">Residential Development</h3>
              <p className="text-justify [hyphens]:[auto] lg:max-w-[70ch]">
                Investors and homeowners both understand the value in a quality home. Residences are an impactful investment not only in yourself, but also in the community you call home. AMB General Contractor possesses essential knowledge and skills in residential development to construct quality housing for local residents. With experienced subcontractors in essential fields such as plumbing, electrical, and roofing, you can place your trust in AMB for every part of your residential project. Through AMB’s commitment to quality workmanship, our team can easily build homes and neighborhoods families will love. Whether you are a developer looking to build up new neighborhoods or a single family eager to build your dream home, AMB has the skills, knowledge, and resources to perfectly execute your dream and support one of the greatest milestones of your lifetime. 
              </p>
            </div>
          </div>
          <div className="bg-white p-5 lg:p-12 rounded-sm shadow grid gap-5 lg:gap-24 lg:items-center lg:grid-cols-[1fr_auto] max-w-[1380px]">
            <img src="/img/rural.svg" />
            <div className="grid gap-5">
              <h3 className="text-[28px] text-center leading-[36px]">Rural Builds</h3>
              <p className="text-justify [hyphens]:[auto] lg:max-w-[70ch]">
                Much of Washington state still boasts beautiful, rural living for those looking to get away from it all or serve smaller communities. AMB understands the unique challenges of rural development and remote construction and is able to support projects that are off the grid. Through combined commercial and residential experience, our team can develop a range of projects in remote areas to help bring housing and essential services to rural communities. Even if you aren’t citybound, you can still benefit from the expert level of care and quality offered by AMB General Contractor. The AMB team comes with essential skills and knowledge to construct and develop your new build exactly as you imagined it. 
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-5 lg:px-[128px] lg:py-24">
        <div className="lg:hidden grid gap-4">
          <h2 className="text-[#BA0500] text-center">Our Projects</h2>
          <p className="text-center">Explore our portfolio of commercial, residential, and rural projects and get inspired for your new build!</p>
          <div>
            <img src="/img/stock-project.png" className="rounded shadow-inner" />
          </div>
          <Link href="/projects">
            <a className="font-['Lora',_serif] bg-gradient-to-b from-[#EF1F1A] to-[#BA0500] text-white text-center rounded-full py-2.5">
              See portfolio
            </a>
          </Link>
        </div>
        <div className="hidden lg:grid grid-cols-2 items-center justify-center">
          <div className="grid gap-8">
            <h2 className="text-[#BA0500]">Our Projects</h2>
            <p className="">Explore our portfolio of commercial, residential, and rural projects and get inspired for your new build!</p>
            <Link href="/projects">
              <a className="font-['Lora',_serif] bg-gradient-to-b from-[#EF1F1A] to-[#BA0500] text-white text-center rounded-full py-2.5 px-12 w-fit">
                See portfolio
              </a>
            </Link>
          </div>
          <div className="mx-auto justify-self-center grid justify-center w-full">
            <img src="/img/stock-project.png" className="rounded shadow-inner max-w-[600px] w-full" />
          </div>
        </div>
      </section>
      <section className="px-5 py-12 lg:py-24 bg-gradient-to-b from-[#0070C4] to-[#5A9CD7]">
        <form onSubmit={handleContactForm} className="bg-white max-w-[920px] mx-auto p-5 lg:px-16 lg:py-8 grid gap-8 rounded shadow-md">
          <h2 className="text-center text-[#BA0500]">Let's get started</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <label htmlFor="name" className="grid gap-0.5">
              Name
              <input name="name" id="name" />
            </label>
            <label htmlFor="projectType" className="grid gap-0.5">
              Project type
              <select name="projectType" id="projectType">
                <option>Commercial</option>
              </select>
            </label>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <label htmlFor="phone" className="grid gap-0.5">
              Phone number
              <input id="phone" name="phone" />
            </label>
            <label htmlFor="email" className="grid gap-0.5">
              Email address
              <input id="email" name="email" />
            </label>
          </div>
          <label htmlFor="comments" className="grid gap-0.5">
            Questions or comments
            <textarea id="comments" name="comments" rows="5" />
          </label>
          <button
            disabled={sent}
            className="font-['Lora',_serif] bg-gradient-to-b from-[#EF1F1A] to-[#BA0500] text-white rounded-full py-2.5 lg:w-fit lg:px-16 lg:justify-self-center lg:text-xl"
            style={{ background: sent && 'linear-gradient(#5A9CD7, #0070C4)'}}
          >
            {sent ? (
              "Successfully sent!"
            ) : (
              loading ? (
                <img src="/img/loading.png" width="20" height="20" alt="loading" className="w-6 h-6 animate-spin" />
              ) : (
                "Submit"
              )
            )}
          </button>
        </form> 
      </section>
    </StandardPageLayout>
  )
}

