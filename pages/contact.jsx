import StandardPageLayout from "../components/layouts/standard-page";

export default function ContactPage() {
  return (
    <StandardPageLayout>
      <main className="grid gap-5 lg:gap-12 justify-center p-5 py-12 lg:py-24 bg-gradient-to-b from-[#0070C4] to-[#5A9CD7] text-white">
        <h1 className="text-center">Contact us</h1>
        <p>
          AMB General Contractor is your development solution for commercial, residential, and rural projects. Contact us today to get started! 
        </p>
        <form className="bg-white max-w-[920px] mx-auto p-5 lg:px-16 lg:py-8 grid gap-8 rounded shadow-md text-[#595959]">
          <h2 className="text-center text-[#BA0500]">Let's get started</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <label className="grid gap-0.5">
              Name
              <input />
            </label>
            <label className="grid gap-0.5">
              Project type
              <select>
                <option>Commercial</option>
              </select>
            </label>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <label className="grid gap-0.5">
              Phone number
              <input />
            </label>
            <label className="grid gap-0.5">
              Email address
              <input />
            </label>
          </div>
          <label className="grid gap-0.5">
            Questions or comments
            <textarea rows="5" />
          </label>
          <button className="font-['Lora',_serif] bg-gradient-to-b from-[#EF1F1A] to-[#BA0500] text-white rounded-full py-2.5 lg:w-fit lg:px-16 lg:justify-self-center lg:text-xl">Submit</button>
        </form>
      </main>
    </StandardPageLayout>
  )
}