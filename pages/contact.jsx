import Head from "next/head";
import { useState } from "react";
import StandardPageLayout from "../components/layouts/standard-page";

export default function ContactPage() {

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
    <StandardPageLayout>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="AMB General Contractor is your development solution for commercial, residential, and rural projects. Contact us today to get started! " />
      </Head>
      <main className="grid gap-5 lg:gap-12 justify-center p-5 py-12 lg:py-24 bg-gradient-to-b from-[#0070C4] to-[#5A9CD7] text-white">
        <h1 className="text-center">Contact us</h1>
        <p className="text-center">
          AMB General Contractor is your development solution for commercial, residential, and rural projects. Contact us today to get started! 
        </p>
        <form onSubmit={handleContactForm} className="bg-white max-w-[920px] mx-auto p-5 lg:px-16 lg:py-8 grid gap-8 rounded shadow-md text-[#595959] w-full">
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
      </main>
    </StandardPageLayout>
  )
}