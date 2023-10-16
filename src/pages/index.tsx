import ExpDiv from "@/components/ExpDiv";
import Technologies from "@/components/Technologies";
import { params } from "@/utils/params";
import { useScroll, motion } from "framer-motion";
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
            <ul className=" flex text-lg">
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
      <section ref={techRef} id="technologies" style={{ height: `calc(60vh - 64px)` }}>
        <div className=" sticky top-0'">
          <div className=" pb-16 pt-16">
            <h4 className=" text-lg">technologies</h4>
          </div>

          <div className=" flex whitespace-nowrap h-24 techAnimation overflow-x-hidden pb-16">
            <Technologies animationClass="primary"/>
            <Technologies animationClass="primary"/>
          </div>
        </div>
      </section>
      {/*
      <section id="technologies" style={{ height: `calc(100vh - 64px)` }}>
        <div className=" pb-16 pt-16">
          <h4 className=" text-lg">technologies</h4>
        </div>
        
        <div className=" grid grid-cols-4 grid-rows-6 gap-4" style={{ height: `calc(100vh - 28px - ${64 * 3}px)` }}>
          <TechArticle color="#2A2C2E" image="reactjs.png" imageSize={params[widthType][2][0] as number} link="https://react.dev/" name="test" style={params[widthType][1][0] as { gridColumnStart: number; gridColumnEnd: number; gridRowStart: number; gridRowEnd: number; }}/>
          <TechArticle color="black" image="nextjs.png" imageSize={params[widthType][2][0] as number} link="https://nextjs.org/" name="test" style={params[widthType][1][1] as { gridColumnStart: number; gridColumnEnd: number; gridRowStart: number; gridRowEnd: number; }} />
          <TechArticle color="#2E302C" image="javascript.png" imageSize={params[widthType][2][0] as number} link="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" name="test" style={params[widthType][1][2] as { gridColumnStart: number; gridColumnEnd: number; gridRowStart: number; gridRowEnd: number; }}/>
          <TechArticle color="rgb(229 231 235)" image="typescript.png" imageSize={params[widthType][2][0] as number} link="https://www.typescriptlang.org/" name="test" style={params[widthType][1][3] as { gridColumnStart: number; gridColumnEnd: number; gridRowStart: number; gridRowEnd: number; }}/>
          <TechArticle color="black" image="graphql.png" imageSize={params[widthType][2][0] as number} link="https://graphql.org/" name="test" style={params[widthType][1][4] as { gridColumnStart: number; gridColumnEnd: number; gridRowStart: number; gridRowEnd: number; }}/>
          <TechArticle color="rgb(243 244 246)" image="nodejs.png" imageSize={params[widthType][2][0] as number} link="https://nodejs.org/en" name="test" style={params[widthType][1][5] as { gridColumnStart: number; gridColumnEnd: number; gridRowStart: number; gridRowEnd: number; }}/>
          <TechArticle color="rgb(243 244 246)" image="tailwind.svg" imageSize={params[widthType][2][0] as number} link="https://tailwindcss.com" name="test" style={params[widthType][1][6] as { gridColumnStart: number; gridColumnEnd: number; gridRowStart: number; gridRowEnd: number; }}/>
        </div>
      </section>
      */}
      <section id="portfolio" style={{ minHeight: `calc(100vh - 64px)` }}>
        <div className=" pb-16 pt-16">
          <h4 className=" text-lg">portfolio</h4>
        </div>
        <div>
          <h1 className={` ${widthType == 2 ? " text-2xl" : " text-4xl"} pb-8 flex items-center`}>LightREF☀️<span className={`${widthType == 2 ? " text-sm" : "text-base"}`}>as a Fullstack Developer</span></h1>
          <ExpDiv
            title="LightREF"
            description="LightREF is the place to effortlessly store your references. Simply drag and drop images or GIFs in your browser and access them from anywhere. I designed the project, integrate it with the server and
            deployed it"
            image="lightref.jpg"
            width={params[widthType][0][0] as number}
            padding="pb-28"
            url="https://lightref.com/about"
            tecImages={["nextjsicon.svg", "nodejs.png", "tailwindicon.svg", "redux.png"]}
            widthType={widthType}
          />
          <h1 className={` ${widthType == 2 ? " text-2xl" : " text-4xl"} pb-8`}>Red Balloons Studios🎈 <span className={`${widthType == 2 ? " text-sm" : "text-base"}`}>as a Frontend Developer (feb. 2022 - present)</span></h1>
          <ExpDiv
            title="Red Balloons Store"
            description="Planned and Built this complete ecommerce"
            image="redballoonsstore.jpg"
            width={params[widthType][0][0] as number}
            padding="pb-16"
            url="https://redballoonsstore.shop"
            tecImages={["nextjsicon.svg", "typescript.png", "nodejs.png", "graphql.png", "tailwindicon.svg"]}
            widthType={widthType}
          />
          <ExpDiv
            title="Red Balloons Studios"
            description="Built this responsive webpage for company arts showcase."
            image="redballoonsstudios.jpg"
            width={params[widthType][0][0] as number}
            padding=""
            url="https://redballoonsstudios.com"
            tecImages={["reactjs.png", "javascript.png", "nodejs.png"]}
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
            I started programming with competitive robotics championships, then transitioned into web development, specializing in creating dynamic, user-centric web experiences. I am a fast learner and a great team partner!
          </div>
          <div className=" flex justify-center items-center text-5xl" style={{ height: `${ widthType == 2 ? "calc(50vh - 28px - 192px)" : "calc(100vh - 28px - 192px)" }` }}>
            <a href="https://www.linkedin.com/in/nícolas-araujo" target="_blank" rel="noopener noreferrer" className=" mx-8 linkedin">
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
