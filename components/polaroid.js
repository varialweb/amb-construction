import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

// export default function Polaroid({ mobile = '', tablet = '', pc = '', sizes = { mobile: 375, tablet: 768, pc: 1920 }, className }) {

//   return (
//     // <picture
//     // >
//     //   {sizes.pc && <source srcSet={pc} media="(min-width: 1024px)" />}
//     //   {sizes.tablet && <source srcSet={pc} media="(min-width: 768px)" />}
//     //   <img 
//     //     src={mobile} 
//     //     width={sizes.mobile}
//     //     height={sizes.mobile}
//     //     className={`bg-[#fafafa] box-content p-[3%] pb-[24%] shadow-[0_4px_6px_rgb(0_0_0_/_0.15),_0_0_4px_rgb(0_0_0_/_0.1)] rounded-sm ${className} w-full sm:max-w-[${sizes.mobile}px] lg:max-w-[${sizes.pc}px]`}
//     //   />
//     // </picture>
//   )
// }

export default function Polaroid({ 
  src = { mobile: '', tablet: '', pc: ''},
  sizes = { mobile: 375, tablet: 768, pc: 1920 },
  className,
}) {
  const isPc = useMediaQuery({ query: '(min-width: 1024px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width:1023px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  const [width, setWidth] = useState(sizes.mobile)

  useEffect(() => {
    if (isPc) return setWidth(sizes.pc)
    if (isTablet) return setWidth(sizes.tablet)
    
    return setWidth(sizes.mobile)
  }, [sizes, isPc, isTablet, isMobile])

  return (
    <picture>
      <img 
        src={src.mobile} 
        // width={isPc ? sizes.pc : isTablet ? sizes.tablet : sizes.mobile } 
        width={150}
        height={150}
        className={`box-content p-[3%] pb-[24%] bg-[#fafafa] rounded-sm shadow-[0_4px_6px_rgb(0_0_0_/_0.15),_0_0_4px_rgb(0_0_0_/_0.1)] h-fit ${className}`}  
      />
    </picture>
  )
}
