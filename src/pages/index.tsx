import ExpDiv from "@/components/ExpDiv";
import { params } from "@/utils/params";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home() {

  const [ isBtnHidden, setIsBtnHidden ] = useState<boolean>(true)
  const [ widthType, setWidthType ] = useState< 0 | 1 | 2 >(0)
  const [ titleSize, setTitleSize ] = useState< "text-9xl" | "text-8xl" | "text-7xl" >("text-9xl")
  const [ leftMove, setLeftMove ] = useState<number>()
  const techRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: techRef,
    offset: ["end end", "start start"]
  })

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsBtnHidden(false)
    } else {
      setIsBtnHidden(true)
    }
  }

  const handleWidthType = () => {
    const width = window.innerWidth

    if (width >= 1200) {
      setWidthType(0)
      setTitleSize("text-9xl")
    } else if (width > 800 && width < 1200) {
      setWidthType(1)
      setTitleSize("text-8xl")
    } else {
      setWidthType(2)
      setTitleSize("text-7xl")
    }
  }

  useEffect(() => {
    handleScroll()
    handleWidthType()
    window.addEventListener("scroll", () => handleScroll())
    window.addEventListener("resize", () => handleWidthType())
  }, [])

  useEffect(() => {
    scrollYProgress.on("change", v => setLeftMove(v))
  }, [scrollYProgress])

  return (
    <main className=" p-16">
      <a href="#" className={` w-20 h-12 bg-black text-white flex justify-start pl-4 items-center text-2xl fixed bottom-16 z-50 ${ isBtnHidden ? "hideBtn" : "showBtn" }`}>
        <i className="fa-solid fa-up-long"></i>
      </a>
      <section className=" flex flex-col justify-between" style={{height: `calc(100vh - 128px)`}}>
        <div>
          <nav className=" flex justify-end pb-16">
            <ul className=" flex md:text-lg">
              <li><a href="#technologies" className="mr-8">technologies</a></li>
              <li><a href="#portfolio" className="mr-8">portfolio</a></li>
              <li><a href="#aboutme">about me</a></li>
            </ul>
          </nav>
          <h1 className={` ${titleSize} title-animation-right`}>NÍCOLAS</h1>
          <h1 className={` ${titleSize} title-animation-left`}>ARAUJO</h1>
          <h4 className=" text-lg">Web Developer</h4>
        </div>
        <a href="#technologies" className={` flex justify-center btnDown to-technologies ${isBtnHidden ? "" : " text-white"}`}>
          <i className="fa-solid fa-chevron-down"></i>
        </a>
      </section>
      <section ref={techRef} id="technologies" style={{ minHeight: `calc(60vh - 64px)` }}>
        <div className=" sticky top-0'">
          <div className=" pb-16 pt-16">
            <h4 className=" text-lg">technologies</h4>
          </div>
          <div className="flex justify-center gap-x-8 gap-y-10 flex-wrap">
            {["aws.png", "graphql.png", "javascript.png", "mysql.png", "nextjsicon.svg", "nodejs.png", "reactjs.png", "redux.png", "tailwindicon.svg", "typescript.png"].map((item, index) => {
              return (
                <img key={index} className=" h-16 md:h-20" src={item} alt={item.split(".")[0]} />
              )
            })}
          </div>   
        </div>
      </section>
      <section id="portfolio" style={{ minHeight: `calc(100vh - 64px)` }}>
        <div className=" pb-16 pt-16">
          <h4 className=" text-lg">portfolio</h4>
        </div>
        <div>
          <h1 className={` ${widthType == 2 ? " text-2xl" : " text-4xl"} pb-8`}>Red Balloons Studios🎈 <span className={`${widthType == 2 ? " text-sm" : "text-base"}`}>as a Fullstack Developer</span></h1>
          <ExpDiv
            title="Red Balloons Store"
            description="Reduced the number of API calls, resulting in a 20% savings in server costs. Integrated with AWS S3"
            image="redballoonsstoremp.png"
            width={params[widthType][0][0] as number}
            padding="pb-16"
            url="https://redballoonsstore.shop"
            tecImages={["nextjsicon.svg", "typescript.png", "nodejs.png", "graphql.png", "tailwindicon.svg", "aws.png"]}
            widthType={widthType}
          />
          <ExpDiv
            title="Red Balloons Studios"
            description="Built this responsive webpage for company arts showcase."
            image="redballoonsstudios.jpg"
            width={params[widthType][0][0] as number}
            padding="pb-28"
            url="https://redballoonsstudios.com"
            tecImages={["reactjs.png", "javascript.png", "nodejs.png"]}
            widthType={widthType}
          />
          <h1 className={` ${widthType == 2 ? " text-2xl" : " text-4xl"} pb-8 flex items-center`}>LightREF☀️<span className={`${widthType == 2 ? " text-sm" : "text-base"}`}>as a Fullstack Developer</span></h1>
          <ExpDiv
            title="LightREF"
            description="LightREF is the place to effortlessly store your references. Simply drag and drop images or GIFs in your browser and access them from anywhere. I designed the project, integrate it with the server and
            deployed it"
            image="lightref.jpg"
            width={params[widthType][0][0] as number}
            padding=""
            url="https://lightref.com/about"
            tecImages={["nextjsicon.svg", "nodejs.png", "tailwindicon.svg", "redux.png"]}
            widthType={widthType}
          />
        </div>
      </section>
      <section id="aboutme" style={{ minHeight: `calc(100vh - 64px)` }}>
        <div className=" pb-16 pt-16">
          <h4 className=" text-lg">about me</h4>
        </div>
        <div className={` grid justify-around items-center ${widthType == 2 ? " grid-cols-1 grid-rows-2" : " grid-cols-2 grid-rows-1"}`}>
          <div className="text-center">
            Detail-oriented Fullstack Developer with 2 years of experience in web development, specializing in creating dynamic, user-centric web experiences. Skilled in React.js, Next.js, TypeScript, JavaScript (ES6+), Node.js, and GraphQL. Proficient in both independent and collaborative projects, with a strong focus on landing page and website development.
          </div>
          <div className=" flex justify-center items-center text-5xl" style={{ height: `${ widthType == 2 ? "calc(50vh - 28px - 192px)" : "calc(100vh - 28px - 192px)" }` }}>
            <a href="https://www.linkedin.com/in/nicolas-fc-araujo" target="_blank" rel="noopener noreferrer" className=" mx-8 linkedin">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/NicolasfcAraujo" target="_blank" rel="noopener noreferrer" className=" mx-8 github">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="nicolas_araujo-cv.pdf" target="_blank" rel="noopener noreferrer" className=" mx-8 github">
              <i className="fa-solid fa-file"></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 
