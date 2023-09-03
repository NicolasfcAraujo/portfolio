import { useEffect, useRef, useState } from "react"

type ExpProps = {
  title: string,
  description: string,
  image: string,
  width: number,
  padding: string,
  url: string,
  tecImages: string[],
  widthType: number
}

const ExpDiv = (props: ExpProps) => {

  const [ width, setWidth ] = useState<number>(280)
  const [ show, setShow ] = useState<boolean>(false)
  const ref = useRef(null)

  const handleWidth = () => {
    setWidth(window.innerWidth - 128)
  }

  const handleScroll = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(true)
        }
      })
    })

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }

  useEffect(() => {
    handleWidth()
    handleScroll()
    window.addEventListener("resize", handleWidth)
  }, [])

  return (
    <div ref={ref} className={`${props.padding} ${show ? "exp-show": ""}`}>
      <h2 className=" text-2xl pb-2">{props.title}</h2>
      <div className={` grid ${props.widthType == 2 ? " grid-cols-1" : " grid-cols-2"}`}>
        <a href={`${props.url}`} target="_blank" rel="noopener noreferrer" className=" w-fit">
          <div className=" rounded bg-gray-700 shadow-lg" style={{ 
            width: `${props.widthType == 2 ? `${width}px` : `${props.width}px`}`,
            height: `${props.widthType == 2 ? width * (9/19) : props.width * (9/19)}px`,
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
          </div>
        </a>
        <div className={` ${props.widthType == 2 ? " pt-4" : ""} `}>
          {props.description}
            <div>
              technologies:
            </div>
            <div className={` ${props.widthType == 2 ? " grid grid-cols-4 gap-y-4 place-items-center" : " flex pt-4"} pt-4`}>
              {props.tecImages.map((link, index) => {
                return (
                  <img key={index} className={`h-10 mx-2 saturate-0 hover:saturate-100`} src={link} alt={link.split(".")[0]}/>
                )
              })}
            </div>
        </div>
      </div>
    </div>
  )
}
export default ExpDiv