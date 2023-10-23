const Technologies = ({ animationClass }: { animationClass: string }) => {
  return (
    <div className={`${animationClass} flex flex-shrink-0 w-max overflow-x-hidden`}>
      <img className=" h-16 sm:h-24 ml-12 sm:ml-20 mr-6 sm:mr-10" src="javascript.png" alt="" />
      <img className=" h-16 sm:h-24 mx-6 sm:mx-10" src=" typescript.png" alt="" />
      <img className=" h-16 sm:h-24 mx-6 sm:mx-10" src="reactjs.png" alt="" />
      <img className=" h-16 sm:h-24 mx-6 sm:mx-10" src="nextjsicon.svg" alt="" />
      <img className=" h-16 sm:h-24 mx-6 sm:mx-10" src="redux.png" alt="" />
      <img className=" h-16 sm:h-24 mx-6 sm:mx-10" src="tailwindicon.svg" alt="" />
      <img className=" h-16 sm:h-24 mx-6 sm:mx-10" src="nodejs.png" alt="" />
      <img className=" h-16 sm:h-24 mx-6 sm:mx-10" src="graphql.png" alt="" />
      <img className=" h-16 sm:h-24 mx-6 sm:mx-10" src="mysql.png" alt="" />
      <img className=" h-16 sm:h-24 ml-6 sm:ml-10" src="socketio.png" alt="" />
    </div>
  )
}

export default Technologies