import StandardFooter from "./standard-page/footer";
import StandardNav from "./standard-page/nav";

export default function StandardPageLayout({ children, text = "black" }) {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] max-w-[100vw] w-screen overflow-x-hidden">
      <StandardNav text={text} />
      <div>
        {children}
      </div>
      <StandardFooter />
    </div>
  )
}
